export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

/**
 * Returns todos whose title contains the query (case-insensitive).
 */
export function findTodos(todos: Todo[], query: string): Todo[] {
  // BUG: search is case-sensitive
  return todos.filter((todo) => todo.title.includes(query));
}
