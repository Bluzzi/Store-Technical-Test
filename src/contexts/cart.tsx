import { IProduct } from "../types/product";
import { useState, createContext, PropsWithChildren, useContext, useEffect } from "react";

type UseCartOutput = {
  add: (product: IProduct) => void;
  remove: (product: IProduct) => void;
  removeAll: () => void;
  products: IProduct[];
}

function useCart(): UseCartOutput {
  const [products, setProducts] = useState<IProduct[]>([]);

  const add = (product: IProduct) => setProducts(value => [...value, product]);
  const remove = (product: IProduct) => setProducts(value => value.filter(element => element.id !== product.id));
  const removeAll = () => setProducts([]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return {
    add,
    remove,
    removeAll,
    products
  }
}

const CartContext = createContext<UseCartOutput | null>(null);

export function CartProvider({ children }: PropsWithChildren<{}>) {
  const value = useCart();

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext(): UseCartOutput {
  const context = useContext(CartContext);

  if (!context) throw Error("useCartContext must be used in CartProvider");

  return context;
}