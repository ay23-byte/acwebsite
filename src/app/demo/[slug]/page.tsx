import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowDownRight, ArrowRight, Check, Wind } from 'lucide-react'
import { demoTenants, getDemoTenant } from '@/config/tenants'

type DemoPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return demoTenants.map((tenant) => ({ slug: tenant.slug }))
}

export function generateMetadata({ params }: DemoPageProps): Metadata {
  const tenant = getDemoTenant(params.slug)

  if (!tenant) return { title: 'Demo website not found | ACWebsite' }

  return {
    title: `${tenant.name} | ACWebsite demo`,
    description: tenant.description,
    robots: { index: false, follow: false },
  }
}

function AirflowArtwork() {
  return (
    <div className="relative mx-auto flex min-h-[320px] w-full max-w-[560px] items-center justify-center md:min-h-[470px]" aria-label="Decorative illustration of a modern air conditioner">
      <div className="absolute h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl md:h-96 md:w-96" />
      <svg viewBox="0 0 560 420" role="img" aria-label="Stylised wall-mounted air conditioner with flowing air lines" className="relative w-full drop-shadow-2xl">
        <defs>
          <linearGradient id="ac-body" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#e6edf4" />
            <stop offset="100%" stopColor="#aebdca" />
          </linearGradient>
          <linearGradient id="ac-shadow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8ba1b2" stopOpacity=".4" />
            <stop offset="100%" stopColor="#526a7c" stopOpacity=".05" />
          </linearGradient>
        </defs>
        <ellipse cx="284" cy="330" rx="178" ry="24" fill="#020617" opacity=".22" />
        <path d="M92 126 Q92 104 118 100 L438 100 Q462 104 462 128 L462 221 Q462 238 442 241 L112 241 Q92 238 92 219 Z" fill="url(#ac-body)" stroke="#ffffff" strokeOpacity=".9" strokeWidth="2" />
        <path d="M108 121 Q108 113 123 113 L430 113 Q446 113 446 127 L446 204 L108 204 Z" fill="#f8fafc" />
        <path d="M112 208 L444 208 L430 225 Q278 239 126 225 Z" fill="url(#ac-shadow)" />
        <path d="M124 215 Q278 228 430 215" fill="none" stroke="#9aabba" strokeWidth="2" />
        <rect x="376" y="132" width="45" height="4" rx="2" fill="#b8c6d2" />
        <circle cx="432" cy="134" r="3" fill="#6ad6e7" />
        <g fill="none" stroke="#71d9ec" strokeWidth="3" strokeLinecap="round" opacity=".82">
          <path d="M155 255 C126 285 169 301 143 329" />
          <path d="M213 255 C185 283 225 306 204 339" />
          <path d="M274 255 C249 282 288 308 269 344" />
          <path d="M335 255 C313 282 351 306 334 337" />
          <path d="M393 255 C370 281 411 302 394 329" />
        </g>
        <g fill="none" stroke="#d0f7ff" strokeWidth="2" strokeLinecap="round" opacity=".9">
          <path d="M131 278 Q150 267 165 279" />
          <path d="M190 298 Q210 286 225 299" />
          <path d="M254 315 Q273 302 290 315" />
          <path d="M321 292 Q340 280 355 293" />
          <path d="M378 312 Q397 300 412 313" />
        </g>
      </svg>
      <div className="absolute bottom-3 right-0 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-medium tracking-wide text-white/80 shadow-xl backdrop-blur-xl">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-300" />
        INTERACTIVE WEBSITE PREVIEW
      </div>
    </div>
  )
}

