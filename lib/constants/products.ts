export const SUBCATEGORIES = {
  electrospinning: [
    {
      id: "electrospinning",
      title: "Electro Spinning",
      description: "Advanced systems for research institutions",
      image: "/product categories/electro spinning.jpg",
      features: []
    },
  ],
  nanofibermembrane: [
    {
      id: "industrial",
      title: "Industrial Melt Spinning",
      description: "High-capacity industrial melt spinning systems",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      features: ["High Throughput", "Temperature Control", "Automated Operation"]
    }
  ],
  nanofibrefunctionalproducts: [
    {
      id: "spinneret",
      title: "Spinnerets",
      description: "Precision engineered spinnerets for various applications",
      image: "https://images.unsplash.com/photo-1581092161520-4ab09478a345?auto=format&fit=crop&q=80&w=800",
      features: ["Multiple Sizes", "Custom Designs", "High Precision"]
    }
  ],
  
} as const;

export const PRODUCTS = {
  electrospinning: [
    {
      id: "super-es-4",
      title: "Super ES-4",
      description: "Premium research grade system",
      image: "/product categories/7.avif",
      features: ["Semi-Pilot Scale", "Patented Technology", "Roll to Roll", "Batch Opreation", "Atmospheric Control", "Touch Control"]
    },
    
    {
      id: "super-es-3a",
      title: "Super ES-3A",
      description: "Premium research grade system",
      image: "/product categories/super es 3a.avif",
      features: ["Four Nozzle", "Yarning", "Camera Interface", "Bi-Component", "Atmospheric Control", "Touch Control"]
    },

    {
      id: "super-es-3",
      title: "Super ES-3",
      description: "Premium research grade system",
      image: "/product categories/5.avif",
      features: ["Dual Nozzle", "Both Side Jet", "Camera Interface", "Bi-Component", "Core-Shell", "Atmospheric Control"]
    },

    {
      id: "super-es-2a",
      title: "Super ES-2A",
      description: "Premium research grade system",
      image: "/product categories/4.avif",
      features: ["Dual Nozzle", "Rotating Drum", "Camera Interface", "Touch Screen", "Core-Shell", "Atmospheric Control"]
    },

    {
      id: "super-es-2",
      title: "Super ES-2",
      description: "Dual-nozzle research system",
      image: "/product categories/3.avif",
      features: ["Dual Nozzle", "Rotating Drum", "Uniform Coating", "Computer Control", "Core-Shell", "Under Solvent"]
    },


    {
      id: "super-es-1a",
      title: "Super ES-1A",
      description: "Advanced dual nozzle system",
      image: "/product categories/2.avif",
      features: ["Flat Plate", "Rotating Drum", " Dual Nozzle", " Core-Shell"]
    },
    
    
    {
      id: "super-es-1",
      title: "Super ES-1",
      description: "Basic electrospinning unit with single nozzle",
      image: "/product categories/1.avif",
      features: ["Single Nozzle", "Rotating Drum", "Flat Plate"]
    },
  ]
  
} as const;