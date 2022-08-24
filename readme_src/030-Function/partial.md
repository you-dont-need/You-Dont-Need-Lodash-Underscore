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

<!-- caniuse: rest-parameters -->
<!-- caniuse: es6 -->
