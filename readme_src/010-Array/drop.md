### _.drop

Creates a slice of array with n elements dropped from the beginning.

  ```js
  // Underscore/Lodash
  _.drop([1, 2, 3]);
  // => [2, 3]

  _.drop([1, 2, 3], 2);
  // => [3]

  // Native
  [1, 2, 3].slice(1);
  // => [2, 3]

  [1, 2, 3].slice(2);
  // => [3]
  ```

<!-- caniuse: es5 -->
