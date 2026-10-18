import { describe, expect, it } from "vitest";
import { greet } from "./greeter.js";

describe("greet", () => {
  it("greets a normal name", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });
});
