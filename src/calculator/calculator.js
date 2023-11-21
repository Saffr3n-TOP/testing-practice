function Calculator() {
  function add(x, y) {
    checkValidity(x, y);
    return x + y;
  }

  function subtract(x, y) {
    checkValidity(x, y);
    return x - y;
  }

  function multiply(x, y) {
    checkValidity(x, y);
    return x * y;
  }

  function divide(x, y) {
    checkValidity(x, y);
    return x / y;
  }

  function checkValidity(x, y) {
    if (typeof x === "number" && typeof y === "number") return;
    throw new TypeError("Both arguments must be of type number");
  }

  return { add, subtract, multiply, divide };
}

module.exports = Calculator;
