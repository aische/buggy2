import { describe, expect, it } from "vitest";
import { greet } from "../../src/greeter.js";

describe("greet", () => {
  it("reproduces issue 2: falls back to 'Hello, there!' for empty names", () => {
    expect(greet("")).toBe("Hello, there!");
  });
});
