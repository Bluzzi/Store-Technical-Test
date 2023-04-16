import type { ReactElement } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { jsonFetch } from "#/libs/utils/fetch";
import { IProduct } from "#/libs/types/product";
import { useCartStore } from "#/libs/stores/cart";
import { Loading } from "#/libs/components/loading";
import { Button } from "#/libs/components/button";

export function ProductDetail(): ReactElement {
  const { productId } = useParams();
  const incProduct = useCartStore(state => state.incProduct);
  const navigate = useNavigate();

  const { data, status } = useQuery(["/products", productId], () => jsonFetch<IProduct>(`/products/${productId}`));

  const addToCart = (productId: number): void => {
    incProduct(productId);
    navigate("/cart");
  };

  if (status === "loading") return <Loading />;
  if (status === "error") return <p>API error</p>;

  return (
    <div className="bg-gray-300 rounded w-11/12 max-w-4xl mx-auto my-5 p-5 flex flex-col gap-3">
      <p className="font-bold text-xl">Title: {data.title}</p>
      <p>{data.description}</p>
      <p><span className="font-bold">Price:</span> {data.price}</p>
      <p><span className="font-bold">Category:</span> {data.category}</p>
      <p><span className="font-bold">Rating:</span> {data.rating.rate}/5</p>

      <Button onClick={() => addToCart(data.id)}>Add to cart</Button>
    </div>
  );
}