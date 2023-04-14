import type { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Home(): ReactElement {
  return <Link to="/products">Products</Link>;
}