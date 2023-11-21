const analyzeArray = require("./analyze-array");

test("returns correct object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("throws error with non array input", () => {
  expect(() => analyzeArray(1, 8, 3, 4, 2, 6)).toThrow();
  expect(() => analyzeArray(null)).toThrow();
  expect(() => analyzeArray()).toThrow();
});

test("throws error with non numeric array", () => {
  expect(() => analyzeArray(["a", "b"])).toThrow();
});

test("doesn't throw with empty array", () => {
  expect(() => analyzeArray([])).not.toThrow();
});

test("returns correct object with empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});
