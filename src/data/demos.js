export const industries = [
  "All",
  "Manufacturing",
  "Technology",
  "Medical",
  "Restaurant",
  "Retail",
  "Salon"
];

export const demos = [
  {
    id: 1,
    name: "Ventex Precision",
    slug: "ventex",
    industry: "Manufacturing",
    featured: true,
    badge: "New / 3D Interactive",
    tagline: "Industrial Precision Engineering & Brass Components",
    description: "An advanced industrial engineering showcase featuring interactive 3D brass electrical components, live RFQ quoting system, CNC Swiss machining metrology, and custom OEM manufacturing catalog.",
    thumbnail: "/ventex/assets/cnc_machining-BNi35Xlm.jpg",
    features: [
      "Interactive 3D Brass Component Viewer (Three.js)",
      "Dynamic RFQ & Custom Quote Generator",
      "Sliding Headstock CNC Swiss Machining Focus",
      "Optical Metrology & Quality Lab Showcase",
      "Complete Product Specification Tables"
    ],
    tech: ["React", "Three.js", "Tailwind CSS", "Vite"]
  },
  {
    id: 2,
    name: "Pramukh Computer",
    slug: "pramukh-computer",
    industry: "Technology",
    featured: false,
    badge: "Popular",
    tagline: "Computer Hardware Sales & IT Service Center",
    description: "A professional business and retail website for computer sales, component upgrades, laptop repairs, CCTV security, and enterprise IT support services.",
    thumbnail: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800",
    features: [
      "Product Catalog with Category Filters",
      "Online Repair Service Booking",
      "Quick WhatsApp Inquiry Integration",
      "Google Maps Store Locator & Hours"
    ],
    tech: ["React", "Tailwind CSS", "Vite"]
  },
  {
    id: 3,
    name: "Keshav Krupa Medical",
    slug: "keshav-krupa-medical",
    industry: "Medical",
    featured: false,
    badge: "Healthcare",
    tagline: "Pharmacy, Healthcare & Prescription Deliveries",
    description: "A clean, modern healthcare portal for a local pharmacy, wellness products, OTC medicines, and convenient prescription upload for home delivery.",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
    features: [
      "Prescription Upload via WhatsApp",
      "Over-the-Counter Medicine Catalog",
      "Emergency Contact & Store Location",
      "Interactive Health Tips & Services"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 4,
    name: "Dairy Parlour",
    slug: "dairy-parlour",
    industry: "Retail",
    featured: false,
    badge: "F&B Retail",
    tagline: "Fresh Dairy Products & Artisan Ice Cream Parlour",
    description: "A vibrant, cheerful retail showcase highlighting fresh farm dairy, artisan milk products, traditional sweets, and specialty ice cream flavours.",
    thumbnail: "https://images.unsplash.com/photo-1559703248-dcaaec9fac92?auto=format&fit=crop&q=80&w=800",
    features: [
      "Visual Dairy & Ice Cream Menu",
      "Nutritional & Freshness Highlights",
      "Store Reviews & Community Wall",
      "Direct Click-to-Call & Directions"
    ],
    tech: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    id: 5,
    name: "Furniture Store",
    slug: "furniture",
    industry: "Retail",
    featured: true,
    badge: "E-Commerce",
    tagline: "Luxury Home Living & Architectural Furniture",
    description: "An elegant showcase for a designer furniture brand featuring smooth page transitions, curated room collections, material guides, and inquiry cart.",
    thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    features: [
      "Curated Room Inspiration Collections",
      "Product Lookbook with High-Res Zoom",
      "Interactive Inquiry Wishlist",
      "Custom Interior Design Consultation Form"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 6,
    name: "Chai Website",
    slug: "chaiwebsite",
    industry: "Restaurant",
    featured: false,
    badge: "Cafe & Lounge",
    tagline: "Artisan Tea House & Gourmet Cafe Experience",
    description: "A warm, aesthetic website for an artisan tea house and street cafe, featuring signature brewing recipes, cozy cafe ambience, and digital menu.",
    thumbnail: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    features: [
      "Artisan Tea & Snacks Digital Menu",
      "Atmospheric Cafe Photo Gallery",
      "Franchise & Party Booking Inquiries",
      "Location Map & Opening Times"
    ],
    tech: ["React", "Tailwind CSS", "Vite"]
  },
  {
    id: 7,
    name: "Ice Cream Parlour",
    slug: "icecream",
    industry: "Restaurant",
    featured: false,
    badge: "Desserts",
    tagline: "Artisan Ice Cream & Handcrafted Gelato Shop",
    description: "A delightful, colorful showcase designed for dessert parlours, gelato bars, and waffle shops with seasonal flavor highlights and party packs.",
    thumbnail: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800",
    features: [
      "Flavor Spectrum Visual Guide",
      "Seasonal Sundae Specials",
      "Party Order & Catering Inquiry",
      "Customer Reviews & Social Media Feed"
    ],
    tech: ["React", "Tailwind CSS", "Vite"]
  },
  {
    id: 8,
    name: "Makeup Artist",
    slug: "makeupartist",
    industry: "Salon",
    featured: false,
    badge: "Editorial",
    tagline: "Celebrity & Bridal Makeup Artistry Studio",
    description: "A chic, editorial portfolio and booking experience tailored for luxury bridal stylists, fashion makeup artists, and beauty consultants.",
    thumbnail: "https://images.unsplash.com/photo-1512496015851-a1c8ca9e25db?auto=format&fit=crop&q=80&w=800",
    features: [
      "High-Fashion Bridal Lookbook",
      "Service Packages & Pricing Breakdown",
      "Appointment Booking & Date Checker",
      "Client Testimonials & Press Features"
    ],
    tech: ["React", "Tailwind CSS", "Vite"]
  },
  {
    id: 9,
    name: "Nail Polish Site",
    slug: "nailpolistsite",
    industry: "Salon",
    featured: false,
    badge: "Beauty & Spa",
    tagline: "Trendy Nail Studio & Custom Nail Artistry",
    description: "A stylish, vibrant website for modern nail bars, manicure spas, and luxury lacquer collections with trend galleries and treatment menus.",
    thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    features: [
      "Shade & Finish Color Spectrum",
      "Nail Art Inspiration Gallery",
      "Treatment Menu with Pricing",
      "Online Slot Reservation"
    ],
    tech: ["React", "Tailwind CSS", "Vite"]
  }
];

export const services = [
  {
    id: 1,
    title: "Industrial & Manufacturing",
    description: "Custom 3D part viewers, RFQ calculators, and technical metrology presentations.",
    tag: "High Precision"
  },
  {
    id: 2,
    title: "E-Commerce & Retail",
    description: "Dynamic product catalogs, frictionless checkout, and inventory showcases.",
    tag: "High Conversion"
  },
  {
    id: 3,
    title: "Healthcare & Clinics",
    description: "HIPAA-conscious appointment booking, prescription ordering, and doctor profiles.",
    tag: "Clean & Trusted"
  },
  {
    id: 4,
    title: "Restaurants & Cafes",
    description: "Mouth-watering visual menus, table reservations, and location integrations.",
    tag: "Appetizing UI"
  },
  {
    id: 5,
    title: "Salons & Luxury Beauty",
    description: "Editorial portfolios, service menus, and calendar booking workflows.",
    tag: "Aesthetic"
  },
  {
    id: 6,
    title: "Corporate & Tech Startups",
    description: "Modern SaaS landing pages, custom dashboards, and lead-generation funnels.",
    tag: "Enterprise"
  }
];
