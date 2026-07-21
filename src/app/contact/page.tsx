import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact — TestOps Engineering',
  description: 'Contact TestOps Engineering for a scoped QA consulting quote.',
  openGraph: { images: [{ url: '/testops_image.png' }] },
}

export default function Contact() {
  return (
    <>
      <header className="contact-header">
        <div className="wrap contact-top">
          <Link className="brand" href="/">
            <Image src="/test_ops_logo.png" alt="TestOps Engineering logo" width={16} height={16} />
            TestOps Engineering
          </Link>
          <Link className="back" href="/">Back to site</Link>
        </div>
      </header>

      <main className="wrap" style={{ maxWidth: 860 }}>
        <section className="contact-hero">
          <p className="kicker">Contact</p>
          <h1>Tell me about your QA goals</h1>
          <p className="contact-sub">
            Share your current setup, problems, and timeline. I&apos;ll review and send back a
            scoped recommendation and quote.
          </p>
        </section>

        <form
          className="contact-form"
          action="https://formsubmit.co/YOUR_EMAIL@example.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New TestOps inquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://testopseng.com/thanks/" />

          <div className="form-grid">
            <div className="form-row">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-input" id="name" name="name" type="text" required />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="email">Work email</label>
              <input className="form-input" id="email" name="email" type="email" required />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-row">
              <label className="form-label" htmlFor="company">Company</label>
              <input className="form-input" id="company" name="company" type="text" />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="company_size">Company size</label>
              <select className="form-select" id="company_size" name="company_size">
                <option value="">Select one</option>
                <option>1–10</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>201–500</option>
                <option>500+</option>
              </select>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-row">
              <label className="form-label" htmlFor="service">Service needed</label>
              <select className="form-select" id="service" name="service" required>
                <option value="">Select one</option>
                <option>QA Audit &amp; Roadmap</option>
                <option>Automation Build</option>
                <option>Release Reliability / Flakiness</option>
                <option>AI &amp; LLM Testing</option>
              </select>
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="timeline">Timeline</label>
              <select className="form-select" id="timeline" name="timeline">
                <option>ASAP</option>
                <option>Within 30 days</option>
                <option>1–3 months</option>
                <option>Just exploring</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="message">
              What are you trying to improve?
            </label>
            <textarea
              className="form-textarea"
              id="message"
              name="message"
              required
            />
          </div>

          <button className="form-btn" type="submit">Send inquiry</button>
        </form>
      </main>

      <footer className="contact-footer">
        <div className="wrap">© 2026 TestOps Engineering</div>
      </footer>
    </>
  )
}
