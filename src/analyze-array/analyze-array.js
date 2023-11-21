function analyzeArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError();

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") throw new TypeError();
  }

  const obj = {
    average: null,
    min: null,
    max: null,
    length: arr.length,
  };

  if (!arr.length) return obj;

  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.average = Math.floor((obj.min + obj.max) / 2);

  return obj;
}

module.exports = analyzeArray;
