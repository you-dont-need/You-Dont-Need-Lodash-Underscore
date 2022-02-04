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
![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ |  ✔ |  ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**
