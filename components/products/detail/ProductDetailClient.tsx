"use client";

import { motion } from "framer-motion";
import { NavigationButtons } from "../NavigationButtons";
import { ProductSpecifications } from "./ProductSpecifications";
import { ProductGallery } from "./ProductGallery";
import { DocumentButtons } from "./DocumentButtons";
import { DETAILED_PRODUCTS } from "@/lib/constants/detailed-products";

type ProductId = keyof typeof DETAILED_PRODUCTS;

interface ProductDetailClientProps {
  productId: ProductId; // Strongly typed productId
}

// Type guard to validate productId
function isValidProductId(id: string): id is ProductId {
  return id in DETAILED_PRODUCTS;
}

export function ProductDetailClient({ productId }: ProductDetailClientProps) {
  if (!isValidProductId(productId)) {
    return <div>Product not found</div>;
  }

  const product = DETAILED_PRODUCTS[productId];

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Convert readonly array to mutable */}
          <ProductGallery images={[...product.images]} />

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.description}</p>
            </div>

            {/* Convert readonly specifications to mutable */}
            <ProductSpecifications
              specifications={product.specifications.map((spec) => ({
                ...spec,
                items: [...spec.items],
              }))}
            />

            <DocumentButtons documents={[...product.documents]} />
          </div>
        </motion.div>
      </div>

      <NavigationButtons showNext={false} />
    </main>
  );
}
