import type { ReactElement } from "react";
import { useCartContext } from "../libs/contexts/cart";
import { Link } from "react-router-dom";

export function Cart(): ReactElement {
  const cart = useCartContext();

  return (
    <div>
      <h1>Cart</h1>
      <Link to="/products">View products</Link>

      <h2>Products in cart:</h2>
      {cart.products.map(product => (
        <div key={product.id}>
          <p>ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
          <p>Rate: {product.rating.rate}</p>

          <button onClick={() => cart.remove(product)}>Remove this product</button>

          <hr />
        </div>
      ))}
    </div>
  );
}