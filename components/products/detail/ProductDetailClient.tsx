"use client";

import { motion } from "framer-motion";
import { NavigationButtons } from "../NavigationButtons";
import { ProductSpecifications } from "./ProductSpecifications";
import { ProductGallery } from "./ProductGallery";
import { DocumentButtons } from "./DocumentButtons";
import { DETAILED_PRODUCTS } from "@/lib/constants/detailed-products";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductDetailClientProps {
  productId: keyof typeof DETAILED_PRODUCTS;
}

export function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const product = DETAILED_PRODUCTS[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Category Badge */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="inline-block px-3 py-2"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative bg-white text-black overflow-hidden"
        style={{
          backgroundImage: `url('/background image/E105ARL3.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-r"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
        {/* Wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 text-black">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,133.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,133.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,165.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,133.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-black">{product.description}</p>

                <div className="flex gap-4 mt-8">
                  <Button
                    size="lg"
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Product Enquiry
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Main Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative"
            >
              <div className="relative aspect-square max-w-xl">
                <ProductGallery images={[...product.images]} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Specifications & Details */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProductSpecifications
              specifications={product.specifications.map((spec) => ({
                category: spec.category,
                items: spec.items.map((item) => ({
                  label: item.label,
                  value: item.value,
                })),
              }))}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <DocumentButtons
              documents={product.documents.map((doc) => ({
                label: doc.label,
                url: doc.url,
              }))}
            />
          </motion.div>
        </div>
      </div>

      <NavigationButtons showNext={false} />
    </main>
  );
}




// "use client";

// import { motion } from "framer-motion";
// import { NavigationButtons } from "../NavigationButtons";
// import { ProductSpecifications } from "./ProductSpecifications";
// import { ProductGallery } from "./ProductGallery";
// import { DocumentButtons } from "./DocumentButtons";
// import { DETAILED_PRODUCTS } from "@/lib/constants/detailed-products";

// type ProductId = keyof typeof DETAILED_PRODUCTS;

// interface ProductDetailClientProps {
//   productId: ProductId; // Strongly typed productId
// }

// // Type guard to validate productId
// function isValidProductId(id: string): id is ProductId {
//   return id in DETAILED_PRODUCTS;
// }

// export function ProductDetailClient({ productId }: ProductDetailClientProps) {
//   if (!isValidProductId(productId)) {
//     return <div>Product not found</div>;
//   }

//   const product = DETAILED_PRODUCTS[productId];

//   return (
//     <main className="min-h-screen pt-20">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//         >
//           {/* Convert readonly array to mutable */}
//           <ProductGallery images={[...product.images]} />

//           <div className="space-y-8">
//             <div>
//               <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//               <p className="text-lg text-gray-600">{product.description}</p>
//             </div>

//             {/* Convert readonly specifications to mutable */}
//             <ProductSpecifications
//               specifications={product.specifications.map((spec) => ({
//                 ...spec,
//                 items: [...spec.items],
//               }))}
//             />

//             <DocumentButtons documents={[...product.documents]} />
//           </div>
//         </motion.div>
//       </div>

//       <NavigationButtons showNext={false} />
//     </main>
//   );
// }
