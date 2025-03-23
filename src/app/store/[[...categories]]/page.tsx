interface CategoriesProps {
  params: {
    categories: string[];
    searchParams?: string[];
  };
}

export default function Category(props: CategoriesProps) {
  const { categories } = props.params;
  return <h2>Dynamic Category: {categories}</h2>;
}
