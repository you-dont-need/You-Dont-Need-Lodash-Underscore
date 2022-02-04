### _.pluck

  `array.map` or `_.map` can also be used to replace `_.pluck`. Lodash v4.0 removed `_.pluck` in favor of `_.map` with iteratee shorthand. Details can be found in [Changelog](https://github.com/lodash/lodash/wiki/Changelog)

  ```js
  // Underscore/Lodash
  var array1 = [{name: "Alice"}, {name: "Bob"}, {name: "Jeremy"}]
  var names = _.pluck(array1, "name")
  console.log(names)
  // output: ["Alice", "Bob", "Jeremy"]

  // Native
  var array1 = [{name: "Alice"}, {name: "Bob"}, {name: "Jeremy"}]
  var names = array1.map(function(x){
    return x.name
  })
  console.log(names)
  // output: ["Alice", "Bob", "Jeremy"]
  ```

#### Browser Support for `Array.prototype.map()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ | 1.5 ✔ |  9.0 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**
