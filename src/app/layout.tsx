import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Air Pro Cooling Service | AC Repair, Installation & Gas Refill in Lucknow',
  description: 'Professional AC repair, installation, servicing & gas charging at affordable prices. Same-day service available. ✓ 4.9 rating ✓ 5000+ customers ✓ 24/7 booking.',
  keywords: 'AC repair Lucknow, AC installation, AC gas refill, AC maintenance, air conditioning service',
  openGraph: {
    title: 'Air Pro Cooling Service',
    description: 'Professional AC services in Lucknow',
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
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}