import { ProductDetailClient } from "@/components/products/detail/ProductDetailClient";
import { PRODUCTS } from "@/lib/constants/products";

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

export default function ProductDetailPage({ 
  params 
}: { 
  params: { productId: string } 
}) {
  return <ProductDetailClient productId={params.productId} />;
}