import { describe, expect, it } from "vitest";
import { findTodos } from "./todos.js";

const todos = [
  { id: 1, title: "Buy Milk", done: false },
  { id: 2, title: "buy eggs", done: false },
  { id: 3, title: "Walk dog", done: true },
];

describe("findTodos", () => {
  it("returns an empty list when nothing matches", () => {
    expect(findTodos(todos, "xyz")).toEqual([]);
  });
});
