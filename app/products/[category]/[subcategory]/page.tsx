import { SUBCATEGORIES, PRODUCTS } from "@/lib/constants/products";
import { SubcategoryClient } from "@/components/products/SubcategoryClient";

export function generateStaticParams() {
  const paths: { category: string; subcategory: string }[] = [];
  
  Object.entries(SUBCATEGORIES).forEach(([category, subcats]) => {
    subcats.forEach((subcat) => {
      paths.push({
        category,
        subcategory: subcat.id,
      });
    });
  });

  return paths;
}

export default function SubcategoryPage({ params }: { params: { subcategory: string } }) {
  return <SubcategoryClient subcategory={params.subcategory} />;
}