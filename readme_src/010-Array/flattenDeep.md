### _.flattenDeep

Recursively flattens array.

  ```js
  // Underscore/Lodash
  _.flattenDeep([1, [2, [3, [4]], 5]]);
  // => [1, 2, 3, 4, 5]

  // Native
  const flattenDeep = (arr) => Array.isArray(arr)
    ? arr.reduce( (a, b) => a.concat(flattenDeep(b)) , [])
    : [arr]

  flattenDeep([1, [[2], [3, [4]], 5]])
  // => [1, 2, 3, 4, 5]

  // Native(ES2019)
  [1, [2, [3, [4]], 5]].flat(Infinity)
  // => [1, 2, 3, 4, 5]

  const flattenDeep = (arr) => arr.flatMap((subArray, index) => Array.isArray(subArray) ? flattenDeep(subArray) : subArray)

  flattenDeep([1, [[2], [3, [4]], 5]])
  // => [1, 2, 3, 4, 5]
  ```

<!-- caniuse: es6 -->
<!-- caniuse: array-flat -->
