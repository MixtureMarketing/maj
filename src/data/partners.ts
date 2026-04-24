import { Partner } from "@/types/partners";

export const PARTNERS: Partner[] = [
  {
    slug: "tafisa",
    name: "Tafisa Canada",
    logo: "/images/partners/tafisa.png",
    heroImage: "https://images.unsplash.com/photo-1556912176-12bb89db2c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "North America's leader in TFL panels, Tafisa Canada offers the ultimate choice in design-driven surfaces. Known for their wood-natural realism and industry-leading Embossed-In-Register (EIR) technology.",
    websiteUrl: "https://tafisa.ca",
    brandColors: {
      primary: "#1a1a1a",
      accent: "#b89564"
    },
    highlights: [
      "100% Recycled & Recovered Wood",
      "EIR (Embossed-In-Register) Realism",
      "Matching HPL & Edgebanding",
      "Antimicrobial properties available"
    ],
    collections: [
      {
        name: "Sommet® Series",
        description: "The ultimate in surface realism featuring proprietary EIR technology. Micro-precision synchronized registration aligns texture perfectly with woodgrain patterns.",
        features: ["Double-sided EIR", "Authentic Wood Look", "Teak, Hickory, & Butternut textures"]
      },
      {
        name: "Prélude® Series",
        description: "A vast array of versatile colours and practical textures for residential and commercial projects.",
        features: ["Smoothwood", "Crystalite", "Alto & Materia textures"]
      },
      {
        name: "Karisma Collection",
        description: "Contemporary and avant-garde brushed wood effect with a random mix of embossing and matte-infused accents.",
        features: ["Brushed wood effect", "Highly natural appearance", "Modern matte finish"]
      }
    ],
    brochures: [
      { name: "Prélude Brochure", filename: "prelude.pdf", description: "Complete TFL decorative panels collection" },
      { name: "Sommet Brochure", filename: "sommet.pdf", description: "EIR synchronized textures collection" },
      { name: "Karisma Brochure", filename: "karisma.pdf", description: "Contemporary brushed wood collection" }
    ]
  },
  {
    slug: "agt",
    name: "AGT Wood",
    logo: "/images/partners/agt.png",
    heroImage: "https://images.unsplash.com/photo-1628744276520-631d3f30d60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "AGT (Advanced Generation Technology) is a global brand specializing in premium furniture components. Their panel collections are renowned for high durability, silk-matte finishes, and trend-setting colors.",
    websiteUrl: "https://www.agtwood.com",
    brandColors: {
      primary: "#c41230",
      accent: "#2D2D2D"
    },
    highlights: [
      "Anti-fingerprint Soft Touch",
      "High Scratch Resistance",
      "Silk-Matte Supramat Technology",
      "Superior Gloss levels"
    ],
    collections: [
      {
        name: "Supramat",
        description: "Elegant silk-textured surface with anti-fingerprint technology and micro-scratch repair capability.",
        features: ["Anti-fingerprint", "Thermal repairable", "Silky touch"]
      },
      {
        name: "Soft Touch",
        description: "A matte surface that invites touch with a smooth, velvety feel and high resistance to daily wear.",
        features: ["Velvet texture", "Modern matte", "Durable surface"]
      },
      {
        name: "High Gloss",
        description: "Mirror-like finish that brings depth and luminosity to modern interiors.",
        features: ["High reflectivity", "Deep colors", "Impact resistant"]
      }
    ],
    brochures: [
      { name: "AGT Panel Catalog", filename: "agt-panels.pdf", description: "Full range of AGT decorative panels" },
      { name: "Supramat Collection", filename: "supramat.pdf", description: "Technical data and color chart" }
    ]
  },
  {
    slug: "egger",
    name: "Egger",
    logo: "/images/partners/egger.svg",
    heroImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "The EGGER Decorative Collection is the ultimate comprehensive solution for furniture and interior design. They provide a coordinated system of wood-based panels, laminates, and edgebanding.",
    websiteUrl: "https://www.egger.com",
    brandColors: {
      primary: "#cc0000",
      accent: "#ffffff"
    },
    highlights: [
      "Sustainable Wood Management",
      "Matching Textures & Visuals",
      "Anti-bacterial properties",
      "Global Design Portfolio"
    ],
    collections: [
      {
        name: "Woodgrains",
        description: "From classic oak to exotic species, these surfaces provide the look and feel of real wood without the maintenance.",
        features: ["Deep texture", "Natural variety", "FSC certified"]
      },
      {
        name: "Feelwood",
        description: "Premium synchronized pore textures that coordinate the visual grain with the physical texture.",
        features: ["Visual-texture sync", "Solid wood look", "Modern finish"]
      },
      {
        name: "PerfectSense",
        description: "High-end matte and gloss lacquered boards with anti-fingerprint properties and impressive depth.",
        features: ["No-fingerprint matte", "High-end gloss", "Extreme durability"]
      }
    ],
    brochures: [
      { name: "Decorative Collection", filename: "decorative-collection.pdf", description: "EGGER US portfolio summary" },
      { name: "Trend Guide", filename: "trends.pdf", description: "Seasonal interior design trends" }
    ]
  },
  {
    slug: "finsa",
    name: "Finsa",
    logo: "/images/partners/finsa.png",
    heroImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Finsa is a pioneer in the manufacturing of wood-based panels in Spain. Their DUO Range offers a complete selection of decorative surfaces designed for the contemporary home and office.",
    websiteUrl: "https://www.finsa.com",
    brandColors: {
      primary: "#e81b25",
      accent: "#3a3a3a"
    },
    highlights: [
      "Antibacterial Surfaces",
      "Sustainable PEFC Certified Wood",
      "Low Formaldehyde Emissions",
      "Versatile Design Portfolio"
    ],
    collections: [
      {
        name: "DUO Range",
        description: "A versatile collection of woodgrains and solid colors designed to harmonize any interior project.",
        features: ["Coordinated designs", "Melamine surfaces", "Trend-ready palette"]
      },
      {
        name: "Technical Solutions",
        description: "High-performance boards designed for specific humidity and fire-resistant requirements.",
        features: ["Moisture resistant", "Fire retardant", "Structural integrity"]
      }
    ],
    brochures: [
      { name: "DUO Catalog", filename: "finsa-duo.pdf", description: "Full decorative surfaces selector" },
      { name: "Textures Guide", filename: "textures.pdf", description: "Deep dive into Finsa finish types" }
    ]
  },
  {
    slug: "oneskin",
    name: "OneSkin",
    logo: "/images/partners/oneskin.png",
    heroImage: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "OneSkin specializes in high-end lacquered panels, known for their perfect gloss levels and depth of color. Their Prime Gloss series is a preferred choice for minimalist, luxury kitchens.",
    websiteUrl: "https://panellis.com",
    brandColors: {
      primary: "#1a1a1a",
      accent: "#cccccc"
    },
    highlights: [
      "Level 10 High Gloss",
      "Exceptional Color Clarity",
      "High UV Resistance",
      "Impact Resistant Surface"
    ],
    collections: [
      {
        name: "Prime Gloss",
        description: "Premium high-gloss lacquered panels with a mirror-like finish and zero-orange-peel effect.",
        features: ["Mirror finish", "Saturated colors", "Minimalist look"]
      },
      {
        name: "Updated Colors",
        description: "The latest addition to the OneSkin palette, featuring earthy tones and modern architectural neutrals.",
        features: ["New neutrals", "Matte available", "Designer focused"]
      }
    ],
    brochures: [
      { name: "OneSkin Collection", filename: "oneskin-collection.pdf", description: "High-gloss lacquered panels catalog" },
      { name: "Color Chart", filename: "color-chart.pdf", description: "LATEST 2024 updated color range" }
    ]
  },
  {
    slug: "alvic",
    name: "Alvic USA",
    logo: "/images/partners/alvic.svg",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15224bbaf47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Alvic is a leading global company in the production of furniture components. Their Luxe collection represents the pinnacle of high-gloss surface technology.",
    websiteUrl: "https://alvicusa.com",
    brandColors: {
      primary: "#000000",
      accent: "#7c7c7c"
    },
    highlights: [
      "Luxe High Gloss Technology",
      "Scratch & Stain Resistant",
      "Unmatched Depth of Reflection",
      "Matching Melamine & HPL"
    ],
    collections: [
      {
        name: "Luxe Collection",
        description: "A patented high-gloss lacquered surface with excellent physical and mechanical performance.",
        features: ["Patented technology", "Mirror-like shine", "Chemical resistance"]
      },
      {
        name: "Zenit",
        description: "Super-matte lacquered surfaces with a high resistance and a soft, silk-like feel.",
        features: ["Super matte", "Anti-fingerprint", "Modern texture"]
      }
    ],
    brochures: [
      { name: "Luxe Catalog", filename: "alvic-luxe.pdf", description: "High gloss lacquered panels guide" },
      { name: "Syncron Collection", filename: "syncron.pdf", description: "Textured surfaces collection" }
    ]
  },
  {
    slug: "real-stone-veneer",
    name: "Real Stone Veneer",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Transform Your Home with Our Exquisite Range of Real Rock Veneer. Real Stone Veneer makes home renovations easier than ever, bringing timeless quality with a hassle-free process.",
    websiteUrl: "/contacts",
    brandColors: {
      primary: "#2C3E50",
      accent: "#BDC3C7"
    },
    highlights: [
      "100% Real Rock",
      "Innovative Design",
      "Hassle-Free Process",
      "Top Choice 2025"
    ],
    construction: {
      title: "Premium Quality & Innovative Design",
      description: "Our veneer is so versatile it can be applied anywhere, indoors or outdoors, to instantly elevate any space. Its unique structure consists of four high-performance layers:",
      layers: [
        { name: "Natural Slate", description: "The authentic stone surface." },
        { name: "Adhesive", description: "High-strength bonding layer." },
        { name: "Fiber Glass", description: "Provides flexibility and durability." },
        { name: "Under Lay", description: "Ensures a stable and easy application." }
      ]
    },
    applications: {
      title: "One Solution for Every Space",
      sections: [
        {
          title: "Indoor Applications",
          items: [
            "Seamless Solutions: Perfect for walls, fireplaces, kitchens, and bathrooms.",
            "Lightweight Design: Makes application fast and hassle-free.",
            "Low Maintenance: Durable surface that is simple to clean and lasts for years."
          ]
        },
        {
          title: "Outdoor Applications",
          items: [
            "Versatility: Ideal for façades, patios, garden walls, and entryways.",
            "Weather Resistant: Specifically built to withstand the elements.",
            "Timeless Style: Enhances any exterior with minimal upkeep."
          ]
        }
      ]
    },
    collections: [
      {
        name: "Sandstone & Marble",
        description: "Our luxury patterns featuring vibrant natural colors and textures.",
        features: ["Sandstone: Mint White, Mint Yellow, Terra Red", "Marble: Panda White, Sunrise, Rainforest Green", "Vibrant colors like Teakwood and Rainbow"]
      },
      {
        name: "Slate Stone Veneer",
        description: "Elegant and rustic patterns for a sophisticated architectural look.",
        features: ["Indian Autumn", "Tan Brown & Autumn Rustic", "Zeera Green & Silver Shine"]
      },
      {
        name: "Available Sizes",
        description: "Large format sheets suitable for any scale of project.",
        features: ["122 x 244 cm", "122 x 280 cm", "122 x 305 cm", "122 x 366 cm"]
      }
    ],
    installation: {
      title: "Quick and Easy Installation",
      steps: [
        { title: "Surface Preparation", description: "Ensure the surface is clean, dry, and structurally sound before beginning." },
        { title: "Application", description: "Spread a layer of adhesive or mortar evenly before setting each piece firmly into place." },
        { title: "Finishing", description: "Joints can be sealed for a smooth, finished look that lasts a lifetime." }
      ]
    },
    brochures: [
      { name: "Real Stone Veneer Catalog", filename: "catalog.pdf", description: "Download our comprehensive full range catalog" },
      { name: "2025 Renovation Guide", filename: "guide-2025.pdf", description: "Explore the top choice for home renovation in 2025" }
    ]
  }
];
