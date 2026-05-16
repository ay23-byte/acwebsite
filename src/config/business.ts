// Business Configuration - Edit this file to update website content
export const businessConfig = {
  // Contact Information
  contact: {
    phone: '6393997891',
    email: 'info@airprocooling.com',
    whatsappMessage: 'Hello Air Pro Cooling Service, I would like to book a service.',
  },

  // Business Info
  business: {
    name: 'Air Pro Cooling Service',
    rating: 4.9,
    reviews: 350,
    customers: '5000+',
    experience: '5+',
    description: 'Professional AC Installation, Repair, Service & Gas Charging At Your Doorstep.',
    descriptionLong: 'Trusted AC repair and installation service at affordable price. Serving Lucknow for 5+ years.',
    location: 'Lucknow, India',
  },

  // Services with multiple pricing tiers
  services: [
    {
      icon: 'Droplets',
      title: 'Foam AC Servicing',
      description: 'Deep cleaning & maintenance',
      category: 'FOAM AC SERVICING',
      tiers: [
        {
          name: 'Deep AC Cleaning (1 AC)',
          price: 599,
          originalPrice: 699,
          rating: 4.8,
          reviews: 512,
          time: '45–60 min',
          features: ['Foam + jet pressure wash', 'Filter cleaned & dried', 'Gas check included'],
        },
        {
          name: 'Foam AC Servicing (2 ACs)',
          price: 1090,
          originalPrice: 1200,
          rating: 4.8,
          reviews: 312,
          time: '90–120 min',
          features: ['Foam + jet pressure wash', 'Both filters cleaned & dried', 'Gas check included'],
        },
        {
          name: 'Foam AC Servicing (3 ACs)',
          price: 1590,
          originalPrice: 1800,
          rating: 4.8,
          reviews: 198,
          time: '2–2.5 hrs',
          features: ['Foam + jet wash for 3 units', 'All filters cleaned', 'Gas check included'],
        },
        {
          name: 'Foam AC Servicing (4 ACs)',
          price: 2140,
          originalPrice: 2400,
          rating: 4.7,
          reviews: 94,
          time: '3–3.5 hrs',
          features: ['Foam + jet wash for 4 units', 'Filters, coils & drain checked'],
        },
      ],
    },
    {
      icon: 'Wrench',
      title: 'Repair & Gas Refill',
      description: 'Expert diagnosis & same-day service',
      category: 'REPAIR & GAS',
      tiers: [
        {
          name: 'AC Repair Visit',
          price: 299,
          originalPrice: 399,
          rating: 4.5,
          reviews: 163,
          time: '45–60 min',
          features: ['Full diagnosis', 'On-site repair estimate', 'Inspection charge waived if service approved'],
        },
        {
          name: 'AC Gas Refill',
          price: 3300,
          originalPrice: 3500,
          rating: 4.6,
          reviews: 278,
          time: '60–90 min',
          features: ['Gas refill + leak detection', 'Minor leak repair', '3-month warranty included'],
        },
      ],
    },
    {
      icon: 'Wind',
      title: 'AC Installation / Uninstallation',
      description: 'Window & Split AC · Same-day available',
      category: 'INSTALLATION / UNINSTALLATION',
      tiers: [
        {
          name: 'AC Installation',
          price: 699,
          originalPrice: 999,
          rating: 4.9,
          reviews: 421,
          time: '1–3 hrs',
          features: ['Clean & secure installation', 'Proper alignment & stability', 'Same-day available'],
          badge: 'SAME DAY',
        },
        {
          name: 'AC Uninstallation',
          price: 499,
          originalPrice: 699,
          rating: 4.8,
          reviews: 289,
          time: '45–90 min',
          features: ['Safe removal without damage', 'Ready for reinstallation or shift', 'Same-day available'],
          badge: 'SAME DAY',
        },
      ],
    },
  ],

  // Pricing & Charges
  pricing: {
    gasCharging: { amount: 3300, description: 'Full Gas Charging' },
    visitCharge: { amount: 299, description: 'AC Repair Visit Charge' },
  },

  // Features/Why Choose Us
  features: [
    'Full Gas Charging — ₹3300',
    'AC Repair Visit Charge — ₹299',
    'Window & Split AC Expert Technician',
    'Fast Home Service Available',
    'Affordable Price with Professional Work',
    'WhatsApp Booking Available 24/7',
    'Same-Day Service',
    'All Types of AC Models',
    '5+ Years Experience',
  ],

  // Customer Reviews with locations
  reviews: [
    {
      name: 'Raj Kumari Kaushal',
      location: 'Jankipuram',
      service: 'AC Installation',
      rating: 5,
      text: 'Your technical staff are very sincere and experienced fellow and services are very prompt.',
      verified: true,
    },
    {
      name: 'Anushka Bharti',
      location: 'Gomti Nagar',
      service: 'AC Installation',
      rating: 5,
      text: 'Professional work with good behaviour',
      verified: true,
    },
    {
      name: 'Vivek Giri',
      location: 'Shaheed Path',
      service: 'AC Installation',
      rating: 5,
      text: 'Excellent service from start to finish. The technician was punctual, professional, and extremely skilled.',
      verified: true,
    },
  ],

  // Trust badges
  trustBadges: [
    {
      title: 'Free gas check included',
      description: 'With every foam jet and repair visit package',
      icon: 'Droplets',
    },
    {
      title: 'Same-day service',
      description: 'Verified Lucknow technicians, available today',
      icon: 'Zap',
    },
    {
      title: '30-day service support',
      description: 'If the same issue returns, call us back within 30 days.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Local AC specialists',
      description: 'Verified Lucknow technicians for faster visits.',
      icon: 'MapPin',
    },
  ],

  // Services Areas with 15+ neighborhoods
  serviceAreas: [
    'Aliganj', 'Lucknow Central', 'Gomti Nagar', 'Indiranagar', 'Charbagh', 
    'Ambedkar Nagar', 'Raibareli Road', 'Ashok Marg', 'Ram Manohar Lohiya Nagar',
    'Jankipuram', 'KD Singh Marg', 'Shaheed Path', 'Sushant Golf City', 'Dubagga', 'Para'
  ],

  // FAQs
  faqs: [
    {
      q: 'Do you provide same-day service?',
      a: 'Yes, we offer same-day emergency AC repair service in Lucknow area.',
    },
    {
      q: 'What is your service charge?',
      a: 'AC Repair Visit Charge: ₹299. Service charges vary based on the type of repair.',
    },
    {
      q: 'Do you provide a warranty?',
      a: 'Yes, all our services come with a service warranty. Spare parts warranty varies.',
    },
    {
      q: 'What areas do you serve?',
      a: 'We provide home visits across Lucknow for AC repair, installation, and maintenance.',
    },
    {
      q: 'How do I book a service?',
      a: 'You can call us at 6393997891 or WhatsApp us directly. We are available 24/7.',
    },
  ],

  // Images
  images: {
    // Local AIRPROCOOLING branded technician image with cache-buster
    hero: `/images/hero.jpg?v=${Date.now()}`,
    // Local AC cleaning image with cache-buster
    whyChoose: `/images/why-choose.jpg?v=${Date.now()}`,
  },

  // Social & Links
  social: {
    whatsapp: true,
    phone: true,
    email: true,
  },
}
