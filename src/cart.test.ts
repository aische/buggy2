import { describe, expect, it } from "vitest";
import { calculateTotal } from "./cart.js";

describe("calculateTotal", () => {
  it("handles zero discount and tax", () => {
    expect(
      calculateTotal([{ name: "A", price: 5, quantity: 1 }], 0, 0),
    ).toBe(5);
  });
});
