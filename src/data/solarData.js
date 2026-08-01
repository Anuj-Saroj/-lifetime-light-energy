export const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbDLZmx0IwgqkWOaAU0i";

export const companyDetails = {
  name: "LIFETIME LIGHT ENERGY",
  tagline: "Powering A Brighter Tomorrow",
  heroSubtitle: "Clean Energy. Bright Future. Lifetime Power.",
  heroDescription: "We provide high-quality solar products and complete solar solutions for homes, businesses, farms, and industries.",
  phone: "+91 98765 43210",
  email: "info@lifetimelightenergy.com",
  address: "123 Solar Energy Park, Green Tech Zone, Clean City, India",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM (24x7 Emergency Support)",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562095392688!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
};

export const heroBenefits = [
  {
    id: "save-electricity",
    icon: "Zap",
    title: "Save Electricity",
    subtitle: "Reduce Bills"
  },
  {
    id: "eco-friendly",
    icon: "Leaf",
    title: "Eco Friendly",
    subtitle: "Go Green"
  },
  {
    id: "govt-subsidy",
    icon: "Building2",
    title: "Government",
    subtitle: "Subsidy Available"
  }
];

export const heroProofPoints = [
  {
    id: "quality",
    icon: "ShieldCheck",
    title: "High Quality Products",
    subtitle: "Trusted & Certified"
  },
  {
    id: "installation",
    icon: "UserCheck",
    title: "Expert Installation",
    subtitle: "By Trained Professionals"
  },
  {
    id: "maintenance",
    icon: "Settings",
    title: "Low Maintenance",
    subtitle: "Longer Life"
  },
  {
    id: "support",
    icon: "Clock",
    title: "24x7 Support",
    subtitle: "Always With You"
  }
];

// Reliable image helpers using SVG data URIs and reliable Unsplash URLs with inline SVG fallbacks
export const solarImages = {
  rooftop: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
  waterPump: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=800&q=80",
  streetLight: "https://images.unsplash.com/photo-1542332213-315ae7de1fc7?auto=format&fit=crop&w=800&q=80",
  inverter: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80",
  commercial: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80",
  homeSolar: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  panelDetail: "https://images.unsplash.com/photo-1545208942-e1c0c21712a7?auto=format&fit=crop&w=800&q=80",
  batteryBank: "https://images.unsplash.com/photo-1558441719-aa3445544146?auto=format&fit=crop&w=800&q=80"
};

export const servicesData = [
  {
    id: "rooftop",
    title: "Solar Rooftop Systems",
    subtitle: "On-grid, Off-grid & Hybrid Rooftop Solutions.",
    description: "Tailored solar rooftop power plants for residential houses, housing societies, and commercial roofs with maximum energy yield.",
    image: solarImages.rooftop,
    badge: "Most Popular",
    features: ["On-Grid & Hybrid Options", "Net Metering Support", "25+ Years Panel Warranty"]
  },
  {
    id: "water-pump",
    title: "Solar Water Pumps",
    subtitle: "Efficient & Reliable Solar Pumps for Agriculture.",
    description: "High performance submersible and surface solar pumping systems powered directly by solar energy for seamless irrigation.",
    image: solarImages.waterPump,
    badge: "Agri Tech",
    features: ["Zero Fuel Cost", "Automatic Day Pumping", "Heavy Duty Motors"]
  },
  {
    id: "street-lights",
    title: "Solar Street Lights",
    subtitle: "Bright, Durable & Automatic Solar Street Lights.",
    description: "All-in-one smart LED solar street lighting solutions for highways, rural roads, societies, and industrial parks.",
    image: solarImages.streetLight,
    badge: "Smart Lighting",
    features: ["Dusk to Dawn Auto Sensor", "Lithium Battery Integrated", "Weatherproof IP65"]
  },
  {
    id: "inverters-batteries",
    title: "Solar Inverters & Batteries",
    subtitle: "High Performance Inverters & Long Life Batteries.",
    description: "Industry leading MPPT solar inverters paired with deep-cycle tubular and lithium ferro phosphate battery banks.",
    image: solarImages.inverter,
    badge: "High Efficiency",
    features: ["Pure Sine Wave Output", "Fast Solar Charging", "Long Cycle Life"]
  },
  {
    id: "commercial-industrial",
    title: "Commercial & Industrial",
    subtitle: "Powerful Solar Solutions for Businesses & Industries.",
    description: "Large scale turnkey MW solar installations with custom ROI models, Accelerated Depreciation benefits, and grid connectivity.",
    image: solarImages.commercial,
    badge: "Enterprise",
    features: ["Custom Financing & PPA", "Remote SCADA Monitoring", "Tax Benefit Optimization"]
  },
  {
    id: "home-solar",
    title: "Home Solar Solutions",
    subtitle: "Save More With Clean & Affordable Solar Energy.",
    description: "Smart residential solar kits designed to power your ACs, refrigerators, lights, and appliances while lowering power bills up to 90%.",
    image: solarImages.homeSolar,
    badge: "Eco Home",
    features: ["Subsidy Assistance", "Quiet & Clean Operation", "App-Based Generation Tracking"]
  }
];

