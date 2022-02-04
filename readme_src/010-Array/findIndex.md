### _.findIndex

Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

  ```js
  // Underscore/Lodash
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]

  var index = _.findIndex(users, function (o) { return o.age >= 40; })
  console.log(index)
  // output: 1

  // Native
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]

  var index = users.findIndex(function (o) { return o.age >= 40; })
  console.log(index)
  // output: 1
  ```

#### Browser Support for `Array.prototype.findIndex()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  45.0 ✔ | ✔ | 25.0 ✔ |  ✖  |  32.0 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**
