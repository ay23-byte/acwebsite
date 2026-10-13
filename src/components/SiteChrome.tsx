'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStandaloneExperience =
    pathname === '/platform' ||
    pathname.startsWith('/platform/') ||
    pathname.startsWith('/demo/')

  if (isStandaloneExperience) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