export const productsCatalog = [
  {
    id: "prod-1",
    name: "540W Mono PERC Solar Panel",
    category: "Panels",
    price: "₹14,500",
    rating: 4.9,
    image: solarImages.panelDetail,
    badge: "Top Tier",
    specs: ["Efficiency: 21.3%", "Warranty: 25 Years Performance", "Cell Type: Half-Cut Monocrystalline"]
  },
  {
    id: "prod-2",
    name: "10kW High Efficiency Hybrid Inverter",
    category: "Inverters",
    price: "₹85,000",
    rating: 4.8,
    image: solarImages.inverter,
    badge: "Smart Tech",
    specs: ["Dual MPPT Trackers", "WiFi Monitoring App", "Pure Sine Wave Output"]
  },
  {
    id: "prod-3",
    name: "5.12kWh Lithium Ferro Battery (LiFePO4)",
    category: "Batteries",
    price: "₹62,000",
    rating: 5.0,
    image: solarImages.batteryBank,
    badge: "Long Life",
    specs: ["6000+ Life Cycles", "Built-in Smart BMS", "Wall Mountable Design"]
  },
  {
    id: "prod-4",
    name: "5HP Agricultural Solar Submersible Pump",
    category: "Agri Pumps",
    price: "₹1,45,000",
    rating: 4.9,
    image: solarImages.waterPump,
    badge: "Govt Subsidy",
    specs: ["Max Head: 120 meters", "Stainless Steel Impeller", "Dry Run Protection"]
  },
  {
    id: "prod-5",
    name: "60W Integrated All-In-One Solar Street Light",
    category: "Street Lights",
    price: "₹8,900",
    rating: 4.7,
    image: solarImages.streetLight,
    badge: "Best Seller",
    specs: ["Bridgelux LED Chip", "PIR Motion Sensor", "Dusk to Dawn Operation"]
  },
  {
    id: "prod-6",
    name: "Complete 3kW Residential Rooftop Kit",
    category: "Rooftop Kits",
    price: "₹1,75,000",
    rating: 4.9,
    image: solarImages.rooftop,
    badge: "Complete Kit",
    specs: ["Generates ~12 units/day", "Net Metering Ready", "Includes Aluminum Structure"]
  }
];

export const statsData = [
  {
    id: "customers",
    icon: "Users",
    value: "5000+",
    label: "Happy Customers"
  },
  {
    id: "projects",
    icon: "CheckCircle2",
    value: "50+",
    label: "Projects Completed"
  },
  {
    id: "capacity",
    icon: "Zap",
    value: "5+ MW",
    label: "Solar Capacity Installed"
  },
  {
    id: "satisfaction",
    icon: "Handshake",
    value: "100%",
    label: "Customer Satisfaction"
  }
];

export const projectsList = [
  {
    id: "proj-1",
    title: "1.2 MW Industrial Roof Plant",
    location: "Green Auto Hub, Pune",
    type: "Commercial",
    capacity: "1.2 MW",
    savings: "₹85 Lakhs / Year",
    image: solarImages.commercial
  },
  {
    id: "proj-2",
    title: "Eco Residency 150 kW Solar Society",
    location: "Sun City, Gujarat",
    type: "Residential",
    capacity: "150 kW",
    savings: "₹14 Lakhs / Year",
    image: solarImages.rooftop
  },
  {
    id: "proj-[#]",
    title: "25+ Agriculture Solar Pumping Project",
    location: "Agri Zone, Maharashtra",
    type: "Agriculture",
    capacity: "175 HP Total",
    savings: "Zero Diesel Cost",
    image: solarImages.waterPump
  }
];

export const navLinks = [
  { id: "home", name: "Home" },
  { id: "about", name: "About Us" },
  { id: "products", name: "Our Products" },
  { id: "solutions", name: "Solar Solutions" },
  { id: "projects", name: "Projects" },
  { id: "why-solar", name: "Why Solar?" },
  { id: "contact", name: "Contact Us" }
];
