### _.replace
returns a new string with some or all matches of a `pattern` replaced by a `replacement`

  ```js
  // Lodash
  var re = /apples/gi;
  var str = 'Apples are round, and apples are juicy.';
  var newstr = _.replace(str, re, 'oranges');
  console.log(newstr);
  // output: 'oranges are round, and oranges are juicy.'

  // Native
  var re = /apples/gi;
  var str = 'Apples are round, and apples are juicy.';
  var result = str.replace(re, 'oranges');
  console.log(result);
  // output: 'oranges are round, and oranges are juicy.'
  ```

<!-- caniuse: es5 -->
