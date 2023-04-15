import { afterEach, describe, expect, test } from "vitest";
import { useCartStore } from "./cart.store";

describe("useCartStore", () => {
  const { incProduct, decProduct, removeProduct, clearProducts } = useCartStore.getState();

  afterEach(() => {
    useCartStore.setState({ products: [] });
  });

  test("the default value must be a empty array", () => {
    expect(useCartStore.getState().products).toHaveLength(0);
  });

  test("must be create the product if it does not exist", () => {
    incProduct(5);
    expect(getProductQuantity(5)).toBe(1);
  });

  test("must be increment product quantity", () => {
    incProduct(5, 2);
    expect(getProductQuantity(5)).toBe(2);

    incProduct(5, 5);
    expect(getProductQuantity(5)).toBe(7);
  });

  test("must be decrement product quantity", () => {
    incProduct(5, 10);
    decProduct(5, 5);
    expect(getProductQuantity(5)).toBe(5);

    decProduct(5, 2);
    expect(getProductQuantity(5)).toBe(3);
  });

  test("must remove the product if its quantity is equal to 0", () => {
    incProduct(5);
    decProduct(5);
    expect(getProductQuantity(5)).toBeUndefined();
  });

  test("must delete the product if its quantity is less than 0", () => {
    incProduct(5);
    decProduct(5, 2);
    expect(getProductQuantity(5)).toBeUndefined();
  });

  test("must be remove the product", () => {
    incProduct(5);
    removeProduct(5);
    expect(getProductQuantity(5)).toBeUndefined();
  });

  test("must be able to contain several products", () => {
    incProduct(5);
    incProduct(6);
    incProduct(7);

    expect(useCartStore.getState().products).toHaveLength(3);
  });

  test("must be remove all products", () => {
    incProduct(5);
    incProduct(6);
    incProduct(7);

    clearProducts();
    expect(useCartStore.getState().products).toHaveLength(0);
  });
});

function getProductQuantity(productId: number): number | undefined {
  return useCartStore.getState().products.find(product => product.id === productId)?.count;
}