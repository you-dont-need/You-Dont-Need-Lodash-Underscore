### _.takeRight

Creates a slice of array with n elements taken from the end.
:heavy_exclamation_mark: Native slice does not behave entirely the same as the `Lodash` method. See example below to understand why.

  ```js
  // Underscore/Lodash
  _.takeRight([1, 2, 3]);
  // => [3]

  _.takeRight([1, 2, 3], 2);
  // => [2, 3]

  _.takeRight([1, 2, 3], 5);
  // => [1, 2, 3]

  // Native
  [1, 2, 3].slice(-1);
  // => [3]

  [1, 2, 3].slice(-2);
  // => [2, 3]

  [1, 2, 3].slice(-5);
  // => [1, 2, 3]

  // Difference in compatibility

  // Lodash
  _.takeRight([1, 2, 3], 0);
  // => []

  // Native
  [1, 2, 3].slice(0);
  // => [1, 2, 3]
  ```

<!-- caniuse: es6 -->
