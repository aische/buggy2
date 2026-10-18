import { describe, expect, it } from "vitest";
import { average } from "./stats.js";

describe("average", () => {
  it("returns 0 for an empty list", () => {
    expect(average([])).toBe(0);
  });
});
