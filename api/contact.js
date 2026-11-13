// Vercel serverless function: forwards contact-form submissions to Slack.
// Requires the SLACK_WEBHOOK_URL environment variable (a Slack incoming webhook).
// Email delivery is handled separately by FormSubmit; this only notifies Slack.

const FIELDS = ['name', 'email', 'company', 'company_size', 'service', 'timeline', 'message']
const MAX_LEN = { message: 4000, default: 200 }
const ALLOWED_ORIGINS = ['https://testopseng.com', 'https://www.testopseng.com']

function clean(value, max) {
  return String(value ?? '').trim().slice(0, max)
}

// Slack mrkdwn treats <, > and & specially; escape so user input can't inject links or mentions.
function escapeSlack(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const origin = req.headers.origin
  if (origin && !ALLOWED_ORIGINS.includes(origin) && !origin.endsWith('.vercel.app')) {
    return res.status(403).json({ ok: false, error: 'Forbidden' })
  }

  const webhook = process.env.SLACK_WEBHOOK_URL
  if (!webhook) {
    return res.status(503).json({ ok: false, error: 'Slack not configured' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  body = body || {}

  // Honeypot: real visitors never fill this hidden field.
  if (body._honey) return res.status(200).json({ ok: true })

  const data = {}
  for (const f of FIELDS) data[f] = escapeSlack(clean(body[f], MAX_LEN[f] || MAX_LEN.default))

  if (!data.name || !data.email || !data.message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }

  const field = (label, value) => ({ type: 'mrkdwn', text: `*${label}*\n${value || '—'}` })

  const payload = {
    text: `New TestOps inquiry from ${data.name}`,
    blocks: [
      { type: 'header', text: { type: 'plain_text', text: 'New TestOps inquiry', emoji: true } },
      {
        type: 'section',
        fields: [
          field('Name', data.name),
          field('Email', data.email),
          field('Company', data.company),
          field('Company size', data.company_size),
          field('Service', data.service),
          field('Timeline', data.timeline),
        ],
      },
      { type: 'section', text: { type: 'mrkdwn', text: `*Message*\n${data.message}` } },
      {
        type: 'context',
        elements: [{ type: 'mrkdwn', text: 'Submitted via testopseng.com/contact' }],
      },
    ],
  }

  try {
    const r = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!r.ok) {
      console.error('Slack webhook failed', r.status, await r.text())
      return res.status(502).json({ ok: false, error: 'Slack request failed' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Slack webhook error', err)
    return res.status(502).json({ ok: false, error: 'Slack request failed' })
  }
}
