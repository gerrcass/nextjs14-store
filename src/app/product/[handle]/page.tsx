import { redirect } from "next/navigation";
import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);

  if (!id) redirect("/store");

  return <ProductView product={products[0]} />;
}
