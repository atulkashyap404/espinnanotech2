"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Truck, Check, ChevronRight } from "lucide-react";
import type { MembraneProduct } from "@/lib/constants/membrane-products";

interface MembraneDetailClientProps {
  product: MembraneProduct;
}

export function MembraneDetailClient({ product }: MembraneDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {product.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.subtitle}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex gap-3 mt-4">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      aria-pressed={selectedImage === i}
                      aria-label={`View product image ${i + 1} of ${product.images.length}`}
                      className={`relative w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${
                        selectedImage === i
                          ? "border-blue-500 shadow-md"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.subtitle} view ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <table className="max-w-xs text-sm">
                  <thead>
                    <tr>
                      <th className="font-semibold text-gray-700 border-b-2 border-gray-300 pb-1 px-2 text-left">
                        MOQ
                      </th>
                      <th className="font-semibold text-gray-700 border-b-2 border-gray-300 pb-1 px-2 text-left">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.pricing.map((tier, i) => (
                      <tr key={i}>
                        <td className="text-gray-800 py-1.5 px-2 border-b border-gray-100">
                          {tier.moq}
                        </td>
                        <td className="font-medium text-gray-900 py-1.5 px-2 border-b border-gray-100">
                          {tier.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <ul className="space-y-2">
                {product.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="w-8 h-8 text-blue-600" />
                <span className="font-medium text-blue-700">{product.deliveryTime}</span>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold tracking-wider text-sm px-8 py-3 rounded transition-colors"
              >
                GET FREE QUOTE
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2"
          >
            {product.description.heading}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src={product.description.image}
                  alt={`${product.description.heading} microscopy`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded">
                  Hover For High-Mag
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-sm md:text-[15px] leading-relaxed text-gray-700 text-justify"
            >
              {product.description.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.specifications.heading}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact us
              </Link>{" "}
              for any custom specification requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {product.specifications.groups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div
                  className={`${
                    group.color === "blue" ? "bg-blue-700" : "bg-amber-600"
                  } text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-block`}
                >
                  {group.title}
                </div>
                <div className="mt-3">
                  {group.items
                    ? group.items.map((item, j) => (
                        <div key={j} className="flex items-center justify-between py-1">
                          <span className="text-sm text-gray-700">{item.label}</span>
                          {item.checked && <Check className="w-4 h-4 text-green-600" />}
                        </div>
                      ))
                    : <p className="text-gray-800 text-sm mt-2">{group.value}</p>
                  }
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="bg-blue-700 text-white text-center text-sm font-semibold py-2 rounded-t-lg">
              Formats
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white border border-t-0 border-gray-200 rounded-b-lg p-6">
              {product.specifications.formats.map((fmt, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <FormatIcon icon={fmt.icon} />
                  <span className="text-xs font-medium text-gray-700">{fmt.label}</span>
                  {fmt.subtitle && (
                    <span className="text-[10px] text-gray-500">{fmt.subtitle}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function FormatIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    roll: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <ellipse cx="24" cy="14" rx="12" ry="6" />
        <path d="M12 14v20c0 3.3 5.4 6 12 6s12-2.7 12-6V14" />
        <ellipse cx="24" cy="34" rx="12" ry="6" />
      </svg>
    ),
    "sheet-large": (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <line x1="8" y1="16" x2="40" y2="16" />
        <line x1="8" y1="24" x2="40" y2="24" />
        <line x1="8" y1="32" x2="40" y2="32" />
      </svg>
    ),
    "sheet-small": (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="12" y="12" width="24" height="24" rx="2" />
        <line x1="12" y1="20" x2="36" y2="20" />
        <line x1="12" y1="28" x2="36" y2="28" />
      </svg>
    ),
    custom: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="24" cy="20" r="10" />
        <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10" />
        <circle cx="36" cy="12" r="4" />
      </svg>
    ),
  };

  return <>{icons[icon] || null}</>;
}
