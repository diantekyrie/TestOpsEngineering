import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Thanks — TestOps Engineering',
  description: 'Your inquiry has been sent to TestOps Engineering.',
  robots: { index: false, follow: true },
}

export default function Thanks() {
  return (
    <>
      <Nav />

      <main className="wrap" style={{ maxWidth: 860 }}>
        <section className="contact-hero">
          <p className="kicker">Message sent</p>
          <h1>Thanks — I&apos;ll be in touch</h1>
          <p className="contact-sub">
            Your inquiry is on its way. I&apos;ll review it and reply with next steps or a time for a
            quick call.
          </p>
          <p style={{ marginTop: '2rem' }}>
            <a className="btn-primary" href="/">Back to home</a>
          </p>
        </section>
      </main>

      <footer className="contact-footer">
        <div className="wrap">© 2026 TestOps Engineering</div>
      </footer>
    </>
  )
}
