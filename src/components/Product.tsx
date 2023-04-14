import { Link } from "react-router-dom";

type ProductProps = {
  id: number;
  title: string;
  description: string;
  price: number;
}

export function Product({ id, title, description, price }: ProductProps) {
  return (
    <Link style={{ backgroundColor: "gray", margin: "10px" }} to={`/products/${id}`}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </Link>
  )
}