const capitalize = require("./capitalize");

test("capitalizes a simple string", () => {
  expect(capitalize("test")).toBe("Test");
});

test.skip("capitalizes a multi-sentence string", () => {
  expect(
    capitalize("some other string. it has two sentences.").toBe(
      "Some other string. It has two sentences."
    )
  );
});

test.skip("trims and capitalizes a string", () => {
  expect(capitalize(" test ")).toBe("Test");
});

test.skip("throws an error if not a string provided", () => {
  expect(capitalize(1)).toThrow();
  expect(capitalize([])).toThrow();
  expect(capitalize({})).toThrow();
  expect(capitalize(null)).toThrow();
  expect(capitalize()).toThrow();
  expect(capitalize(true)).toThrow();
  expect(capitalize(() => {})).toThrow();
});
