### _.isEmpty

Checks if value is an empty object or collection.

:heavy_exclamation_mark:`Note that the Native version does not support evaluating a Set or a Map`

  ```js
  // Lodash
  console.log(_.isEmpty(null))
  // output: true
  console.log(_.isEmpty(''))
  // output: true
  console.log(_.isEmpty({}))
  // output: true
  console.log(_.isEmpty([]))
  // output: true
  console.log(_.isEmpty({a: '1'}))
  // output: false

  // Native
  const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;

  console.log(isEmpty(null))
  // output: true
  console.log(isEmpty(''))
  // output: true
  console.log(isEmpty({}))
  // output: true
  console.log(isEmpty([]))
  // output: true
  console.log(isEmpty({a: '1'}))
  // output: false
  ```

<!-- caniuse: es6 -->
