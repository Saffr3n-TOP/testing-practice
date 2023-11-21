const Calculator = require("./calculator");

describe("calculator object", () => {
  const calc = Calculator();

  test("add method returns sum of two numbers", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("subtract method returns difference of two numbers", () => {
    expect(calc.subtract(0, 8)).toBe(-8);
  });

  test("multiply method returns product of two numbers", () => {
    expect(calc.multiply(8, 3)).toBe(24);
  });

  test("divide method returns quotient of two numbers", () => {
    expect(calc.divide(25, 10)).toBe(2.5);
  });

  test("every method throws an error with non numeric input", () => {
    expect(() => calc.add("1", 5)).toThrow();
    expect(() => calc.add([], "7")).toThrow();
    expect(() => calc.add({}, 4)).toThrow();
    expect(() => calc.add(null)).toThrow();
    expect(() => calc.add()).toThrow();
    expect(() => calc.add(true, undefined)).toThrow();
    expect(() => calc.add((x, y) => {})).toThrow();

    expect(() => calc.subtract("1", 5)).toThrow();
    expect(() => calc.subtract([], "7")).toThrow();
    expect(() => calc.subtract({}, 4)).toThrow();
    expect(() => calc.subtract(null)).toThrow();
    expect(() => calc.subtract()).toThrow();
    expect(() => calc.subtract(true, undefined)).toThrow();
    expect(() => calc.subtract((x, y) => {})).toThrow();

    expect(() => calc.multiply("1", 5)).toThrow();
    expect(() => calc.multiply([], "7")).toThrow();
    expect(() => calc.multiply({}, 4)).toThrow();
    expect(() => calc.multiply(null)).toThrow();
    expect(() => calc.multiply()).toThrow();
    expect(() => calc.multiply(true, undefined)).toThrow();
    expect(() => calc.multiply((x, y) => {})).toThrow();

    expect(() => calc.divide("1", 5)).toThrow();
    expect(() => calc.divide([], "7")).toThrow();
    expect(() => calc.divide({}, 4)).toThrow();
    expect(() => calc.divide(null)).toThrow();
    expect(() => calc.divide()).toThrow();
    expect(() => calc.divide(true, undefined)).toThrow();
    expect(() => calc.divide((x, y) => {})).toThrow();
  });
});
