interface CategoriesProps {
  params: {
    categories: string[];
    searchParams?: string[];
  };
}

export default function Category(props: CategoriesProps) {
  const { categories } = props.params;
  return <h1>Dynamic Category: {categories}</h1>;
}
