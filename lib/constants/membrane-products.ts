export const MEMBRANE_PRODUCTS: Record<string, MembraneProduct> = {
  airfiltrationmembrane: {
    id: "airfiltrationmembrane",
    title: "Ready For Market",
    subtitle: "Electrospun PVDF (Polyvinylidene difluoride) Nanofiber",
    images: [
      "/product categories/Air Filtration Membrane.jpeg",
      "/product categories/Air Filtration Membrane 1.jpg",
      "/membrane.jpeg",
    ],
    pricing: [
      { moq: "550+", price: "$12.34" },
      { moq: "1,100+", price: "$10.56" },
      { moq: "1,650+", price: "$9.30" },
      { moq: "3,300+", price: "Negotiable" },
    ],
    highlights: [
      "Worldwide shipping",
      "Various formats available",
      "Manufactured in GMP environment",
      "Expert team of various scientists",
    ],
    deliveryTime: "2-4 weeks",
    description: {
      heading: "PVDF Product Description",
      image: "/product categories/Air Filtration Membrane 1.jpg",
      paragraphs: [
        "Polyvinylidene fluoride, or polyvinylidene difluoride (PVDF) is a non-reactive thermoplastic fluoropolymer, with strong piezoelectric properties.",
        "PVDF has many promising properties, such as high piezoelectric voltage sensitivity, chemical inertness, high strength and resistance to heat generation, as well as its low protein binding properties inherent flexibility, light weight and its responsiveness over a wide frequency range.",
        "These key features make PVDF a promising component in tactile sensors; as sterilizing filters in the preparation of medication; or as a filter for analytical techniques such as HPLC, where little-to-no particulates should be present.",
        "PVDF has a non-specific affinity for amino acids, making artificial PVDF membranes very useful for the immobilization of proteins in western blots and, due to its resistance to solvents, these membranes can be reused. SNC is able to electrospin PVDF for these and other applications, including semiconductor and lithium ion battery material.",
      ],
    },
    specifications: {
      heading: "PVDF Specifications",
      groups: [
        {
          title: "Spinnability Options",
          color: "blue",
          items: [
            { label: "Pure", checked: true },
            { label: "Blend", checked: true },
          ],
        },
        {
          title: "Construction",
          color: "amber",
          items: [
            { label: "Free-Standing", checked: true },
            { label: "On Substrate", checked: true },
          ],
        },
        {
          title: "Fiber Diameter",
          color: "blue",
          value: "100-600 nm",
        },
        {
          title: "Planar Density Range",
          color: "amber",
          value: "0.5-13.5 g/m\u00B2",
        },
      ],
      formats: [
        { label: "Rolls", icon: "roll" },
        { label: "Sheets (20x30)", icon: "sheet-large" },
        { label: "Sheets (10x10)", icon: "sheet-small" },
        { label: "Custom", subtitle: "(e.g. patches, masks)", icon: "custom" },
      ],
    },
  },
};

export interface MembraneProduct {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  pricing: { moq: string; price: string }[];
  highlights: string[];
  deliveryTime: string;
  description: {
    heading: string;
    image: string;
    paragraphs: string[];
  };
  specifications: {
    heading: string;
    groups: SpecGroup[];
    formats: FormatItem[];
  };
}

export type SpecGroup =
  | { title: string; color: string; items: { label: string; checked: boolean }[]; value?: never }
  | { title: string; color: string; value: string; items?: never };

export interface FormatItem {
  label: string;
  subtitle?: string;
  icon: string;
}
