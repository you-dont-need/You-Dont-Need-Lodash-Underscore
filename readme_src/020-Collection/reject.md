### _.reject

The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.

  ```js
  // Underscore/Lodash
  var array = [1, 2, 3, 4, 5];
  var result = _.reject(array, function (x) {
    return x % 2 === 0;
  });
  // output: [1, 3, 5]

  // Native
  var array = [1, 2, 3, 4, 5];

  var reject = function (arr, predicate) {
    var complement = function (f) {
      return function (x) {
        return !f(x);
      }
    };

    return arr.filter(complement(predicate));
  };
  // output: [1, 3, 5]
  ```

<!-- caniuse: es6 -->
