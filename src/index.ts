import { calculateTotal } from "./cart.js";
import { greet } from "./greeter.js";
import { findTodos } from "./todos.js";
import { average } from "./stats.js";
import { paginate } from "./paginate.js";

const items = [
  { name: "Notebook", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
];

console.log(greet("Demo"));
console.log("Cart total:", calculateTotal(items, 10, 8));
console.log(
  "Matching todos:",
  findTodos(
    [
      { id: 1, title: "Buy Milk", done: false },
      { id: 2, title: "buy eggs", done: false },
    ],
    "buy",
  ),
);
console.log("Average:", average([10, 20, 30]));
console.log("Page 1:", paginate(["a", "b", "c", "d"], 1, 2));
