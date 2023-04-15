export type CartProduct = {
  id: number;
  count: number;
}

export type CartStore = {
  products: CartProduct[];

  incProduct: (productId: number, quantity?: number) => void;
  decProduct: (productId: number, quantity?: number) => void;

  removeProduct: (productId: number) => void;
  clearProducts: () => void;
}