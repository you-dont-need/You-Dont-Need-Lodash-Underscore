### _.maxBy

Use Array#reduce for find the maximum or minimum collection item

  ```js
  // Underscore/Lodash
  var data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  var maxItem = _.maxBy(data, 'value')
  console.log(maxItem)
  // output: { value: 6 }

  // Native
  var data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  var maxItem = data.reduce(function(a, b) { return a.value >= b.value ? a : b }, {})
  console.log(maxItem)
  // output: { value: 6 }
  ```

Extract a functor and use es2015 for better code

  ```js
  // utils
  const makeSelect = (comparator) => (a, b) => comparator(a, b) ? a : b
  const maxByValue = makeSelect((a, b) => a.value >= b.value)

  // main logic
  const data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  const maxItem = data.reduce(maxByValue, {})

  console.log(maxItem)
  // output: { value: 6 }

  // or also more universal and little slower variant of minBy
  const maxBy = (collection, key) => {
    // slower because need to create a lambda function for each call...
    const select = (a, b) => a[key] >= b[key] ? a : b
    return collection.reduce(select, {})
  }

  console.log(maxBy(data, 'value'))
  // output: { value: 6 }
  ```

<!-- caniuse: es6 -->
