import { useQuery } from "@tanstack/react-query";
import { jsonFetch } from "../utils/fetch";
import { IProduct } from "../types/product";
import { Product } from "../components/Product";

export function Products() {
  const { data, status } = useQuery(["/products"], () => jsonFetch<IProduct[]>("/products"));

  if (status === "loading") return <p>Loading...</p>;

  if (status === "error") return <p>API error</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <h1>Product list</h1>

      {data.map(product => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}