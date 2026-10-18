/**
 * Returns a friendly greeting. Empty / whitespace-only names should fall
 * back to "there" (e.g. "Hello, there!").
 */
export function greet(name: string): string {
  // BUG: empty string is treated as a valid name
  if (name === null || name === undefined) {
    return "Hello, there!";
  }

  return `Hello, ${name}!`;
}
