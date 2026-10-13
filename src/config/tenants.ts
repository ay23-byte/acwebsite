/**
 * Demonstration tenant configuration for ACWebsite.
 *
 * These brands and details are fictional examples for preview purposes.
 * Replace them with verified business data before publishing a real tenant.
 */

export type TenantTheme = 'midnight' | 'ice' | 'commercial'

export interface HvacService {
  title: string
  description: string
  tag: string
}

export interface HvacTenant {
  slug: string
  name: string
  tagline: string
  description: string
  theme: TenantTheme
  locationLabel: string
  phoneLabel: string
  emailLabel: string
  heroEyebrow: string
  heroTitle: string
  heroAccent: string
  heroDescription: string
  primaryCta: string
  secondaryCta: string
  services: HvacService[]
  highlights: string[]
  isDemo: true
}

const standardServices: HvacService[] = [
  {
    title: 'AC installation',
    description: 'Thoughtful system placement and a clean, professional installation experience.',
    tag: 'INSTALL',
  },
  {
    title: 'Repair & diagnostics',
    description: 'A clear path from cooling problems to diagnosis and recommended next steps.',
    tag: 'REPAIR',
  },
  {
    title: 'Seasonal maintenance',
    description: 'Routine care to help keep air-conditioning systems clean and operating as intended.',
    tag: 'MAINTAIN',
  },
]

export const demoTenants: HvacTenant[] = [
  {
    slug: 'arctic-comfort',
    name: 'Arctic Comfort',
    tagline: 'Comfort, considered.',
    description: 'A premium residential air-conditioning service website concept.',
    theme: 'midnight',
    locationLabel: 'Service area to be configured',
    phoneLabel: 'Business phone to be added',
    emailLabel: 'Business email to be added',
    heroEyebrow: 'RESIDENTIAL COOLING · DEMO WEBSITE',
    heroTitle: 'Make room for',
    heroAccent: 'better comfort.',
    heroDescription: 'A calm, considered experience for homeowners looking for AC installation, repair, and seasonal care.',
    primaryCta: 'Explore services',
    secondaryCta: 'How it works',
    services: standardServices,
    highlights: ['A clear service journey', 'Comfort-first design', 'Mobile-ready experience'],
    isDemo: true,
  },
  {
    slug: 'bluepeak-hvac',
    name: 'BluePeak HVAC',
    tagline: 'Cooling built around your business.',
    description: 'A commercial HVAC website concept for offices, retail, and facilities teams.',
    theme: 'commercial',
    locationLabel: 'Commercial service area to be configured',
    phoneLabel: 'Business phone to be added',
    emailLabel: 'Business email to be added',
    heroEyebrow: 'COMMERCIAL HVAC · DEMO WEBSITE',
    heroTitle: 'Reliable climate',
    heroAccent: 'for serious work.',
    heroDescription: 'A professional digital front door for commercial cooling, planned maintenance, and HVAC project enquiries.',
    primaryCta: 'View capabilities',
    secondaryCta: 'Our approach',
    services: [
      { title: 'Commercial HVAC', description: 'Cooling solutions shaped around your building and operational needs.', tag: 'COMMERCIAL' },
      { title: 'Planned maintenance', description: 'A structured approach to routine inspections and ongoing system care.', tag: 'SERVICE PLANS' },
      { title: 'System upgrades', description: 'Explore replacement and upgrade options for existing cooling systems.', tag: 'UPGRADES' },
    ],
    highlights: ['Commercial-first messaging', 'Project enquiry pathway', 'Scalable service sections'],
    isDemo: true,
  },
  {
    slug: 'coolnest-services',
    name: 'CoolNest Services',
    tagline: 'A little more ease in every room.',
    description: 'A friendly local AC service website concept with a light, approachable visual style.',
    theme: 'ice',
    locationLabel: 'Service area to be configured',
    phoneLabel: 'Business phone to be added',
    emailLabel: 'Business email to be added',
    heroEyebrow: 'LOCAL AC SERVICES · DEMO WEBSITE',
    heroTitle: 'Cool air. Clear',
    heroAccent: 'next steps.',
    heroDescription: 'An approachable website concept that helps customers understand services and request the right kind of support.',
    primaryCta: 'Browse services',
    secondaryCta: 'What to expect',
    services: standardServices,
    highlights: ['Simple service discovery', 'Friendly, readable content', 'Clear enquiry prompts'],
    isDemo: true,
  },
]

export function getDemoTenant(slug: string): HvacTenant | undefined {
  return demoTenants.find((tenant) => tenant.slug === slug)
}
