import { expect, it } from "vitest";
import { calculateTotal } from "../../src/cart.js";

it("reproduces issue 1: calculateTotal treats discountPercent as a percentage", () => {
  expect(
    calculateTotal([{ name: "Item", price: 30, quantity: 1 }], 10, 8),
  ).toBe(29.16);
});
