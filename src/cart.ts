export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

/**
 * Sums line items, then applies a percentage discount and sales tax.
 * Discount should apply to the subtotal; tax should apply to the discounted amount.
 */
export function calculateTotal(
  items: CartItem[],
  discountPercent: number,
  taxPercent: number,
): number {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // BUG: discount is subtracted as a flat amount instead of a percentage
  const discounted = subtotal - discountPercent;
  const total = discounted * (1 + taxPercent / 100);

  return Math.round(total * 100) / 100;
}
