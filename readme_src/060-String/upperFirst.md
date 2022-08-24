### _.upperFirst
:heavy_exclamation_mark:`Not in Underscore.js`
Uppercases the first letter of a given string

  ```js
  // Lodash
  var result = _.upperFirst('george')
  console.log(result)
  // output: 'George'

  // Native
  const upperFirst = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
  }

  var result = upperFirst('george')
  console.log(result)
  // output: 'George'
  ```

<!-- caniuse: es5 -->
