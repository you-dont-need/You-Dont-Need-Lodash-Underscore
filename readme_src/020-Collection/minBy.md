### _.minBy

Use Array#reduce for find the maximum or minimum collection item

  ```js
  // Underscore/Lodash
  var data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  var minItem = _.minBy(data, 'value')
  console.log(minItem)
  // output: { value: 2 }

  // Native
  var data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  var minItem = data.reduce(function(a, b) { return a.value <= b.value ? a : b }, {})
  console.log(minItem, maxItem)
  // output: { value: 2 }
  ```

Extract a functor and use es2015 for better code

  ```js
  // utils
  const makeSelect = (comparator) => (a, b) => comparator(a, b) ? a : b
  const minByValue = makeSelect((a, b) => a.value <= b.value)

  // main logic
  const data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  const minItem = data.reduce(minByValue, {})

  console.log(minItem, maxItem)
  // output: { value: 2 }

  // or also more universal and little slower variant of minBy
  const minBy = (collection, key) => {
    // slower because need to create a lambda function for each call...
    const select = (a, b) => a[key] <= b[key] ? a : b
    return collection.reduce(select, {})
  }

  console.log(minBy(data, 'value'))
  // output: { value: 2 }
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**
