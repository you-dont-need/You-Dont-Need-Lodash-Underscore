### _.intersection
Returns an array that is the intersection of all the arrays. Each value in the result is present in each of the arrays.

  ```js
  // Underscore/Lodash
  console.log(_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]))
  // output: [1, 2]

  // Native
  var arrays = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
  console.log(arrays.reduce(function(a, b) {
    return a.filter(function(value) {
      return b.includes(value);
    });
  }));
  // output: [1, 2]

  // ES6
  let arrays = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
  console.log(arrays.reduce((a, b) => a.filter(c => b.includes(c))));
  // output: [1, 2]
  ```

<!-- caniuse: es6 -->
