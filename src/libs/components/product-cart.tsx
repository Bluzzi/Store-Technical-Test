import { ReactElement } from "react";
import { Button } from "./button";
import { useCartStore } from "../stores/cart/cart.store";

type ProductCartProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export function ProductCart({ id, title, description, image, price, quantity }: ProductCartProps): ReactElement {
  const removeFromCart = useCartStore(state => state.removeProduct);

  return (
    <div className="rounded bg-gray-300 w-11/12 max-w-2xl p-4 flex items-center gap-5">
      <img src={image} alt={title} className="w-36 rounded-md" />

      <div className="space-y-3">
        <p className="font-bold">{title}</p>
        <p>{description}</p>

        <p className="font-bold text-xl">${price * quantity}</p>

        <Button variant="secondary" onClick={() => removeFromCart(id)}>Remove</Button>
      </div>
    </div>
  );
}