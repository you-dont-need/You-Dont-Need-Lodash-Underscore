### _.tail

Gets the first element or all but the first element.

  ```js
  const array = [1, 2, 3]

  // Underscore: _.rest, _.tail, _.drop
  // Lodash: _.tail
  _.tail(array)
  // output: [2, 3]


  // Native
  const [ head, ...tail ] = array
  console.log(tail)
  // output [2, 3]
  ```

<!-- caniuse: es6 -->
