### _.compact

Creates an array with all falsy values removed.

  ```js
  // Underscore/Lodash
  _.compact([0, 1, false, 2, '', 3]);

  // Native
  [0, 1, false, 2, '', 3].filter(Boolean)
  ```

<!-- caniuse: es6 -->