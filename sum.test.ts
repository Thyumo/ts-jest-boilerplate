import sum from "./sum";

describe("Sum tests", () => {
  test("Should return 10", () => {
    expect(sum(4, 6)).toBe(10);
  });
});
