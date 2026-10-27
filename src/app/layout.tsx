import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PricklyAI · Exam-Specific AI Revision for Cambridge O-Level & IGCSE',
  description: 'Master authentic Cambridge past papers, receive real-time examiner-mark-scheme explanations with step-by-step mark breakdowns, and retain 95% using the Leitner 5-box spaced engine.',
  keywords: [
    'Cambridge IGCSE revision',
    'Cambridge O-Level past papers',
    'Leitner 5-box method',
    'Cambridge examiner marking scheme',
    'AI revision tutor',
    'IGCSE physics chemistry biology maths',
  ],
  openGraph: {
    title: 'PricklyAI · Exam-Specific AI Revision for Cambridge O-Level & IGCSE',
    description: 'Master authentic Cambridge past papers, receive real-time examiner-mark-scheme explanations, and retain 95% using the Leitner 5-box spaced engine.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌵</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}
