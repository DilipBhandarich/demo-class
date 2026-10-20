import sum from "./sum.js";

describe("testing sum fnx", () => {
  test("adds 2 + 2 ans 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("adds -5 + -5  ans 4", () => {
    expect(sum(-5, -5)).toBe(-10);
  });
});
