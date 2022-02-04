### _.head
Gets the first element or all but the first element.

  ```js
  const array = [1, 2, 3]

  // Underscore: _.first, _.head, _.take
  // Lodash: _.first, _.head
  _.head(array)
  // output: 1

  // Native
  const [ head, ...tail ] = array
  console.log(head)
  // output: 1
  ```

<!-- caniuse: es6 -->
