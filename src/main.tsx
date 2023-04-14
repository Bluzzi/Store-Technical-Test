import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "#/libs/contexts/cart";
import { Navbar } from "#/libs/components/navbar";
import { Home } from "#/pages/home";
import { Products } from "#/pages/products";
import { ProductDetail } from "#/pages/product-detail";
import { Cart } from "#/pages/cart";
import "./libs/styles/tailwind.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);