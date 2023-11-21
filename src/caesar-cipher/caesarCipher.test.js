const caesarCipher = require("./caesarCipher");

test("shifts characters 1 position forward if no shift factor provided", () => {
  expect(caesarCipher("test")).toBe("uftu");
});

test("shifts characters forward for amount of positions provided as second argument", () => {
  expect(caesarCipher("test", 3)).toBe("whvw");
});

test("shifts correctly from z to a", () => {
  expect(caesarCipher("z")).toBe("a");
});

test("shifts correctly from a to z", () => {
  expect(caesarCipher("a", -1)).toBe("z");
});

test("only shifts alphabetical characters", () => {
  expect(caesarCipher("a! b.")).toBe("b! c.");
});

test("preserves letter case", () => {
  expect(caesarCipher("a")).toBe("b");
  expect(caesarCipher("A")).toBe("B");
});

test("throws an error with invalid args", () => {
  expect(() => caesarCipher(5)).toThrow();
  expect(() => caesarCipher("test", null)).toThrow();
  expect(() => caesarCipher("test", undefined)).not.toThrow();
});
