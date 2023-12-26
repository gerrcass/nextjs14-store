interface CategoriesProps {
  params: {
    categories: string[];
  };
  searchParams: {
    search?: string;
  };
}
export default function Category(props: CategoriesProps) {
  const { categories } = props.params;
  return <h1>Ruta dinámica: {categories}</h1>;
}
