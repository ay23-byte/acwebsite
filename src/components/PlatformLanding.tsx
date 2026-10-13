'use client'

import { useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleHelp,
  Clock3, Layers3, Menu, MousePointer2, Palette, ShieldCheck, Smartphone,
  Sparkles, Thermometer, WandSparkles, X, Zap
} from 'lucide-react'

const serviceTypes = [
  { id: 'cooling', name: 'Cooling & AC', icon: Thermometer, accent: '#8be9ff', title: 'Comfort, without the guesswork.', subtitle: 'A polished online home for AC repair, installation and seasonal maintenance.', services: ['AC repair', 'New installation', 'Preventive maintenance'] },
  { id: 'heating', name: 'Heating', icon: Zap, accent: '#ffc28b', title: 'Warmth you can count on.', subtitle: 'A clear, trustworthy service website built around the jobs your customers need.', services: ['Heating repair', 'System replacement', 'Annual tune-ups'] },
  { id: 'ventilation', name: 'Air quality', icon: Sparkles, accent: '#b8a5ff', title: 'Make every breath better.', subtitle: 'Explain indoor air quality, ventilation and filtration in a way customers understand.', services: ['Air quality checks', 'Ventilation systems', 'Filter upgrades'] },
]

const features = [
  { number: '01', icon: Palette, title: 'Your brand, not a template', text: 'Set the colours, type, imagery, service list and voice to match each business.' },
  { number: '02', icon: Smartphone, title: 'Made for every screen', text: 'Responsive layouts keep the important information and contact actions easy to find.' },
  { number: '03', icon: MousePointer2, title: 'Built around enquiries', text: 'Make it straightforward for customers to understand your services and take the next step.' },
  { number: '04', icon: Layers3, title: 'One system, many businesses', text: 'A reusable foundation for creating distinct sites without rebuilding every page.' },
]

const steps = [
  { n: '01', title: 'Shape the brand', text: 'Choose the business name, visual direction, service area and tone.' },
  { n: '02', title: 'Add the services', text: 'Organise the jobs you do, what customers can expect and how to reach you.' },
  { n: '03', title: 'Make it yours', text: 'Review the responsive preview and refine the details before publishing.' },
]

