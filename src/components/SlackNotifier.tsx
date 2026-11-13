'use client'

import { useEffect } from 'react'

/**
 * Sends a copy of the contact form to /api/contact (which posts to Slack)
 * without blocking the normal FormSubmit submission. `keepalive` lets the
 * request finish even though the page navigates away to FormSubmit.
 */
export default function SlackNotifier({ formId }: { formId: string }) {
  useEffect(() => {
    const form = document.getElementById(formId) as HTMLFormElement | null
    if (!form) return

    const onSubmit = () => {
      const data: Record<string, string> = {}
      new FormData(form).forEach((value, key) => {
        if (typeof value === 'string') data[key] = value
      })
      try {
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          keepalive: true,
        }).catch(() => {})
      } catch {
        // Never let a Slack problem stop the email submission.
      }
    }

    form.addEventListener('submit', onSubmit)
    return () => form.removeEventListener('submit', onSubmit)
  }, [formId])

  return null
}
