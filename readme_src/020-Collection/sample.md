### _.sample

Gets a random element from `array`.

  ```js
  // Underscore/Lodash
  const array = [0, 1, 2, 3, 4]
  const result = _.sample(array)
  console.log(result)
  // output: 2

  // Native
  const array = [0, 1, 2, 3, 4]
  const sample = arr => {
    const len = arr == null ? 0 : arr.length
    return len ? arr[Math.floor(Math.random() * len)] : undefined
  }

  const result = sample(array)
  console.log(result)
  // output: 2
  ```

<!-- caniuse: es5 -->
