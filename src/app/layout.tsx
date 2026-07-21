import type { Metadata } from 'next'
import { DM_Mono, Instrument_Serif, DM_Sans } from 'next/font/google'
import './globals.css'

const dmMono = DM_Mono({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://testopseng.com'),
  title: 'TestOps Engineering — QA & Automation Consulting',
  description:
    'TestOps Engineering — QA consulting for startups and mid-size tech companies. Test strategy, automation frameworks, AI/LLM testing, and CI/CD quality gates.',
  keywords:
    'testops, qa consulting, test automation, quality engineering, cicd, ai testing, llm testing, software testing',
  openGraph: {
    title: 'TestOps Engineering — QA & Automation Consulting',
    description:
      'Senior-level QA strategy, automation, and AI-assisted testing for startups and growing tech teams.',
    type: 'website',
    images: [{ url: '/testops_image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/testops_image.png'],
  },
  icons: { icon: '/testops_image.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmMono.variable} ${instrumentSerif.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
