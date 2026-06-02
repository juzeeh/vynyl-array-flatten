function flatten(input) {
  if (!Array.isArray(input)) {
    throw new TypeError("Input must be an array");
  }

  const result = [];

  const traverse = (arr) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
        traverse(item);
      } else if (Number.isInteger(item)) {
        result.push(item);
      } else {
        throw new TypeError(
          `Expected integer or array, received ${typeof item}`
        );
      }
    }
  };

  traverse(input);
  return result;
}

module.exports = flatten;
