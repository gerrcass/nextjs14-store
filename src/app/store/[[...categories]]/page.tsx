import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams: {
    search?: string;
  };
}

export default async function Category(props: CategoryProps) {
  const products = await getProducts();
  // const { categories } = props.params;

  return <ProductsWrapper products={products} />;
}
