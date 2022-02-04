### _.find

Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

  ```js
  // Underscore/Lodash
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]

  _.find(users, function (o) { return o.age < 40; })
  // output: object for 'barney'

  // Native
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]

  users.find(function (o) { return o.age < 40; })
  // output: object for 'barney'
  ```

#### Browser Support for `Array.prototype.find()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  45.0 ✔ | ✔ | 25.0 ✔ |  ✖  |  32.0 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**
