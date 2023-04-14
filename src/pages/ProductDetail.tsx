import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { jsonFetch } from "../utils/fetch";
import { IProduct } from "../types/product";
import { useCartContext } from "../contexts/cart";

export function ProductDetail() {
  const { productId } = useParams();
  const cart = useCartContext();
  const navigate = useNavigate();

  const { data, status } = useQuery(["/products", productId], () => jsonFetch<IProduct>(`/products/${productId}`));

  const addToCart = (product: IProduct) => {
    cart.add(product);
    navigate("/cart");
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>API error</p>;

  return (
    <div>
      <h1>Product {data.title} ({data.id})</h1>

      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Description: {data.description}</p>
      <p>Price: {data.price}</p>
      <p>Category: {data.category}</p>
      <p>Rate: {data.rating.rate}</p>

      <button onClick={() => addToCart(data)}>Add to cart</button>
    </div>
  );
}