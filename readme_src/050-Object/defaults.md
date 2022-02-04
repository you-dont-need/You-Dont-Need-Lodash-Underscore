### _.defaults

The method is used to apply new values over an object with default values for keys.

  ```js
  // Underscore: _.defaults
  // Lodash
  const newValues = {a: 3};
  const defaultValues = {a: 1, b: 2}
  const appliedValues = _.defaults(newValues, defaultValues);
  console.log(appliedValues)
  // output { a: 3, b: 2 }

  // Native
  const newValues = {a: 3};
  const defaultValues = {a: 1, b: 2}
  const appliedValues = Object.assign({}, defaultValues, newValues);
  // output { a: 3, b: 2 }
  ```

<!-- caniuse: es6 -->
