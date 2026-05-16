# Website Configuration Guide

All content on your AC service website can be easily updated without touching any code. Simply edit the configuration file!

## File to Edit
**Location:** `src/config/business.ts`

This single file controls:
- Phone number and WhatsApp messaging
- Business info (rating, reviews, experience, etc.)
- All service pricing
- Feature list
- Customer reviews
- Service areas
- FAQ questions and answers
- Images

## Making Changes

### 1. Update Your Phone Number
```ts
contact: {
  phone: '6393997891',  // Change this to your number
  whatsappMessage: 'Hello Air Pro Cooling Service, I would like to book a service.',
}
```

### 2. Change AC Service Prices
Find the `services` array and update the pricing:

```ts
services: [
  {
    title: 'AC Installation',
    description: 'Professional installation with warranty',
    pricing: 'Split AC Installation ₹1299 | Window AC Installation ₹599',  // <- Edit prices here
    icon: 'Wind',
  },
  // ... other services
]
```

### 3. Update Gas Charging or Repair Visit Price
```ts
pricing: {
  gasCharging: { amount: 3500, description: 'Full Gas Charging' },  // Change amount
  visitCharge: { amount: 299, description: 'AC Repair Visit Charge' },  // Change amount
}
```

### 4. Modify Your Business Info
```ts
business: {
  name: 'Air Pro Cooling Service',  // Your business name
  rating: 4.9,  // Your rating
  reviews: 350,  // Number of reviews
  customers: '5000+',  // Customer count
  experience: '5+',  // Years of experience
  description: 'Professional AC Installation...',  // Short tagline
  location: 'Lucknow, India',  // Your location
}
```

### 5. Add/Remove Features in "Why Choose Us"
```ts
features: [
  'Full Gas Charging — ₹3500',  // Add or remove items here
  'AC Repair Visit Charge — ₹299',
  'Window & Split AC Expert Technician',
  // ... more features
]
```

### 6. Add or Update Customer Reviews
```ts
reviews: [
  {
    name: 'Rajesh Kumar',  // Customer name
    rating: 5,  // Rating 1-5
    text: 'Excellent service! They arrived on time...', // Review text
    verified: true,  // Mark as verified
  },
  // ... more reviews
]
```

### 7. Update Service Areas
```ts
serviceAreas: [
  'Aliganj',  // Add or remove areas
  'Lucknow Central',
  'Gomti Nagar',
  // ... more areas
]
```

### 8. Update FAQ
```ts
faqs: [
  {
    q: 'Do you provide same-day service?',  // Question
    a: 'Yes, we offer same-day emergency AC repair service...',  // Answer
  },
  // ... more FAQs
]
```

## After Making Changes

1. Save the `business.ts` file
2. Refresh your browser (if running locally: `npm run dev`)
3. Changes apply instantly!

## Run Your Website

```bash
cd "c:\Users\AYUSH\OneDrive\Desktop\ac website"
npm run dev
```

Then open: `http://localhost:3000`

---

**Pro Tip:** All prices, phone numbers, ratings, and content are now managed from one file. No code editing needed!
