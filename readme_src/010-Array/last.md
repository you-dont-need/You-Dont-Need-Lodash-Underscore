### _.last

Returns the last element of an array. Passing n will return the last n elements of the array.

  ```js
  // Underscore/Lodash
  const numbers = [1, 2, 3, 4, 5];
  _.last(numbers);
  // => 5

  // Underscore
  _.last(numbers, 2);
  // => [4, 5]

  // Native
  const numbers = [1, 2, 3, 4, 5];
  numbers[numbers.length - 1];
  // => 5
  //or
  numbers.slice(-1)[0];
  // => 5
  //or
  [].concat(numbers).pop()
  // => 5

  // Native (works even with potentially undefined/null)
  [].concat(undefined).pop()
  // => undefined

  numbers.slice(-2);
  // => [4, 5]
  ```

#### Browser Support for `Array.prototype.concat()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  | 1.0 ✔  | 5.5 ✔  |  ✔  | ✔  |

**[⬆ back to top](#quick-links)**
