import { ReactElement } from "react";
import { Link } from "react-router-dom";

type ProductProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export function ProductCard({ id, title, description, image, price }: ProductProps): ReactElement {
  return (
    <Link to={`/products/${id}`} className="rounded bg-gray-300 w-11/12 max-w-2xl p-4 flex items-center gap-5">
      <img src={image} alt={title} className="w-36 rounded-md" />

      <div>
        <p className="font-bold">{title}</p>
        <p>{description}</p>

        <p className="font-bold text-xl">${price}</p>
      </div>
    </Link>
  );
}