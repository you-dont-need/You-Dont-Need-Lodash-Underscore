### _.partial
Create a new function that calls _func_ with _args_.

  ```js
  // Lodash
  function greet(greeting, name) {
    return greeting + ' ' + name;
  }
  var sayHelloTo = _.partial(greet, 'Hello');
  var result = sayHelloTo('Jose')
  console.log(result)
  // output: 'Hello Jose'

  // Native
  function greet(greeting, name) {
    return greeting + ' ' + name;
  }
  var sayHelloTo = (...args) => greet('Hello', ...args)
  var result = sayHelloTo('Jose')
  console.log(result)
  // output: 'Hello Jose'

  // Native
  const partial = (func, ...boundArgs) => (...remainingArgs) => func(...boundArgs, ...remainingArgs)
  var sayHelloTo = partial(greet, 'Hello');
  var result = sayHelloTo('Jose')
  console.log(result)
  // output: 'Hello Jose'
  ```

#### Browser Support for Spread

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  46.0 ✔ | 12.0 ✔ | 16.0 ✔ |  ✖  |  37.0 ✔ |  8.0 ✔ |

**[⬆ back to top](#quick-links)**

