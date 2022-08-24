### _.each

Iterates over a list of elements, yielding each in turn to an iteratee function.

  ```js
  // Underscore/Lodash
  //For arrays
  _.each([1, 2, 3], function (value, index) {
    console.log(value)
  })
  // output: 1 2 3

  //For objects
  _.each({'one':1, 'two':2, 'three':3}, function(value) {
    console.log(value)
  })
  // output: 1 2 3

  // Native
  //For arrays
  [1, 2, 3].forEach(function (value, index) {
    console.log(value)
  })
  // output: 1 2 3

  //For objects
  Object.entries({'one':1, 'two':2, 'three':3}).forEach(function([key,value],index) {
    console.log(value)
  })
  //output: 1 2 3
  ```

<!-- caniuse: es6 -->
