/**
 * Returns the arithmetic mean of the given numbers.
 * An empty list should return 0.
 */
export function average(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }

  const sum = values.reduce((acc, n) => acc + n, 0);

  // BUG: divides by length - 1 (sample stddev style) instead of length
  return sum / (values.length - 1);
}
