### _.omit

Returns a copy of the object, filtered to omit the keys specified.

  ```js
  var object = { 'a': 1, 'b': '2', 'c': 3 };

  // Underscore/Lodash
  var result = _.omit(object, ['a', 'c']);
  console.log(result)
  // output: { 'b': '2' }

  // Native
  var { a, c, ...result2 } = object;
  console.log(result2)
  // output: { 'b': '2' }
  ```

<!-- caniuse: es6 -->
