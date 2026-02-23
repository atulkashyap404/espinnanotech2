import { SUBCATEGORIES } from "@/lib/constants/products";
import { CategoryClient } from "@/components/products/CategoryClient";

export function generateStaticParams() {
  return Object.keys(SUBCATEGORIES).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  return <CategoryClient category={params.category} />;
}