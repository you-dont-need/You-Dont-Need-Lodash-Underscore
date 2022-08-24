### _.endsWith
:heavy_exclamation_mark:`Not in Underscore.js`
Checks if string ends with the given target string.

  ```js
  // Lodash
  _.endsWith('abc', 'c');
  // => true

  _.endsWith('abc', 'b');
  // => false

  _.endsWith('abc', 'b', 2);
  // => true

  // Native
  'abc'.endsWith('c');
  // => true

  'abc'.endsWith('b');
  // => false

  'abc'.endsWith('b', 2);
  // => true
  ```

<!-- caniuse: es6 -->
