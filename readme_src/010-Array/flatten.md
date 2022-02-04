### _.flatten

Flattens array a single level deep.

  ```js
  // Underscore/Lodash
  _.flatten([1, [2, [3, [4]], 5]]);
  // => [1, 2, [3, [4]], 5]

  // Native
  const flatten = [1, [2, [3, [4]], 5]].reduce( (a, b) => a.concat(b), [])
  // => [1, 2, [3, [4]], 5]

  const flatten = [].concat(...[1, [2, [3, [4]], 5]])
  // => [1, 2, [3, [4]], 5]

  // Native(ES2019)
  const flatten = [1, [2, [3, [4]], 5]].flat()
  // => [1, 2, [3, [4]], 5]

  const flatten = [1, [2, [3, [4]], 5]].flatMap(number => number)
  // => [1, 2, [3, [4]], 5]
  ```

<!-- caniuse: es6 -->
<!-- caniuse: array-flat -->
