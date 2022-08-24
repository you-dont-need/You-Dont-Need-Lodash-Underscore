### _.difference
Similar to [without](#_without), but returns the values from array that are not present in the other arrays.

  ```js
  // Underscore/Lodash
  console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]))
  // output: [1, 3, 4]

  // Native
  var arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
  console.log(arrays.reduce(function(a, b) {
    return a.filter(function(value) {
      return !b.includes(value);
    });
  }));
  // output: [1, 3, 4]

  // ES6
  let arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
  console.log(arrays.reduce((a, b) => a.filter(c => !b.includes(c))));
  // output: [1, 3, 4]
  ```

<!-- caniuse: array-includes -->
<!-- caniuse: es5 -->
