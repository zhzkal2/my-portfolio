import './globals.scss'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import GoogleAnalytics from './components/google-analytics'

export const metadata: Metadata = {
  title: {
    default: `TaeWoong portfolio`,
    template: '%s | MacOS Dock Animation',
  },

  openGraph: {
    title: `My-portfolio`,
    siteName: `My-portfolio `,
    type: 'website',
    locale: 'es-ES',

  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      </head>
      <GoogleAnalytics />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
