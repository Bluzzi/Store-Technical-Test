import { CartStore } from "./cart.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist<CartStore>(
    set => ({
      products: [],

      incProduct: (productId, quantity = 1) => set(state => {
        const products = [...state.products];
        const existIndex = products.findIndex(product => product.id === productId);

        if (existIndex !== -1) products[existIndex].count += quantity;
        else products.push({ id: productId, count: quantity });

        return { products };
      }),

      decProduct: (productId, quantity = 1) => set(state => {
        const products = [...state.products];
        const existIndex = products.findIndex(product => product.id === productId);

        if (existIndex !== -1) {
          products[existIndex].count -= quantity;

          if (products[existIndex].count <= 0) {
            return { products: state.products.filter(product => product.id !== productId) };
          }
        } else products.push({ id: productId, count: quantity });

        return { products };
      }),

      removeProduct: (productId) => set(state => {
        return { products: state.products.filter(product => product.id !== productId) };
      }),

      clearProducts: () => set({ products: [] })
    }),

    { name: "cart-products" }
  )
);