export default function DemoTenantPage({ params }: DemoPageProps) {
  const tenant = getDemoTenant(params.slug)
  if (!tenant) notFound()

  const themeClass =
    tenant.theme === 'midnight'
      ? 'tenant-midnight'
      : tenant.theme === 'commercial'
        ? 'tenant-commercial'
        : 'tenant-ice'

  return (
    <main className={`tenant-site ${themeClass} min-h-screen overflow-hidden`}>
      <div className="border-b border-white/10 bg-slate-950 px-4 py-2 text-center text-xs text-slate-300">
        <span className="font-semibold text-cyan-300">ACWEBSITE DEMO</span>
        <span className="mx-2 text-white/30">/</span>
        This is a fictional preview. Contact details and booking integrations are not configured.
        <Link href="/platform" className="ml-2 underline underline-offset-4 hover:text-white">About ACWebsite</Link>
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <Link href={`/demo/${tenant.slug}`} className="flex items-center gap-3" aria-label={tenant.name + ' home'}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 text-slate-950"><Wind size={21} /></span>
          <span>
            <span className="block text-base font-bold tracking-tight">{tenant.name}</span>
            <span className="block text-[11px] tracking-[.18em] opacity-60">{tenant.tagline.toUpperCase()}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main navigation">
          <a href="#services" className="opacity-75 transition hover:opacity-100">Services</a>
          <a href="#approach" className="opacity-75 transition hover:opacity-100">Our approach</a>
          <a href="#contact" className="opacity-75 transition hover:opacity-100">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
          {tenant.primaryCta}
        </a>
      </header>

      <section className="tenant-hero relative">
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-5 pb-16 pt-8 md:grid-cols-[1.02fr_.98fr] md:px-10 md:pb-24 md:pt-12">
          <div className="relative z-[1]">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-[10px] font-semibold tracking-[.2em] text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> {tenant.heroEyebrow}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              {tenant.heroTitle}<br /><span className="tenant-accent">{tenant.heroAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 md:text-lg md:leading-8">{tenant.heroDescription}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#services" className="group inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
                {tenant.primaryCta}<ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a href="#approach" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium transition hover:border-white/40 hover:bg-white/5">
                {tenant.secondaryCta}<ArrowDownRight size={16} />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55">
              <span>01 / Residential & commercial</span>
              <span>02 / Service-led design</span>
              <span>03 / Built for mobile</span>
            </div>
          </div>
          <AirflowArtwork />
        </div>
        <div className="tenant-orb tenant-orb-one" />
        <div className="tenant-orb tenant-orb-two" />
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[.22em] text-cyan-300">WHAT WE DO</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">Cooling support, made clear.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/55">A flexible service showcase. Each business can customise these offerings to match the work it actually provides.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {tenant.services.map((service, index) => (
            <article key={service.title} className="tenant-service-card group rounded-3xl border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 md:p-7">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs tracking-[.2em] text-cyan-200">{service.tag}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition group-hover:border-cyan-300/50 group-hover:bg-cyan-300/10"><ArrowUpRightIcon /></span>
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{service.description}</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">Ask about this service <ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="border-y border-white/10 bg-white/[.025]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[.22em] text-cyan-300">THE EXPERIENCE</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Good service starts with a clear next step.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">The site is designed to help customers understand the available services, share what they need, and contact the business through its configured channels.</p>
          </div>
          <div className="space-y-3">
            {tenant.highlights.map((highlight, index) => (
              <div key={highlight} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.035] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200"><Check size={17} /></span>
                <span className="text-sm font-medium">{highlight}</span>
                <span className="ml-auto text-xs text-white/30">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="tenant-contact-panel relative overflow-hidden rounded-[2rem] border border-cyan-200/15 p-7 md:p-12 lg:p-16">
          <div className="relative z-[1] max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[.22em] text-cyan-200">LET'S GET STARTED</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Tell us what comfort looks like for you.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">This demonstration is ready for a business owner to connect real contact details and an enquiry workflow before publishing.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 px-4 py-2.5 text-sm">{tenant.phoneLabel}</span>
              <span className="rounded-full border border-white/15 px-4 py-2.5 text-sm">{tenant.locationLabel}</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 rounded-full border border-cyan-200/10" />
          <div className="pointer-events-none absolute -right-2 -top-6 h-52 w-52 rounded-full border border-cyan-200/10" />
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-white/45 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {tenant.name} · Demonstration website</span>
          <span>Website concept by <Link href="/platform" className="text-cyan-200 hover:text-white">ACWebsite</Link></span>
        </div>
      </footer>
    </main>
  )
}

function ArrowUpRightIcon() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
