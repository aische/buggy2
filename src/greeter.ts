/**
 * Returns a friendly greeting. Empty / whitespace-only names should fall
 * back to "there" (e.g. "Hello, there!").
 */
export function greet(name: string): string {
  if (!name || name.trim() === "") {
    return "Hello, there!";
  }

  return `Hello, ${name}!`;
}
