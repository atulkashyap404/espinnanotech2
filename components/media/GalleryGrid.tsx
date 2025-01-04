"use client";

import { GalleryCard } from "./GalleryCard";

const GALLERY_ITEMS = [
  {
    title: "New Research Breakthrough",
    description: "Our team achieved a significant breakthrough in nanofiber production efficiency, reducing energy consumption by 40%.",
    image: "https://images.unsplash.com/photo-1581093458791-9d58e59c3e3d?auto=format&fit=crop&q=80&w=800",
    date: "March 15, 2024",
    category: "Research"
  },
  {
    title: "International Conference",
    description: "E-SPIN NANOTECH presented latest innovations at the International Nanotech Summit 2024.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800",
    date: "February 28, 2024",
    category: "Event"
  },
  {
    title: "New Laboratory Opening",
    description: "State-of-the-art research facility inaugurated to accelerate nanofiber technology development.",
    image: "https://images.unsplash.com/photo-1581093804475-577d72e31202?auto=format&fit=crop&q=80&w=800",
    date: "January 10, 2024",
    category: "Facility"
  },
  {
    title: "Industry Partnership",
    description: "Strategic collaboration announced with leading pharmaceutical company for medical applications.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80&w=800",
    date: "December 5, 2023",
    category: "Partnership"
  },
  {
    title: "Product Launch",
    description: "Introducing our latest electrospinning system with advanced control features.",
    image: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    date: "November 20, 2023",
    category: "Product"
  },
  {
    title: "Award Recognition",
    description: "E-SPIN NANOTECH received innovation excellence award for contributions to nanotech industry.",
    image: "https://images.unsplash.com/photo-1581093577421-f561c1a46d01?auto=format&fit=crop&q=80&w=800",
    date: "October 15, 2023",
    category: "Award"
  }
] as const;

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {GALLERY_ITEMS.map((item, index) => (
        <GalleryCard
          key={item.title}
          {...item}
          index={index}
        />
      ))}
    </div>
  );
}