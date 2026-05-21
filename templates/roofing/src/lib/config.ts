import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Bondoc Roofing",
    tagline: "Quality Roofs Built to Last",
    phone: "(210) 896-3209",
    phoneHref: "tel:+12108963209",
    email: "info@bondocroofing.com",
    address: "123 Main St",
    city: "San Antonio",
    serviceAreas: ["San Antonio", "Austin", "Corpus Christi", "Coastal Bend cities"],
    license: "TX Lic. #123456",
    since: "2010",
    google_rating: "4.9",
    review_count: "Over 1,000",
    emergency: true,
    theme: "navy",
    niche: "roofing",
  },

  services: [
    { icon: "wrench", title: "Roof Repair", desc: "Expert repair for leaks, storm damage, and general wear to extend your roof's life.", urgent: true },
    { icon: "home", title: "Roof Replacement", desc: "Complete roof replacement with durable materials and professional installation for lasting protection.", urgent: false },
    { icon: "shield-check", title: "Storm Damage", desc: "Rapid response and comprehensive repair for roofs damaged by hail, wind, or severe weather.", urgent: true },
    { icon: "hammer", title: "Siding Installation", desc: "Enhance curb appeal and protection with new siding installation or repair.", urgent: false },
    { icon: "droplets", title: "Gutter Services", desc: "Installation, repair, and cleaning of gutters to ensure proper water drainage and protect your foundation.", urgent: false },
    { icon: "thermometer", title: "Attic Ventilation", desc: "Improve energy efficiency and roof longevity with professional attic ventilation solutions.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "San Antonio", stars: 5, text: "Bondoc Roofing replaced our entire roof after a hailstorm last spring. From the initial inspection to the final cleanup, their team was incredibly professional and efficient. The project was completed in just three days, and the new roof looks fantastic. We felt truly cared for throughout the entire process, and the communication was excellent." },
    { name: "Michael T.", location: "Austin", stars: 5, text: "Had a persistent leak in my old roof that other companies couldn't fix. Bondoc Roofing's crew came out, quickly identified the problem, and had it repaired within hours. The price was fair, and the quality of work was outstanding. I highly recommend them for any roofing needs – they saved us a lot of stress and potential damage!" },
    { name: "Jessica R.", location: "Corpus Christi", stars: 5, text: "We chose Bondoc Roofing for our new home's roof installation, and we couldn't be happier. Their GAF Master Elite status gave us confidence, and they delivered. The team was punctual, respectful, and meticulous. The roof is beautiful and gives us peace of mind. Truly a five-star experience from start to finish." }
  ],

  trustBadges: [
    "GAF Master Elite Partner", "Family Owned & Operated", "Licensed & Insured", "The Shingle Ladies™"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 14, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "GAF Master Elite", desc: "Top-tier certification for superior roofing quality and service." },
    { icon: "thumbs-up", title: "Trusted Craftsmanship", desc: "Dedicated to excellence in every project, ensuring lasting results." },
    { icon: "dollar-sign", title: "Affordable Financing", desc: "Flexible options to make your roofing project budget-friendly." },
    { icon: "home", title: "Family Owned", desc: "Personalized service and accountability from a local business." },
    { icon: "shield-check", title: "Licensed & Insured", desc: "Fully covered for your protection and peace of mind." },
    { icon: "truck", title: "Prompt Service", desc: "Efficient and timely completion of all roofing services." }
  ],

  formServiceOptions: ["Roof Repair", "Roof Replacement", "Siding", "Gutters", "Storm Damage", "Attic Ventilation", "Roof Maintenance", "Roof Inspections", "Roof Installation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!