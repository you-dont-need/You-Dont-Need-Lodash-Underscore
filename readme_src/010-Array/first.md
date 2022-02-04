### _.first

Returns the first element of an array. Passing n will return the first n elements of the array.

  ```js
  // Underscore/Lodash
  _.first([1, 2, 3, 4, 5]);
  // => 1

  // Underscore
  _.first([1, 2, 3, 4, 5], 2);
  // => [1, 2]

  // Native
  [1, 2, 3, 4, 5][0];
  // => 1
  //or
  [].concat(1, 2, 3, 4, 5).shift()
  // => 1
  //or
  [].concat([1, 2, 3, 4, 5]).shift()
  // => 1

  // Native (works even with potentially undefined/null, like _.first)
  [].concat(undefined).shift()
  // => undefined

  [1, 2, 3, 4, 5].slice(0, 2);
  // => [1, 2]
  ```

<!-- caniuse: es6 -->
