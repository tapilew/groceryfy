// note: the other dynamic routing [[...categories]] is a catch-all route, and it has priority over this one
// so, this is not showing up, sadly :(
// todo: play around with the file routing system and have fun! :)
interface CategoryProps {
  params: {
    category: string;
  };
}
export default function Category(props: CategoryProps) {
  console.log(props);
  return <h1>Dynamic Categoryyyyyyy: {props.params.category}</h1>;
}
