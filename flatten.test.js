const flatten = require("./flatten");

describe("flatten", () => {
  test("flattens nested arrays", () => {
    expect(flatten([[1, 2, [3]], 4])).toEqual([1, 2, 3, 4]);
  });

  test("handles deeply nested arrays", () => {
    expect(flatten([1, [2, [3, [4, [5]]]]])).toEqual([
      1, 2, 3, 4, 5
    ]);
  });

  test("handles empty arrays", () => {
    expect(flatten([])).toEqual([]);
  });

  test("handles nested empty arrays", () => {
    expect(flatten([[], [[[]]]])).toEqual([]);
  });

  test("throws on invalid input", () => {
    expect(() => flatten("test")).toThrow(TypeError);
  });

  test("throws on non-integer values", () => {
    expect(() => flatten([1, "2"])).toThrow(TypeError);
  });
});
