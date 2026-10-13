import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Layers3, Palette, Settings2, Wind } from 'lucide-react'
import { demoTenants } from '@/config/tenants'

export const metadata: Metadata = {
  title: { absolute: 'ACWebsite — Premium websites for AC businesses' },
  description: 'A configurable website platform concept for air-conditioning and HVAC businesses. Explore branded demo websites and reusable service layouts.',
  robots: { index: false, follow: false },
}

const features = [
  {
    icon: Palette,
    number: '01',
    title: 'Your brand, your website',
    description: 'Configure business identity, colours, logo, copy, services, and contact details without rebuilding the layout.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Built for AC services',
    description: 'Reusable sections for installation, repair, maintenance, commercial HVAC, and service enquiries.',
  },
  {
    icon: Settings2,
    number: '03',
    title: 'A flexible foundation',
    description: 'A shared template system designed to grow into business accounts, editing tools, publishing, and secure enquiry management.',
  },
]

export default function PlatformPage() {
  return (
    <main className="platform-page min-h-screen overflow-hidden bg-[#07111d] text-white">
      <div className="border-b border-white/10 bg-white/[.025]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link href="/platform" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 text-slate-950"><Wind size={21} /></span>
            <span className="text-lg font-semibold tracking-tight">AC<span className="text-cyan-300">Website</span></span>
          </Link>
          <a href="#templates" className="rounded-full border border-white/15 px-4 py-2.5 text-sm transition hover:border-cyan-200/50 hover:bg-white/5">Explore templates</a>
        </div>
      </div>

      <section className="platform-hero relative">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-20 pt-16 md:grid-cols-[1.05fr_.95fr] md:px-10 md:pb-28 md:pt-24">
          <div className="relative z-[1]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.07] px-3 py-2 text-xs tracking-wide text-cyan-100"><span className="h-2 w-2 rounded-full bg-cyan-300" /> WEBSITE PLATFORM CONCEPT FOR HVAC BUSINESSES</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-6xl lg:text-7xl">A better digital home for <span className="platform-gradient-text">every cooling business.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300/70 md:text-lg">Premium, configurable AC business websites with considered design, clear service journeys, and a reusable foundation for multiple brands.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#templates" className="group inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">Explore live previews <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>
              <a href="#how-it-works" className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium transition hover:border-white/35 hover:bg-white/5">How it works</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400"><span>Brand-configurable</span><span>·</span><span>HVAC-focused</span><span>·</span><span>Responsive by design</span></div>
          </div>

          <div className="platform-visual relative mx-auto flex min-h-[340px] w-full max-w-[560px] items-center justify-center md:min-h-[480px]">
            <div className="platform-ring platform-ring-a" /><div className="platform-ring platform-ring-b" />
            <div className="platform-glass-card relative z-[1] w-full max-w-[420px] rounded-[2rem] border border-white/15 p-5 shadow-2xl backdrop-blur-xl md:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-cyan-300" /><span className="text-xs font-medium tracking-wide text-white/80">YOUR HVAC WEBSITE</span></div>
                <span className="text-[10px] tracking-widest text-white/35">PREVIEW 01</span>
              </div>
              <div className="py-7">
                <div className="mb-4 h-2 w-20 rounded-full bg-cyan-300/60" />
                <div className="text-3xl font-semibold leading-tight tracking-tight">Comfort, <span className="text-cyan-300">reimagined.</span></div>
                <div className="mt-3 h-2 w-4/5 rounded-full bg-white/15" /><div className="mt-2 h-2 w-3/5 rounded-full bg-white/10" />
                <div className="mt-7 flex gap-3"><div className="h-9 w-32 rounded-full bg-cyan-300" /><div className="h-9 w-24 rounded-full border border-white/20" /></div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['INSTALL', 'REPAIR', 'MAINTAIN'].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[.04] p-3 text-center text-[9px] tracking-widest text-white/55">{item}</div>)}
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/[.05] p-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/15 text-cyan-200"><Wind size={16} /></span><span className="text-xs text-white/65">Same system. Distinct business identity.</span></div>
            </div>
            <div className="absolute bottom-5 right-0 rounded-2xl border border-white/10 bg-[#101f2e]/90 px-4 py-3 text-xs text-slate-300 shadow-xl">Reusable design system <span className="ml-2 text-cyan-300">↗</span></div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.025]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-12 md:grid-cols-3 md:px-10">
          {features.map(({ icon: Icon, number, title, description }) => <article key={number} className="rounded-3xl border border-white/10 bg-white/[.025] p-6 md:p-7"><div className="mb-8 flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Icon size={21} /></span><span className="text-xs tracking-widest text-white/30">{number}</span></div><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-white/55">{description}</p></article>)}
        </div>
      </section>

      <section id="templates" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="mb-3 text-xs font-semibold tracking-[.22em] text-cyan-300">TEMPLATE PREVIEWS</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Different businesses. Different personalities.</h2></div>
          <p className="max-w-md text-sm leading-6 text-white/55">Explore fictional demos showing how the same platform can serve different AC business types.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {demoTenants.map((tenant, index) => <article key={tenant.slug} className="platform-template-card group overflow-hidden rounded-3xl border border-white/10">
            <div className={`platform-template-art platform-template-art-${index + 1} relative flex h-48 items-end p-5`}><span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] tracking-[.18em] backdrop-blur-md">{tenant.theme.toUpperCase()} THEME</span><span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 transition group-hover:rotate-45"><ArrowRight size={17} /></span></div>
            <div className="p-6"><p className="text-xs tracking-wide text-cyan-200">{tenant.heroEyebrow}</p><h3 className="mt-3 text-xl font-semibold">{tenant.name}</h3><p className="mt-2 min-h-[48px] text-sm leading-6 text-white/55">{tenant.description}</p><Link href={`/demo/${tenant.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:gap-3">Open demo <ArrowRight size={15} /></Link></div>
          </article>)}
        </div>
        <p className="mt-5 text-xs leading-5 text-white/35">These are illustrative previews with fictional business details. Authentication, a visual editor, payments, custom domains, and production enquiry delivery are not represented as completed features.</p>
      </section>

      <section id="how-it-works" className="border-y border-white/10 bg-white/[.025]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-24">
          <div><p className="mb-3 text-xs font-semibold tracking-[.22em] text-cyan-300">HOW IT WORKS</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">One foundation. A website shaped around each business.</h2><p className="mt-5 text-sm leading-7 text-white/55">ACWebsite is being structured around reusable page components and typed business configuration. This foundation can be extended with authenticated editing, persistent data, secure enquiries, and publishing.</p></div>
          <div className="space-y-4">
            {['Choose a suitable website theme.', 'Add the business identity, services, and imagery.', 'Connect real contact details and enquiry handling.', 'Review the site and publish after verification.'].map((step, index) => <div key={step} className="flex gap-4 rounded-2xl border border-white/10 p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-sm font-semibold text-cyan-200">0{index + 1}</span><span className="pt-2 text-sm text-white/75">{step}</span><Check className="ml-auto mt-2 shrink-0 text-cyan-300" size={16} /></div>)}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-8 text-xs text-white/40 sm:flex-row md:px-10"><span>ACWebsite · HVAC website platform concept</span><span>Demo content is fictional and requires configuration before real use.</span></footer>
    </main>
  )
}
