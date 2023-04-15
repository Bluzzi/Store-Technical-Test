import type { ReactElement } from "react";
import { useQuery } from "@tanstack/react-query";
import { jsonFetch } from "#/libs/utils/fetch";
import { IProduct } from "#/libs/types/product";
import { ProductCard } from "#/libs/components/product-card";

export function Products(): ReactElement {
  const { data, status } = useQuery(["/products"], () => jsonFetch<IProduct[]>("/products"));

  if (status === "loading") return <p>Loading...</p>;

  if (status === "error") return <p>API error</p>;

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-5">
      {data.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}