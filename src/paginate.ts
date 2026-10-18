/**
 * Returns a 1-based page of items from the list.
 * Page 1 should return the first `pageSize` items.
 */
export function paginate<T>(items: T[], page: number, pageSize: number): T[] {
  // BUG: uses 0-based page index while the API is documented as 1-based
  const start = page * pageSize;
  return items.slice(start, start + pageSize);
}
