import { ProductDetailClient } from "@/components/products/detail/ProductDetailClient";
import { PRODUCTS } from "@/lib/constants/products";
import { DETAILED_PRODUCTS } from "@/lib/constants/detailed-products";

export function generateStaticParams() {
  const paths: { category: string; subcategory: string; productId: string }[] = [];
  
  Object.entries(PRODUCTS).forEach(([subcategory, products]) => {
    products.forEach((product) => {
      paths.push({
        category: "electrospinning", // Since research products are under electrospinning
        subcategory,
        productId: product.id,
      });
    });
  });

  return paths;
}

// Type guard to validate if a productId is valid
function isValidProductId(productId: string): productId is keyof typeof DETAILED_PRODUCTS {
  return productId in DETAILED_PRODUCTS;
}

export default function ProductDetailPage({ 
  params 
}: { 
  params: { productId: string } 
}) {
  if (!isValidProductId(params.productId)) {
    return <div>Product not found</div>; // Handle invalid productId gracefully
  }

  return <ProductDetailClient productId={params.productId} />;
}
