const reverseString = require("./reverse-string");

test("reverses a string", () => {
  expect(reverseString("abcd efgh")).toBe("hgfe dcba");
});

test("throws an error with non string input", () => {
  expect(() => capitalize(1)).toThrow();
  expect(() => capitalize([])).toThrow();
  expect(() => capitalize({})).toThrow();
  expect(() => capitalize(null)).toThrow();
  expect(() => capitalize()).toThrow();
  expect(() => capitalize(true)).toThrow();
  expect(() => capitalize(() => {})).toThrow();
});
