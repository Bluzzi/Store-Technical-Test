import { Button } from "#/libs/components/button";
import { Loading } from "#/libs/components/loading";
import { ProductCart } from "#/libs/components/product-cart";
import { useCartStore } from "#/libs/stores/cart/cart.store";
import { IProduct } from "#/libs/types/product";
import { jsonFetch } from "#/libs/utils/fetch";
import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";

export function Cart(): ReactElement {
  const products = useCartStore(state => state.products);
  const clearCart = useCartStore(state => state.clearProducts);

  const { data, status } = useQuery(["/products", products], () => {
    const promises: Promise<IProduct>[] = [];

    // Bad practice, but the API does not support other method:
    for (const product of products) promises.push(jsonFetch<IProduct>(`/products/${product.id}`));

    return Promise.all(promises);
  });

  if (status === "loading") return <Loading />;
  if (status === "error") return <p>API error</p>;

  return (
    <div className="flex flex-col items-center gap-5 py-5">
      {data.map(product => (
        <ProductCart
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
          quantity={products.find(element => element.id === product.id)?.count || 0}
        />
      ))}

      <Button variant="danger" onClick={() => clearCart()}>Clear cart</Button>
    </div>
  );
}