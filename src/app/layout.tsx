import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Provider from '@/components/Provider'

export const metadata: Metadata = {
  title: {
    default: 'ACWebsite — A better digital home for HVAC businesses',
    template: '%s | ACWebsite',
  },
  description:
    'A flexible website concept for heating, cooling and HVAC businesses. Explore a polished, responsive design system built to help service companies present their work clearly.',
  applicationName: 'ACWebsite',
  keywords: [
    'HVAC website design',
    'AC repair website',
    'heating and cooling businesses',
    'service business website',
    'HVAC digital presence',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'ACWebsite',
    title: 'ACWebsite — A better digital home for HVAC businesses',
    description:
      'A flexible website concept for heating, cooling and HVAC businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACWebsite — A better digital home for HVAC businesses',
    description:
      'A flexible website concept for heating, cooling and HVAC businesses.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
