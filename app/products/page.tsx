"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { useRouter } from "next/navigation";

const PRODUCT_CATEGORIES = [
  {
    id: "electrospinning",
    title: "Nanofibre Spinning Technology",
    description: "Revolutionizing Material Science with Precision and Innovation",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    features: []
  },
  {
    id: "nanofibermembrane",
    title: "Nanofibre Membrane Technology",
    description: "Industrial-grade melt spinning solutions",
    image: "https://images.unsplash.com/photo-1581092161520-4ab09478a345?auto=format&fit=crop&q=80&w=800",
    features: []
  },
  {
    id: "nanofibrefunctionalproducts",
    title: "Nanofibre Functional Products",
    description: "Essential components and accessories",
    image: "https://images.unsplash.com/photo-1581092156019-3e6b90be0b80?auto=format&fit=crop&q=80&w=800",
    features: ["Quality Components", "Wide Selection", "Custom Options"]
  }
] as const;

export default function ProductsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen">
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Product Categories
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <div key={category.id} onClick={() => router.push(`/products/${category.id}`)}>
              <ProductCard
                {...category}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}