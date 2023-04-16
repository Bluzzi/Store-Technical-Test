import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "#/libs/stores/cart";

export function Navbar(): ReactElement {
  const productCount = useCartStore(state => state.products.length);

  const links = [
    { name: "Products", link: "/" },
    { name: `Cart (${productCount})`, link: "/cart" }
  ];

  return (
    <nav className="bg-gray-900 py-4 flex items-center justify-center gap-5">
      {links.map(element => (
        <Link
          key={element.link}
          to={element.link}
          className="bg-gray-200 hover:bg-gray-300 rounded py-2 px-5"
        >
          {element.name}
        </Link>
      ))}
    </nav>
  );
}