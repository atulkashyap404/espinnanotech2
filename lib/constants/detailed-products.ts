export const DETAILED_PRODUCTS = {
    "super-es-1": {
      id: "super-es-1",
      name: "Super ES-1",
      description: "Advanced single-nozzle electrospinning system designed for research institutions and laboratories. Features precise control systems and comprehensive data logging capabilities.",
      images: [
        {
          url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
          alt: "Super ES-1 Front View"
        },
        {
          url: "https://images.unsplash.com/photo-1581092161520-4ab09478a345?auto=format&fit=crop&q=80&w=800",
          alt: "Super ES-1 Side View"
        },
        {
          url: "https://images.unsplash.com/photo-1581092156019-3e6b90be0b80?auto=format&fit=crop&q=80&w=800",
          alt: "Control Panel"
        },
        {
          url: "https://images.unsplash.com/photo-1581092160607-f6aa4589c089?auto=format&fit=crop&q=80&w=800",
          alt: "Nozzle System"
        }
      ],
      specifications: [
        {
          category: "Technical Specifications",
          items: [
            { label: "Voltage Range", value: "0-30 kV" },
            { label: "Flow Rate", value: "0.1-10 mL/h" },
            { label: "Working Distance", value: "5-15 cm" },
            { label: "Nozzle Diameter", value: "0.2-1.0 mm" }
          ]
        },
        {
          category: "Control System",
          items: [
            { label: "Interface", value: "7\" Touch Screen" },
            { label: "Data Logging", value: "USB Export" },
            { label: "Control Software", value: "ES Control v2.0" },
            { label: "Connectivity", value: "USB, Ethernet" }
          ]
        }
      ],
      documents: [
        { label: "Technical Specifications", url: "/docs/super-es-1-specs.pdf" },
        { label: "User Manual", url: "/docs/super-es-1-manual.pdf" },
        { label: "Safety Guidelines", url: "/docs/super-es-1-safety.pdf" },
        { label: "Research Applications", url: "/docs/super-es-1-applications.pdf" }
      ]
    },
    "super-es-2": {
      id: "super-es-2",
      name: "Super ES-2",
      description: "Advanced single-nozzle electrospinning system designed for research institutions and laboratories. Features precise control systems and comprehensive data logging capabilities.",
      images: [
        {
          url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
          alt: "Super ES-2 Front View"
        },
        {
          url: "https://images.unsplash.com/photo-1581092161520-4ab09478a345?auto=format&fit=crop&q=80&w=800",
          alt: "Super ES-2 Side View"
        },
        {
          url: "https://images.unsplash.com/photo-1581092156019-3e6b90be0b80?auto=format&fit=crop&q=80&w=800",
          alt: "Control Panel"
        },
        {
          url: "https://images.unsplash.com/photo-1581092160607-f6aa4589c089?auto=format&fit=crop&q=80&w=800",
          alt: "Nozzle System"
        }
      ],
      specifications: [
        {
          category: "Technical Specifications",
          items: [
            { label: "Voltage Range", value: "0-30 kV" },
            { label: "Flow Rate", value: "0.1-10 mL/h" },
            { label: "Working Distance", value: "5-15 cm" },
            { label: "Nozzle Diameter", value: "0.2-1.0 mm" }
          ]
        },
        {
          category: "Control System",
          items: [
            { label: "Interface", value: "7\" Touch Screen" },
            { label: "Data Logging", value: "USB Export" },
            { label: "Control Software", value: "ES Control v2.0" },
            { label: "Connectivity", value: "USB, Ethernet" }
          ]
        }
      ],
      documents: [
        { label: "Technical Specifications", url: "/docs/super-es-1-specs.pdf" },
        { label: "User Manual", url: "/docs/super-es-1-manual.pdf" },
        { label: "Safety Guidelines", url: "/docs/super-es-1-safety.pdf" },
        { label: "Research Applications", url: "/docs/super-es-1-applications.pdf" }
      ]
    }
  } as const;