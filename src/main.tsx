import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "#/libs/components/navbar";
import { Products } from "#/pages/products";
import { ProductDetail } from "#/pages/product-detail";
import { Cart } from "#/pages/cart";
import "./libs/styles/tailwind.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="bg-gray-100 h-screen">
          <Navbar />

          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);