export default function PlatformLanding() {
  const [activeService, setActiveService] = useState('cooling')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const selected = serviceTypes.find((item) => item.id === activeService) ?? serviceTypes[0]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <main className="acw-site">
      <div className="acw-grain" aria-hidden="true" />
      <header className="acw-nav">
        <a className="acw-brand" href="#top" aria-label="ACWebsite home">
          <span className="acw-brand-mark"><span /><span /><span /></span>
          <span>acwebsite<span className="acw-brand-period">.</span></span>
        </a>
        <nav className={mobileMenuOpen ? 'acw-nav-links is-open' : 'acw-nav-links'} aria-label="Main navigation">
          <a href="#product" onClick={closeMenu}>Product</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#showcase" onClick={closeMenu}>Showcase</a>
          <a className="acw-mobile-cta" href="#get-started" onClick={closeMenu}>Build your site <ArrowUpRight size={16} /></a>
        </nav>
        <a className="acw-nav-cta" href="#get-started">Build your site <ArrowUpRight size={16} /></a>
        <button className="acw-menu-toggle" aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="acw-hero" id="top">
        <div className="acw-hero-copy">
          <motion.div className="acw-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="acw-eyebrow-dot" /> A website system for HVAC businesses
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}>
            Your next great<br />customer starts <span>online.</span>
          </motion.h1>
          <motion.p className="acw-hero-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.16 }}>
            ACWebsite helps heating and cooling businesses turn their services into a clear, confident digital experience — without starting from a blank page every time.
          </motion.p>
          <motion.div className="acw-hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.23 }}>
            <a className="acw-button acw-button-primary" href="#showcase">Explore the preview <ArrowUpRight size={17} /></a>
            <a className="acw-text-link" href="#product">See how it works <ArrowDownRight size={17} /></a>
          </motion.div>
          <motion.div className="acw-hero-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <span className="acw-note-icon"><ShieldCheck size={16} /></span>
            <span>Designed for real service businesses. Flexible by default.</span>
          </motion.div>
        </div>

        <motion.div className="acw-hero-art" initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.85, delay: 0.12, ease: 'easeOut' }}>
          <div className="acw-art-orbit acw-orbit-one" />
          <div className="acw-art-orbit acw-orbit-two" />
          <div className="acw-art-label"><span className="acw-live-dot" /> DESIGN PREVIEW <span>01 / 03</span></div>
          <div className="acw-glass-panel">
            <div className="acw-panel-top"><span className="acw-mini-brand"><span className="acw-mini-mark">A</span> Arctic & Air</span><span className="acw-panel-menu"><i /><i /><i /></span></div>
            <div className="acw-panel-content">
              <div className="acw-panel-kicker">COMFORT, THOUGHTFULLY DONE</div>
              <div className="acw-panel-title">A better kind<br />of <em>cool.</em></div>
              <p>Heating and cooling that fits your home — and your life.</p>
              <div className="acw-panel-button">Explore services <ArrowUpRight size={13} /></div>
              <div className="acw-panel-visual">
                <div className="acw-unit-shadow" />
                <div className="acw-ac-unit"><div className="acw-unit-top" /><div className="acw-unit-front"><div className="acw-unit-vent">{Array.from({ length: 8 }).map((_, i) => <i key={i} />)}</div><div className="acw-unit-logo">A<span>.</span></div></div><div className="acw-unit-side" /></div>
                <div className="acw-air-lines"><i /><i /><i /></div>
                <div className="acw-visual-orb" />
              </div>
            </div>
            <div className="acw-panel-bottom"><span>LOCAL EXPERTS. LASTING COMFORT.</span><span>SCROLL TO DISCOVER ↓</span></div>
          </div>
          <div className="acw-float-card acw-float-card-top"><span className="acw-float-icon"><Sparkles size={15} /></span><span><b>Brand-led design</b><small>Made to feel like you</small></span></div>
          <div className="acw-float-card acw-float-card-bottom"><span className="acw-float-icon acw-float-icon-blue"><Smartphone size={15} /></span><span><b>Responsive by design</b><small>Desktop to mobile</small></span></div>
          <div className="acw-art-caption">A sample concept — not a live customer website.</div>
        </motion.div>
        <div className="acw-hero-index"><span>01</span><i /> BUILT FOR THE PEOPLE WHO KEEP US COMFORTABLE</div>
      </section>

      <div className="acw-marquee" aria-label="Platform principles">
        <div className="acw-marquee-track">
          {['Distinctive by design', 'Simple to navigate', 'Built for service teams', 'Ready for every screen', 'Distinctive by design', 'Simple to navigate', 'Built for service teams'].map((label, i) => <span key={i}><i />{label}</span>)}
        </div>
      </div>

      <section className="acw-section acw-product-section" id="product">
        <div className="acw-section-heading">
          <div><div className="acw-section-kicker">THE IDEA</div><h2>Less time wrestling<br />with a website. <span>More time<br className="acw-desktop-break" /> doing great work.</span></h2></div>
          <p>HVAC businesses are different. Their websites should be, too. ACWebsite is being built as a flexible foundation for creating distinctive, customer-friendly websites across the heating and cooling industry.</p>
        </div>
        <div className="acw-product-grid">
          <div className="acw-product-card acw-product-card-large">
            <div className="acw-card-meta"><span>01 / YOUR IDENTITY</span><Palette size={18} /></div>
            <div className="acw-type-specimen"><span className="acw-type-small">THE WAY YOU WORK</span><strong>Own your<br /><em>look.</em></strong><div className="acw-swatch-row"><i /><i /><i /><i /><span>Colour. Type. Personality.</span></div></div>
            <p>Build a visual identity that feels right for your team, your customers and the work you do.</p>
          </div>
          <div className="acw-product-card acw-product-card-dark">
            <div className="acw-card-meta"><span>02 / YOUR SERVICES</span><Thermometer size={18} /></div>
            <div className="acw-service-illustration"><div className="acw-service-ring ring-a" /><div className="acw-service-ring ring-b" /><div className="acw-service-core"><Thermometer size={38} strokeWidth={1.2} /></div><span className="acw-service-chip chip-one">Repair</span><span className="acw-service-chip chip-two">Install</span><span className="acw-service-chip chip-three">Maintain</span></div>
            <h3>Make the right<br />service easy to find.</h3>
            <p>Present your expertise clearly, so customers can understand what you offer.</p>
          </div>
          <div className="acw-product-card acw-product-card-wide">
            <div className="acw-card-meta"><span>03 / YOUR EXPERIENCE</span><Smartphone size={18} /></div>
            <div className="acw-device-scene"><div className="acw-device-desktop"><div className="acw-device-top"><i /><i /><i /></div><div className="acw-device-screen"><div className="acw-device-nav" /><div className="acw-device-copy"><i /><i /><i /><b /></div><div className="acw-device-image"><span /></div></div></div><div className="acw-device-phone"><div className="acw-phone-speaker" /><div className="acw-phone-screen"><div /><i /><i /><b /><span /></div></div></div>
            <div className="acw-device-caption"><b>One experience.</b><span>Every screen.</span></div></div>
            <p>A thoughtful, responsive experience that keeps contact details and next steps within reach.</p>
          </div>
        </div>
      </section>

      <section className="acw-section acw-features-section" id="features">
        <div className="acw-section-heading acw-heading-light">
          <div><div className="acw-section-kicker">THE FOUNDATION</div><h2>Everything starts with<br /><span>a better foundation.</span></h2></div>
          <p>Start with the essentials. Keep the experience useful, the design considered and the business in control of its own identity.</p>
        </div>
        <div className="acw-feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon
            return <motion.article className="acw-feature-item" key={feature.number} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <div className="acw-feature-top"><span>{feature.number}</span><Icon size={21} strokeWidth={1.5} /></div>
              <h3>{feature.title}</h3><p>{feature.text}</p><span className="acw-feature-arrow"><ArrowUpRight size={17} /></span>
            </motion.article>
          })}
        </div>
        <div className="acw-feature-foot"><span className="acw-feature-foot-icon"><CircleHelp size={18} /></span><p>ACWebsite is a work in progress. Account management, saved edits and publishing workflows are not connected yet.</p><a href="#get-started">See current scope <ArrowRight size={15} /></a></div>
      </section>

      <section className="acw-section acw-showcase-section" id="showcase">
        <div className="acw-section-heading">
          <div><div className="acw-section-kicker">ONE FOUNDATION, DIFFERENT FEEL</div><h2>See how the same idea<br />can <span>feel completely different.</span></h2></div>
          <p>Choose a service focus to explore sample copy and a visual direction. These concepts demonstrate flexibility, not finished or published business websites.</p>
        </div>
        <div className="acw-showcase">
          <div className="acw-showcase-sidebar">
            <div className="acw-showcase-sidebar-label">CHOOSE A CONCEPT</div>
            {serviceTypes.map((service, i) => {
              const Icon = service.icon
              return <button key={service.id} className={activeService === service.id ? 'acw-showcase-option is-active' : 'acw-showcase-option'} onClick={() => setActiveService(service.id)}><span className="acw-option-num">0{i + 1}</span><span className="acw-option-icon"><Icon size={18} /></span><span className="acw-option-label">{service.name}<small>{i === 0 ? 'Comfort-first' : i === 1 ? 'Warm & assured' : 'Fresh & thoughtful'}</small></span><ChevronDown className="acw-option-arrow" size={16} /></button>
            })}
            <div className="acw-showcase-side-note"><WandSparkles size={17} /><span>Different services.<br /><b>Same flexible foundation.</b></span></div>
          </div>
          <motion.div className="acw-showcase-preview" key={selected.id} initial={{ opacity: 0.5, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ '--preview-accent': selected.accent } as CSSProperties}>
            <div className="acw-preview-top"><span className="acw-preview-brand"><i /> {selected.id === 'cooling' ? 'ARCTIC & AIR' : selected.id === 'heating' ? 'EMBER HOME' : 'CLEARWELL AIR'}</span><span className="acw-preview-badge"><span /> SAMPLE CONCEPT</span></div>
            <div className="acw-preview-main">
              <div className="acw-preview-copy"><div className="acw-preview-kicker">YOUR COMFORT, YOUR WAY</div><h3>{selected.title}</h3><p>{selected.subtitle}</p><a href="#get-started" className="acw-preview-link">Discover the difference <ArrowUpRight size={15} /></a><div className="acw-preview-services">{selected.services.map((service) => <span key={service}><Check size={13} />{service}</span>)}</div></div>
              <div className={'acw-preview-art acw-preview-art-' + selected.id}><div className="acw-preview-glow" /><div className="acw-preview-3d-unit"><div className="acw-preview-unit-top" /><div className="acw-preview-unit-face"><div className="acw-preview-unit-slats">{Array.from({ length: 7 }).map((_, i) => <i key={i} />)}</div><span>ACW<span>.</span></span></div><div className="acw-preview-unit-side" /></div><div className="acw-preview-sphere" /><div className="acw-preview-art-tag">{selected.name.toUpperCase()} / 2026</div></div>
            </div>
            <div className="acw-preview-bottom"><span>DESIGNED TO BE DISTINCTIVE</span><span>INTERACTIVE CONCEPT <i /></span></div>
          </motion.div>
        </div>
      </section>

      <section className="acw-process-section" id="how-it-works">
        <div className="acw-section acw-process-inner">
          <div className="acw-process-intro"><div className="acw-section-kicker">A CLEARER WAY FORWARD</div><h2>From first idea<br />to <span>your own look.</span></h2><p>The goal is a simpler way to shape a useful, professional online presence — without making every business start from zero.</p><a className="acw-button acw-button-dark" href="#get-started">Explore the concept <ArrowUpRight size={16} /></a></div>
          <div className="acw-process-steps">{steps.map((step, i) => <div className="acw-process-step" key={step.n}><div className="acw-process-step-num">{step.n}<span>{i === 2 ? <Check size={17} /> : <ArrowUpRight size={16} />}</span></div><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="acw-cta-section" id="get-started">
        <div className="acw-cta-orb acw-cta-orb-one" /><div className="acw-cta-orb acw-cta-orb-two" />
        <div className="acw-cta-content"><div className="acw-section-kicker">THE NEXT CHAPTER</div><h2>Good work deserves<br />a <span>great first impression.</span></h2><p>ACWebsite is being built for the people who keep homes and workplaces comfortable. Explore the concept, review the foundation and help shape what comes next.</p><a className="acw-button acw-button-light" href="https://github.com/ay23-byte/acwebsite" target="_blank" rel="noreferrer">View the project on GitHub <ArrowUpRight size={17} /></a><div className="acw-cta-small"><Clock3 size={14} /> Early-stage product concept — not yet a live website builder.</div></div>
        <div className="acw-cta-symbol" aria-hidden="true"><span /><span /><span /><i /></div>
      </section>

      <footer className="acw-footer">
        <a className="acw-brand acw-footer-brand" href="#top"><span className="acw-brand-mark"><span /><span /><span /></span><span>acwebsite<span className="acw-brand-period">.</span></span></a>
        <p>A more thoughtful digital home for HVAC businesses.</p>
        <div className="acw-footer-links"><a href="#product">Product</a><a href="#features">Features</a><a href="#showcase">Showcase</a><a href="https://github.com/ay23-byte/acwebsite" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a></div>
        <div className="acw-footer-bottom"><span>© {new Date().getFullYear()} ACWebsite</span><span>Built with care for service businesses.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}
