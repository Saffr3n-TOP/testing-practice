const ALPHABET_LETTERS_AMT = 26;
const MIN_UPPERCASE_LETTER_CHARCODE = 65;
const MAX_UPPERCASE_LETTER_CHARCODE = 90;
const MIN_LOWERCASE_LETTER_CHARCODE = 97;
const MAX_LOWERCASE_LETTER_CHARCODE = 122;

function caesarCipher(string, shiftFactor) {
  checkValidity(string, shiftFactor);
  shiftFactor = normalizeShiftFactor(shiftFactor);

  const chars = string.split("");

  for (let i = 0; i < chars.length; i++) {
    if (!/[a-z]/i.test(chars[i])) continue;

    let charCode = chars[i].charCodeAt();
    const letterCase =
      charCode < MIN_LOWERCASE_LETTER_CHARCODE ? "upper" : "lower";

    charCode += shiftFactor;
    charCode = normalizeCharCode(charCode, letterCase);
    chars[i] = String.fromCharCode(charCode);
  }

  return chars.join("");
}

function checkValidity(string, shiftFactor) {
  if (typeof string !== "string") {
    throw new TypeError("First argument must be of type string");
  }

  if (typeof shiftFactor !== "number" && typeof shiftFactor !== "undefined") {
    throw new TypeError("Second argument must be of type number or undefined");
  }
}

function normalizeShiftFactor(factor) {
  if (!factor) return 1;

  if (factor > ALPHABET_LETTERS_AMT - 1) {
    return ALPHABET_LETTERS_AMT - 1;
  }

  if (factor < -(ALPHABET_LETTERS_AMT - 1)) {
    return -(ALPHABET_LETTERS_AMT - 1);
  }

  return factor;
}

function normalizeCharCode(code, letterCase) {
  if (letterCase === "upper") {
    if (code < MIN_UPPERCASE_LETTER_CHARCODE) {
      return code + ALPHABET_LETTERS_AMT;
    }

    if (code > MAX_UPPERCASE_LETTER_CHARCODE) {
      return code - ALPHABET_LETTERS_AMT;
    }
  }

  if (letterCase === "lower") {
    if (code < MIN_LOWERCASE_LETTER_CHARCODE) {
      return code + ALPHABET_LETTERS_AMT;
    }

    if (code > MAX_LOWERCASE_LETTER_CHARCODE) {
      return code - ALPHABET_LETTERS_AMT;
    }
  }

  return code;
}

module.exports = caesarCipher;
