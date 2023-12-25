interface Props {
  params: {
    category: string;
  };
}
export default function Category(props: Props) {
  const { category } = props.params;
  return <h1>Ruta dinámica: {category}</h1>;
}
