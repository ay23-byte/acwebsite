import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AC Repair Near Me in Lucknow & Barabanki | Air Pro Cooling Service',
    template: '%s | Air Pro Cooling Service',
  },
  description: 'Best AC repair service near me in Lucknow & Barabanki. Expert AC installation, maintenance, gas refill & cleaning. Same-day service ✓ Affordable prices ✓ 24/7 booking ✓ 5000+ happy customers. Call now!',
  keywords: 'AC repair near me, AC repair Lucknow, AC repair Barabanki, AC installation Lucknow, AC gas refill, AC maintenance, air conditioning service, AC cleaning, best AC technician Lucknow, AC service near me, emergency AC repair',
  authors: [{ name: 'Air Pro Cooling Service' }],
  creator: 'Air Pro Cooling Service',
  publisher: 'Air Pro Cooling Service',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://airprocoolingservice.com',
    siteName: 'Air Pro Cooling Service',
    title: 'AC Repair Near Me in Lucknow & Barabanki | Air Pro Cooling',
    description: 'Professional AC repair, installation & gas refill in Lucknow & Barabanki. Same-day service available. 5000+ customers served.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Air Pro Cooling Service - AC Repair in Lucknow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC Repair Near Me in Lucknow & Barabanki',
    description: 'Best AC repair service in Lucknow & Barabanki. Same-day service, affordable prices.',
    images: ['/images/hero.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://airprocoolingservice.com',
  },
  category: 'Home Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Air Pro Cooling Service',
    description: 'Professional AC repair, installation, maintenance & gas refill services in Lucknow and Barabanki',
    url: 'https://airprocoolingservice.com',
    telephone: '+91-6393997891',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8467,
      longitude: 80.9462,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Lucknow',
      },
      {
        '@type': 'City',
        name: 'Barabanki',
      },
    ],
    serviceType: ['AC Repair', 'AC Installation', 'AC Maintenance', 'AC Gas Refill', 'AC Cleaning'],
    priceRange: '₹₹',
    openingHours: 'Mo-Su 00:00-23:59',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '5000',
    },
    sameAs: [],
  }

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q3EGSNYWG0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q3EGSNYWG0');
          `}
        </Script>
        <Script id="json-ld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
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