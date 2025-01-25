export const SUBCATEGORIES = {
  electrospinning: [
    {
      id: "electrospinning",
      title: "Electro Spinning",
      description: "Advanced systems for research institutions",
      image: "/product categories/electro spinning.jpg",
      features: []
    },
    // {
    //   id: "industrial",
    //   title: "Industrial Systems",
    //   description: "High-throughput industrial production units",
    //   image: "https://images.unsplash.com/photo-1581092161520-4ab09478a345?auto=format&fit=crop&q=80&w=800",
    //   features: ["Mass Production", "Automated Control", "24/7 Operation"]
    // },
    // {
    //   id: "custom",
    //   title: "Custom Solutions",
    //   description: "Tailored systems for specific applications",
    //   image: "https://images.unsplash.com/photo-1581092156019-3e6b90be0b80?auto=format&fit=crop&q=80&w=800",
    //   features: ["Custom Design", "Application Specific", "Expert Support"]
    // },
    // {
    //   id: "training",
    //   title: "Training Systems",
    //   description: "Educational units for academic institutions",
    //   image: "https://images.unsplash.com/photo-1581092160607-f6aa4589c089?auto=format&fit=crop&q=80&w=800",
    //   features: ["User Friendly", "Educational Tools", "Safety Features"]
    // }
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
  accessories: [
    {
      id: "spinneret",
      title: "Spinnerets",
      description: "Precision engineered spinnerets for various applications",
      image: "https://images.unsplash.com/photo-1581092161520-4ab09478a345?auto=format&fit=crop&q=80&w=800",
      features: ["Multiple Sizes", "Custom Designs", "High Precision"]
    }
  ],
  software: [
    {
      id: "control",
      title: "Process Control",
      description: "Advanced process control and monitoring software",
      image: "https://images.unsplash.com/photo-1581092156019-3e6b90be0b80?auto=format&fit=crop&q=80&w=800",
      features: ["Real-time Control", "Data Logging", "Analytics"]
    }
  ]
} as const;

export const PRODUCTS = {
  electrospinning: [
    {
      id: "super-es-1",
      title: "Super ES-1",
      description: "Basic electrospinning unit with single nozzle",
      image: "/product categories/super es 1.png",
      features: ["Single Nozzle", "Rotating Drum", "Flat Plate"]
    },
    {
      id: "super-es-1a",
      title: "Super ES-1A",
      description: "Advanced dual nozzle system",
      image: "/product categories/super es 1a cover.png",
      features: ["Flat Plate", "Rotating Drum", " Dual Nozzle", " Core-Shell"]
    },
    {
      id: "super-es-2",
      title: "Super ES-2",
      description: "Dual-nozzle research system",
      image: "https://images.unsplash.com/photo-1581092156019-3e6b90be0b80?auto=format&fit=crop&q=80&w=800",
      features: ["Dual Nozzle", "Rotating Drum", "Uniform Coating", "Computer Control", "Core-Shell", "Under Solvent"]
    },
    {
      id: "super-es-2a",
      title: "Super ES-2A",
      description: "Premium research grade system",
      image: "https://images.unsplash.com/photo-1581092160607-f6aa4589c089?auto=format&fit=crop&q=80&w=800",
      features: ["Dual Nozzle", "Rotating Drum", "Camera Interface", "Touch Screen", "Core-Shell", "Atmospheric Control"]
    },
    {
      id: "super-es-3",
      title: "Super ES-3",
      description: "Premium research grade system",
      image: "https://images.unsplash.com/photo-1581092160607-f6aa4589c089?auto=format&fit=crop&q=80&w=800",
      features: ["Dual Nozzle", "Both Side Jet", "Camera Interface", "Bi-Component", "Core-Shell", "Atmospheric Control"]
    },
    {
      id: "super-es-3a",
      title: "Super ES-3A",
      description: "Premium research grade system",
      image: "https://images.unsplash.com/photo-1581092160607-f6aa4589c089?auto=format&fit=crop&q=80&w=800",
      features: ["Four Nozzle", "Yarning", "Camera Interface", "Bi-Component", "Atmospheric Control", "Touch Control"]
    },
    {
      id: "super-es-4",
      title: "Super ES-4",
      description: "Premium research grade system",
      image: "https://images.unsplash.com/photo-1581092160607-f6aa4589c089?auto=format&fit=crop&q=80&w=800",
      features: ["Semi-Pilot Scale", "Patented Technology", "Roll to Roll", "Batch Opreation", "Atmospheric Control", "Touch Control"]
    },
  ]
  
} as const;