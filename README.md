# [You don't (may not) need Lodash/Underscore](https://you-dont-need.github.io/You-Dont-Need-Lodash-Underscore/#/) 
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/you-dont-need/lodash-underscore)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cht8687/You-Dont-Need-Lodash-Underscore)

Lodash and Underscore are great modern JavaScript utility libraries, and they are widely used by Front-end developers. However, when you are targeting modern browsers, you may find out that there are many methods which are already supported natively thanks to ECMAScript5 [ES5] and ECMAScript2015 [ES6]. If you want your project to require fewer dependencies, and you know your target browser clearly, then you may not need Lodash/Underscore.

You are welcome to contribute with more items provided below.

* If you are targeting legacy JavaScript engine with those ES5 methods, you can use [es5-shim](https://github.com/es-shims/es5-shim)

* Please note that, the examples used below are just showing you the native alternative of performing certain tasks. For some of the functions, Lodash provides you more options than native built-ins. This list is not a 1:1 comparison.

* Please send a PR if you want to add or modify the code. No need to open an issue unless it's something big and you want to discuss.


## Voice of Developers

> [Make use of native JavaScript object and array utilities before going big.](https://twitter.com/codylindley/status/692356631007342593)

> &mdash;<cite>Cody Lindley, Author of [jQuery Cookbook](http://shop.oreilly.com/product/9780596159788.do) and [JavaScript Enlightenment](http://shop.oreilly.com/product/0636920027713.do)</cite>

<!-- -->
> [You probably don't need Lodash. Nice List of JavaScript methods which you can use natively.](https://twitter.com/daniellmb/status/692200768556916740)

> &mdash;<cite>Daniel Lamb, Computer Scientist, Technical Reviewer of [Secrets of the JavaScript Ninja](https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition) and [Functional Programming in JavaScript](https://www.manning.com/books/functional-programming-in-javascript)</cite>

<!-- -->
> [I guess not, but I want it.](https://twitter.com/teropa/status/692280179666898944)

> &mdash;<cite>Tero Parviainen, Author of [build-your-own-angular](http://teropa.info/build-your-own-angular)</cite>

<!-- -->
> [I'll admit, I've been guilty of overusing #lodash. Excellent resource.](https://twitter.com/therebelrobot/status/692907269512642561)

> &mdash;<cite>@therebelrobot, Maker of web things, Facilitator for Node.js/io.js</cite>


## ESLint Plugin

<p align="center">
  <a href="https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore">
    <img src="https://img.shields.io/npm/v/eslint-plugin-you-dont-need-lodash-underscore.svg?style=flat-square"
      alt="NPM Version">
  </a>
  <a href="https://www.npmjs.org/package/eslint-plugin-you-dont-need-lodash-underscore">
    <img src="http://img.shields.io/npm/dm/eslint-plugin-you-dont-need-lodash-underscore.svg?style=flat-square"
      alt="Downloads">
  </a>
  <a href="https://travis-ci.org/you-dont-need/You-Dont-Need-Lodash-Underscore">
    <img src="https://img.shields.io/travis/you-dont-need/You-Dont-Need-Lodash-Underscore/master.svg?style=flat-square"
      alt="Build Status">
  </a>
  <a href="https://coveralls.io/github/you-dont-need/You-Dont-Need-Lodash-Underscore?branch=master">
    <img src="https://img.shields.io/coveralls/you-dont-need/You-Dont-Need-Lodash-Underscore/master.svg?style=flat-square"
      alt="Coverage Status" />
  </a>
  <a href="https://david-dm.org/you-dont-need/You-Dont-Need-Lodash-Underscore">
    <img src="https://img.shields.io/david/you-dont-need/You-Dont-Need-Lodash-Underscore.svg?style=flat-square"
         alt="Dependency Status">
  </a>
</p>

If you're using [ESLint](http://eslint.org/), you can install a
[plugin](http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin) that
will help you identify places in your codebase where you don't (may not) need Lodash/Underscore.

Install the plugin...

```sh
npm install --save-dev eslint-plugin-you-dont-need-lodash-underscore
```

...then update your config

```js
"extends" : ["plugin:you-dont-need-lodash-underscore/compatible"],
```

For more information, see [Configuring the ESLint Plugin](configuring.md)

*:heavy_exclamation_mark:<b>Important:</b> Note that, while many Lodash methods are null safe (e.g. _.keys, _.entries),
this is not necessarily the case for their Native equivalent. If null safety is critical for your application, we 
suggest that you take extra precautions [e.g. consider using the native Object.keys as Object.keys(value || {})].*


## Quick Links

**[Array](#array)**

1. [_.chunk](#_chunk)
1. [_.compact](#_compact)
1. [_.concat](#_concat)
1. [_.difference](#_difference)
1. [_.drop](#_drop)
1. [_.dropRight](#_dropRight)
1. [_.fill](#_fill)
1. [_.find](#_find)
1. [_.findIndex](#_findindex)
1. [_.first](#_first)
1. [_.flatten](#_flatten)
1. [_.flattenDeep](#_flattendeep)
1. [_.fromPairs](#_frompairs)
1. [_.head and _.tail](#_head-and-_tail)
1. [_.indexOf](#_indexof)
1. [_.intersection](#_intersection)
1. [_.isArray](#_isarray)
1. [_.isArrayBuffer](#_isarraybuffer)
1. [_.join](#_join)
1. [_.last](#_last)
1. [_.lastIndexOf](#_lastindexof)
1. [_.reverse](#_reverse)
1. [_.slice](#_slice)
1. [_.without](#_without)
1. [_.initial](#_initial)
1. [_.pull](#_pull)

**[Collection*](#collection*)**

*:heavy_exclamation_mark:<b>Important:</b> Note that most native equivalents are array methods,
and will not work with objects. If this functionality is needed and no object method is provided,
then Lodash/Underscore might be the better option. Bear in mind however, that all iterable
objects can easily be converted to an array by use of the
[spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).*

1. [_.each](#_each)
1. [_.every](#_every)
1. [_.filter](#_filter)
1. [_.groupBy](#_groupby)
1. [_.includes](#_includes)
1. [_.keyBy](#_keyBy)
1. [_.map](#_map)
1. [_.minBy and _.maxBy](#_minby-and-_maxby)
1. [_.orderBy](#_sortby-and-_orderby)
1. [_.pluck](#_pluck)
1. [_.range](#_range)
1. [_.reduce](#_reduce)
1. [_.reduceRight](#_reduceright)
1. [_.reject](#_reject)
1. [_.size](#_size)
1. [_.some](#_some)
1. [_.sortBy](#_sortby-and-_orderby)
1. [_.uniq](#_uniq)

**[Function](#function)**

1. [_.after](#_after)
1. [_.bind](#_bind)
1. [_.debounce](#_debounce)
1. [_.isFunction](#_isFunction)
1. [_.partial](#_partial)
1. [_.throttle](#_throttle)

**[Lang](#lang)**

1. [_.castArray](#_castarray)
1. [_.gt](#_gt)
1. [_.gte](#_gte)
1. [_.isEmpty](#_isempty)
1. [_.isFinite](#_isfinite)
1. [_.isInteger](#_isInteger)
1. [_.isNaN](#_isnan)
1. [_.isNil](#_isnil)
1. [_.isNull](#_isnull)
1. [_.isUndefined](#_isundefined)

**[Object](#object)**

1. [_.assign](#_assign)
1. [_.extend](#_extend)
1. [_.has](#_has)
1. [_.get](#_get)
1. [_.keys](#_keys)
1. [_.omit](#_omit)
1. [_.pick](#_pick)
1. [_.pickBy](#_pickby)
1. [_.toPairs](#_topairs)
1. [_.values](#_values)

**[String](#string)**

1. [_.endsWith](#_endsWith)
1. [_.isString](#_isString)
1. [_.padStart and _.padEnd](#_padstart-and-_padend)
1. [_.repeat](#_repeat)
1. [_.replace](#_replace)
1. [_.split](#_split)
1. [_.startsWith](#_startsWith)
1. [_.template](#_template)
1. [_.toLower](#_tolower)
1. [_.toUpper](#_toupper)
1. [_.trim](#_trim)
1. [_.upperFirst](#_upperFirst)

**[Util](#string)**

1. [_.times](#_times)

**[Number](#number)**

1. [_.clamp](#_clamp)
2. [_.inRange](#_inRange)
3. [_.random](#_random)

## Array

### _.chunk

Creates an array of elements split into groups the length of size.
```js
// Underscore/Lodash
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]


// Native

const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

```

#### Browser Support for Spread in array literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
   46.0 ✔  | 12.0 ✔ | 16.0 ✔ |  ✖ |  37.0 ✔ |  8.0 ✔  |

**[⬆ back to top](#quick-links)**

### _.compact

Creates an array with all falsy values removed.

  ```js
  // Underscore/Lodash
  _.compact([0, 1, false, 2, '', 3]);

  // Native
  [0, 1, false, 2, '', 3].filter(Boolean)
  ```

#### Browser Support for `array.prototype.filter`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
   ✔  |  ✔ |  1.5 ✔ |  9.0 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.concat

Creates a new array concatenating array with any additional arrays and/or values.

  ```js
  // Underscore/Lodash
  var array = [1]
  var other = _.concat(array, 2, [3], [[4]])

  console.log(other)
  // output: [1, 2, 3, [4]]

  // Native
  var array = [1]
  var other = array.concat(2, [3], [[4]])

  console.log(other)
  // output: [1, 2, 3, [4]]
  ```

#### Browser Support for `Array.prototype.concat()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
1.0  ✔  | ✔  |  1.0 ✔ |  5.5 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.difference
Similar to [without](#_without), but returns the values from array that are not present in the other arrays.

  ```js
  // Underscore/Lodash
  console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]))
  // output: [1, 3, 4]

  // Native
  var arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
  console.log(arrays.reduce(function(a, b) {
    return a.filter(function(value) {
      return !b.includes(value);
    });
  }));
  // output: [1, 3, 4]

  // ES6
  let arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
  console.log(arrays.reduce((a, b) => a.filter(c => !b.includes(c))));
  // output: [1, 3, 4]
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
   ✔  |  ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.drop

Creates a slice of array with n elements dropped from the beginning.

  ```js
  // Underscore/Lodash
  _.drop([1, 2, 3]);
  // => [2, 3]

  _.drop([1, 2, 3], 2);
  // => [3]

  // Native
  [1, 2, 3].slice(1);
  // => [2, 3]
  
  [1, 2, 3].slice(2);
  // => [3]
  ```

#### Browser Support for `Array.prototype.slice()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  |  1.0 ✔  |  ✔  |  ✔  | ✔  |

**[⬆ back to top](#quick-links)**

### _.dropRight

Creates a slice of array with n elements dropped at the end.

  ```js
  // Underscore/Lodash
  _.dropRight([1, 2, 3]);
  // => [1, 2]

  _.dropRight([1, 2, 3], 2);
  // => [1]

  // Native
  [1, 2, 3].slice(0, -1);
  // => [1, 2]

  [1, 2, 3].slice(0, -2);
  // => [1]
  ```

#### Browser Support for `Array.prototype.slice()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  |  1.0 ✔  |  ✔  |  ✔  | ✔  |

**[⬆ back to top](#quick-links)**

### _.fill

Fills elements of array with value from start up to, but not including, end.
*Note that `fill` is a mutable method in both native and Lodash/Underscore.*

  ```js
  // Underscore/Lodash
  var array = [1, 2, 3]

  _.fill(array, 'a')

  console.log(array)
  // output: ['a', 'a', 'a']

  _.fill(Array(3), 2)
  // output: [2, 2, 2]

  _.fill([4, 6, 8, 10], '*', 1, 3)
  // output: [4, '*', '*', 10]

  // Native
  var array = [1, 2, 3]

  array.fill('a')

  console.log(array)
  // output: ['a', 'a', 'a']

  Array(3).fill(2)
  // output: [2, 2, 2]

  [4, 6, 8, 10].fill('*', 1, 3)
  // output: [4, '*', '*', 10]
  ```

#### Browser Support for `Array.prototype.fill()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  45.0 ✔ | ✔  | 31.0 ✔ |  ✖  |  32.0 ✔ |  8 ✔ |

**[⬆ back to top](#quick-links)**

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

### _.first

Returns the first element of an array. Passing n will return the first n elements of the array.

  ```js
  // Underscore/Lodash
  _.first([1, 2, 3, 4, 5]);
  // => 1

  // Underscore
  _.first([1, 2, 3, 4, 5], 2);
  // => [1, 2]

  // Native
  [1, 2, 3, 4, 5][0];
  // => 1
  //or
  [].concat(1, 2, 3, 4, 5).shift()
  // => 1
  //or
  [].concat([1, 2, 3, 4, 5]).shift()
  // => 1

  // Native (works even with potentially undefined/null, like _.first)
  [].concat(undefined).shift()
  // => undefined

  [1, 2, 3, 4, 5].slice(0, 2);
  // => [1, 2]
  ```

#### Browser Support for `Array.prototype.slice()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  |  1.0 ✔  |  ✔  |  ✔  | ✔  |

**[⬆ back to top](#quick-links)**

### _.flatten

Flattens array a single level deep.

  ```js
  // Underscore/Lodash
  _.flatten([1, [2, [3, [4]], 5]]);
  // => [1, 2, [3, [4]], 5]

  // Native
  const flatten = [1, [2, [3, [4]], 5]].reduce( (a, b) => a.concat(b), [])
  // => [1, 2, [3, [4]], 5]
  
  const flatten = [].concat(...[1, [2, [3, [4]], 5]])
  // => [1, 2, [3, [4]], 5]

  // Native(ES2019)
  const flatten = [1, [2, [3, [4]], 5]].flat()
  // => [1, 2, [3, [4]], 5]

  const flatten = [1, [2, [3, [4]], 5]].flatMap(number => number)
  // => [1, 2, [3, [4]], 5]
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |  :-: |
  46.0 ✔ |  ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4 ✔ |

#### Browser Support for `Array.prototype.flat()`


![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
69 ✔ | ✖ | 62 ✔ | ✖ | 56 ✔ | 12 ✔ |

#### Browser Support for `Array.prototype.flatMap()`


![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
69 ✔ | ✖ | 62 ✔ | ✖ | 56 ✔ | 12 ✔ |

**[⬆ back to top](#quick-links)**

### _.flattenDeep

Recursively flattens array.

  ```js
  // Underscore/Lodash
  _.flattenDeep([1, [2, [3, [4]], 5]]);
  // => [1, 2, 3, 4, 5]

  // Native
  const flattenDeep = (arr) => Array.isArray(arr)
    ? arr.reduce( (a, b) => a.concat(flattenDeep(b)) , [])
    : [arr]

  flattenDeep([1, [[2], [3, [4]], 5]])
  // => [1, 2, 3, 4, 5]
  
  // Native(ES2019)
  [1, [2, [3, [4]], 5]].flat(Infinity)
  // => [1, 2, 3, 4, 5]
  
  const flattenDeep = (arr) => arr.flatMap((subArray, index) => Array.isArray(subArray) ? flattenDeep(subArray) : subArray)

  flattenDeep([1, [[2], [3, [4]], 5]])
  // => [1, 2, 3, 4, 5]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  46.0 ✔ |  ✔ | 16.0 ✔ |  ✖  |  37.0 ✔ |  7.1 ✔ |


#### Browser Support for `Array.prototype.flat()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
69 ✔ | ✖ | 62 ✔ | ✖ | 56 ✔ | 12 ✔ |


#### Browser Support for `Array.prototype.flatMap()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
69 ✔ | ✖ | 62 ✔ | ✖ | 56 ✔ | 12 ✔ |


**[⬆ back to top](#quick-links)**

### _.fromPairs

Returns an object composed from key-value pairs.

  ```js
  // Underscore/Lodash
  _.fromPairs([['a', 1], ['b', 2]]);
  // => { 'a': 1, 'b': 2 }

  // Native
  const fromPairs = function(arr) {
    return arr.reduce(function(accumulator, value) {
      accumulator[value[0]] = value[1];
      return accumulator;
    }, {})
  }

  // Compact form
  const fromPairs = (arr) => arr.reduce((acc, val) => (acc[val[0]] = val[1], acc), {})

  fromPairs([['a', 1], ['b', 2]]);
  // => { 'a': 1, 'b': 2 }

  // Native(ES2019)
  Object.fromEntries([['a', 1], ['b', 2]])
  // => { 'a': 1, 'b': 2 }
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

#### Browser Support for `Object.fromEntries()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  73.0 ✔  | 79.0 ✔ | 63.0 ✔ |  ✖  |  60 ✔ |  12.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.head and _.tail
Gets the first element or all but the first element.

  ```js
  const array = [1, 2, 3]

  // Underscore: _.first, _.head, _.take
  // Lodash: _.first, _.head
  _.head(array)
  // output: 1

  // Underscore: _.rest, _.tail, _.drop
  // Lodash: _.tail
  _.tail(array)
  // output: [2, 3]


  // Native
  const [ head, ...tail ] = array
  console.log(head)
  // output: 1
  console.log(tail)
  // output [2, 3]
  ```

#### Browser Support for Spread in array literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  46.0 ✔  | 12.0 ✔ |  16.0 ✔ |  ✖ |  37.0 ✔ | 8.0 ✔  |

**[⬆ back to top](#quick-links)**

### _.indexOf

Returns the first index at which a given element can be found in the array, or -1 if it is not present.

  ```js
  // Underscore/Lodash
  var array = [2, 9, 9]
  var result = _.indexOf(array, 2)
  console.log(result)
  // output: 0

  // Native
  var array = [2, 9, 9]
  var result = array.indexOf(2)
  console.log(result)
  // output: 0
  ```

#### Browser Support for `Array.prototype.indexOf()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔  |  1.5 ✔ |  9.0 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.intersection
Returns an array that is the intersection of all the arrays. Each value in the result is present in each of the arrays.

  ```js
  // Underscore/Lodash
  console.log(_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]))
  // output: [1, 2]

  // Native
  var arrays = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
  console.log(arrays.reduce(function(a, b) {
    return a.filter(function(value) {
      return b.includes(value);
    });
  }));
  // output: [1, 2]

  // ES6
  let arrays = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
  console.log(arrays.reduce((a, b) => a.filter(c => b.includes(c))));
  // output: [1, 2]
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.takeRight

Creates a slice of array with n elements taken from the end. 
:heavy_exclamation_mark: Native slice does not behave entirely the same as the `Lodash` method. See example below to understand why.

  ```js
  // Underscore/Lodash
  _.takeRight([1, 2, 3]);
  // => [3]
  
  _.takeRight([1, 2, 3], 2);
  // => [2, 3]
  
  _.takeRight([1, 2, 3], 5);
  // => [1, 2, 3]

  // Native
  [1, 2, 3].slice(-1);
  // => [3]
  
  [1, 2, 3].slice(-2);
  // => [2, 3]

  [1, 2, 3].slice(-5);
  // => [1, 2, 3]

  // Difference in compatibility
  
  // Lodash
  _.takeRight([1, 2, 3], 0);
  // => []

  // Native
  [1, 2, 3].slice(0);
  // => [1, 2, 3]
  ```

#### Browser Support for `Array.prototype.slice()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  |  1.0 ✔  |  ✔  |  ✔  | ✔  |

**[⬆ back to top](#quick-links)**

### _.isArray
Returns true if given value is an array.

  ```js
  // Lodash
  var array = []
  console.log(_.isArray(array))
  // output: true

  // Native
  var array = []
  console.log(Array.isArray(array));
  // output: true
  ```

  #### Browser Support for `Array.isArray()`

 ![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
  5.0 ✔  |  ✔  | 4.0 ✔  |  9.0 ✔  |  10.5 ✔  | 5.0 ✔  |

**[⬆ back to top](#quick-links)**

### _.isArrayBuffer

Checks if value is classified as an ArrayBuffer object.

  ```js
  // Lodash
  _.isArrayBuffer(new ArrayBuffer(2));
  // output: true

  // Native
  console.log(new ArrayBuffer(2) instanceof ArrayBuffer);
  // output: true
  ```

  #### Browser Support for `instanceof`

 ![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔  | 1.0 ✔  | ✔  | ✔  | ✔  |

**[⬆ back to top](#quick-links)**

### _.join
:heavy_exclamation_mark:`Not in Underscore.js`
Joins a list of elements in an array with a given separator.

  ```js
  // Lodash
  var result = _.join(['one', 'two', 'three'], '--')
  console.log(result)
  // output: 'one--two--three'

  // Native
  var result = ['one', 'two', 'three'].join('--')
  console.log(result)
  // output: 'one--two--three'
  ```

#### Browser Support for `Array.prototype.join()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |   ✔  | 1.0 ✔ |  5.5 ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

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

### _.lastIndexOf

Returns the index of the last occurrence of value in the array, or -1 if value is not present.

  ```js
  // Underscore/Lodash
  var array = [2, 9, 9, 4, 3, 6]
  var result = _.lastIndexOf(array, 9)
  console.log(result)
  // output: 2

  // Native
  var array = [2, 9, 9, 4, 3, 6]
  var result = array.lastIndexOf(9)
  console.log(result)
  // output: 2
  ```

#### Browser Support for `Array.prototype.lastIndexOf()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ | 1.5 ✔  | 9.0 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.reverse
:heavy_exclamation_mark:`Not in Underscore.js`
Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

  ```js
  // Lodash
  var array = [1, 2, 3]
  console.log(_.reverse(array))
  // output: [3, 2, 1]

  // Native
  var array = [1, 2, 3]
  console.log(array.reverse())
  // output: [3, 2, 1]
  ```

Voice from the Lodash author:

>Lodash's `_.reverse` just calls `Array#reverse` and enables composition like `_.map(arrays, _.reverse).`
It's exposed on _ because previously, like `Underscore`, it was only exposed in the chaining syntax.
>--- [jdalton](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore/commit/22c4bcf2be48dd415d2b073759805562e520b615#)

#### Browser Support for `Array.prototype.reverse()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.slice
Returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (`end` not included)

  ```js
  // Lodash
  var array = [1, 2, 3, 4]
  console.log(_.slice(array, 1, 3))
  // output: [2, 3]

  // Native
  var array = [1, 2, 3, 4]
  console.log(array.slice(1, 3));
  // output: [2, 3]
  ```

#### Browser Support for `Array.prototype.slice()`

 ![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  |  1.0 ✔  |  ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.without
:heavy_exclamation_mark:`Not in Underscore.js`
Returns an array where matching items are filtered.

  ```js
  // Lodash
  var array = [1, 2, 3]
  console.log(_.without(array, 2))
  // output: [1, 3]

  // Native
  var array = [1, 2, 3]
  console.log(array.filter(function(value) {
    return value !== 2;
  }));
  // output: [1, 3]
  ```

#### Browser Support for `Array.prototype.filter()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  | ✔ | 1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.initial

Returns everything but the last entry of the array. Pass n to exclude the last n elements from the result.

  ```js
  // Underscore
  var array = [5, 4, 3, 2, 1]
  console.log(_.initial(array, 2))
  // output: [5, 4, 3]

  // Native
  var array = [5, 4, 3, 2, 1]
  console.log(array.slice(0, -2););
  // output: [5, 4, 3]
  ```

#### Browser Support for `Array.prototype.slice()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  ✔  |  1.0 ✔  |  ✔  |  ✔  | ✔  |

**[⬆ back to top](#quick-links)**

### _.pull

Removes all provided values from the given array using strict equality for comparisons, i.e. ===.

  ```js
  // Lodash
  var array = [1, 2, 3, 1, 2, 3];
  _.pull(array, 2, 3);
  console.log(array)
  // output: [1, 1]
  
  // Native
  var array = [1, 2, 3, 1, 2, 3];
  function pull(arr, ...removeList){
      var removeSet = new Set(removeList) 
      return arr.filter(function(el){
          return !removeSet.has(el)
      })
  }
  console.log(pull(array, 2, 3))
  // output: [1, 1]
  ```

#### Browser Support for `Array.prototype.filter()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  | ✔ | 1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

#### Browser Support for `Set.prototype.has()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
38 ✔ | 12 ✔ | 13 ✔ | 11 ✔ | 25 ✔ | 8 ✔ |

**[⬆ back to top](#quick-links)**

## Collection*

*:heavy_exclamation_mark:<b>Important:</b> Note that most native equivalents are array methods,
and will not work with objects. If this functionality is needed and no object method is provided,
then Lodash/Underscore is the better option.*

### _.each

Iterates over a list of elements, yielding each in turn to an iteratee function.

  ```js
  // Underscore/Lodash
  //For arrays
  _.each([1, 2, 3], function (value, index) {
    console.log(value)
  })
  // output: 1 2 3

  //For objects
  _.each({'one':1, 'two':2, 'three':3}, function(value) {
    console.log(value)
  })
  // output: 1 2 3

  // Native
  //For arrays
  [1, 2, 3].forEach(function (value, index) {
    console.log(value)
  })
  // output: 1 2 3

  //For objects
  Object.entries({'one':1, 'two':2, 'three':3}).forEach(function([key,value],index) {
    console.log(value)
  })
  //output: 1 2 3
  ```

#### Browser Support for `Array.prototype.forEach()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  9.0 ✔  |  ✔  |  ✔  |

#### Browser Support for `Object.entries().forEach()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  54 ✔  | 14 ✔ | 47 ✔ |  ✖  |  41 ✔  |  10.1✔  |

**[⬆ back to top](#quick-links)**

### _.every

Tests whether all elements in the array pass the test implemented by the provided function.

  ```js
  // Underscore/Lodash
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }
  var array = [10, 20, 30]
  var result = _.every(array, isLargerThanTen)
  console.log(result)
  // output: true

  // Native
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }

  var array = [10, 20, 30]
  var result = array.every(isLargerThanTen)
  console.log(result)
  // output: true
  ```

#### Browser Support fpr `Array.prototype.every()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  9.0 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.filter

Creates a new array with all elements that pass the test implemented by the provided function.

  ```js
  // Underscore/Lodash
  function isBigEnough (value) {
    return value >= 10
  }
  var array = [12, 5, 8, 130, 44]
  var filtered = _.filter(array, isBigEnough)
  console.log(filtered)
  // output: [12, 130, 44]

  // Native
  function isBigEnough (value) {
    return value >= 10
  }
  var array = [12, 5, 8, 130, 44]
  var filtered = array.filter(isBigEnough)
  console.log(filtered)
  // output: [12, 130, 44]
  ```

#### Browser Support for `Array.prototype.filter()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  9 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.groupBy

Group items by key.

  ```js
  // Underscore/Lodash
  var grouped = _.groupBy(['one', 'two', 'three'], 'length')
  console.log(grouped)
  // output: {3: ["one", "two"], 5: ["three"]}

  // Native
  var grouped = ['one', 'two', 'three'].reduce((r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r), {})
  console.log(grouped)
  // output: {3: ["one", "two"], 5: ["three"]}
  ```

  ```js
  // Underscore/Lodash
  var grouped = _.groupBy([1.3, 2.1, 2.4], num => Math.floor(num))
  console.log(grouped)
  // output: {1: [1.3], 2: [2.1, 2.4]}

  // Native
  var grouped = [1.3, 2.1, 2.4].reduce((r, v, i, a, k = Math.floor(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
  console.log(grouped)
  // output: {1: [1.3], 2: [2.1, 2.4]}
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔  | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.includes

Checks if a value is in collection.

  ```js
  var array = [1, 2, 3]
  // Underscore/Lodash - also called _.contains
  _.includes(array, 1)
  // output: true

  // Native
  var array = [1, 2, 3]
  array.includes(1)
  // output: true

  // Native (does not use same value zero)
  var array = [1, 2, 3]
  array.indexOf(1) > -1
  // output: true
  ```

#### Browser Support for `Array.prototype.includes`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  47.0 ✔  | 14.0 ✔ | 43.0 ✔ |  ✖  |  34.0 ✔ |  9.0 ✔ |

#### Browser Support for `Array.prototype.indexOf`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔ | ✔ | 1.5 ✔ | 9.0 ✔ | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.keyBy
:heavy_exclamation_mark: `Not in Underscore.js`
Creates an object composed of keys generated from the results of running each element of collection through iteratee.

  ```js
  // Lodash
  console.log(_.keyBy(['a', 'b', 'c']))
  // output: { a: 'a', b: 'b', c: 'c' }
  console.log(_.keyBy([{ id: 'a1', title: 'abc' }, { id: 'b2', title: 'def' }], 'id')
  // output: { a1: { id: 'a1', title: 'abc' }, b2: { id: 'b2', title: 'def' } }
  console.log(_.keyBy({ data: { id: 'a1', title: 'abc' }}, 'id')
  // output: { a1: { id: 'a1', title: 'abc' }}

  // keyBy for array only
  const keyBy = (array, key) => (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {});

  // Native
  console.log(keyBy(['a', 'b', 'c']))
  // output: { a: 'a', b: 'b', c: 'c' }
  console.log(keyBy([{ id: 'a1', title: 'abc' }, { id: 'b2', title: 'def' }], 'id')
  // output: { a1: { id: 'a1', title: 'abc' }, b2: { id: 'b2', title: 'def' } }
  console.log(keyBy(Object.values({ data: { id: 'a1', title: 'abc' }}), 'id')
  // output: { a1: { id: 'a1', title: 'abc' }}

  // keyBy for array and object
  const collectionKeyBy = (collection, key) => { 
    const c = collection || {};
    return c.isArray() ? keyBy(c, key) : Object.values(keyBy(c, key));
  }
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | 12.0 ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.map

Translates all items in an array or object to new array of items.

  ```js
  // Underscore/Lodash
  var array1 = [1, 2, 3]
  var array2 = _.map(array1, function (value, index) {
    return value * 2
  })
  console.log(array2)
  // output: [2, 4, 6]

  // Native
  var array1 = [1, 2, 3]
  var array2 = array1.map(function (value, index) {
    return value * 2
  })
  console.log(array2)
  // output: [2, 4, 6]
  ```

#### Browser Support for `Array.prototype.map()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  9.0 ✔  |  ✔ |  ✔ |

**[⬆ back to top](#quick-links)**

### _.minBy and _.maxBy

Use Array#reduce for find the maximum or minimum collection item

  ```js
  // Underscore/Lodash
  var data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  var minItem = _.minBy(data, 'value')
  var maxItem = _.maxBy(data, 'value')
  console.log(minItem, maxItem)
  // output: { value: 2 } { value: 6 }

  // Native
  var data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  var minItem = data.reduce(function(a, b) { return a.value <= b.value ? a : b }, {})
  var maxItem = data.reduce(function(a, b) { return a.value >= b.value ? a : b }, {})
  console.log(minItem, maxItem)
  // output: { value: 2 }, { value: 6 }
  ```

Extract a functor and use es2015 for better code

  ```js
  // utils
  const makeSelect = (comparator) => (a, b) => comparator(a, b) ? a : b
  const minByValue = makeSelect((a, b) => a.value <= b.value)
  const maxByValue = makeSelect((a, b) => a.value >= b.value)

  // main logic
  const data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  const minItem = data.reduce(minByValue, {})
  const maxItem = data.reduce(maxByValue, {})

  console.log(minItem, maxItem)
  // output: { value: 2 }, { value: 6 }

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

### _.reduce

Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

  ```js
  // Underscore/Lodash
  var array = [0, 1, 2, 3, 4]
  var result = _.reduce(array, function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue
  })
  console.log(result)
  // output: 10

  // Native
  var array = [0, 1, 2, 3, 4]
  var result = array.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue
  })
  console.log(result)
  // output: 10
  ```

#### Browser Support for `Array.prototype.reduce()`

![Chrome][chrome-image] | ![Edge][edge-image] |  ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.range

Creates an array of numbers progressing from start up to.

  ```js
  // Underscore/Lodash
  _.range(4)  // output: [0, 1, 2, 3]
  _.range(-4) // output: [0, -1, -2, -3]
  _.range(1, 5)     // output: [1, 2, 3, 4]
  _.range(0, 20, 5) // output: [0, 5, 10, 15]

  // Native ( solution with Array.from )
  Array.from({length: 4}, (_, i) => i)  // output: [0, 1, 2, 3]
  Array.from({length: 4}, (_, i) => -i) // output: [-0, -1, -2, -3]
  Array.from({length: 4}, (_, i) => i + 1) // output: [1, 2, 3, 4]
  Array.from({length: 4}, (_, i) => i * 5) // output: [0, 5, 10, 15]

  // Native ( solution with keys() and spread )
  [...Array(4).keys()]  // output: [0, 1, 2, 3]
  [...Array(4).keys()].map(k => -k) // output: [-0, -1, -2, -3]
  [...Array(4).keys()].map(k => k + 1)  // output: [1, 2, 3, 4]
  [...Array(4).keys()].map(k => k * 5)  // output: [0, 5, 10, 15]
  ```


#### Browser Support for `Array.from()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
 45.0 ✔  |  ✔ |  32.0 ✔ |  ✖   |  ✔ |  9.0 ✔ |

#### Browser Support for keys and spread in Array literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
 46.0 ✔  |  12.0 ✔ |  16.0 ✔ |  ✖ | 37.0 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.reduceRight

This method is like _.reduce except that it iterates over elements of collection from right to left.

  ```js
  // Underscore/Lodash
  var array = [0, 1, 2, 3, 4]
  var result = _.reduceRight(array, function (previousValue, currentValue, currentIndex, array) {
    return previousValue - currentValue
  })
  console.log(result)
  // output: -2

  // Native
  var array = [0, 1, 2, 3, 4]
  var result = array.reduceRight(function (previousValue, currentValue, currentIndex, array) {
    return previousValue - currentValue
  })
  console.log(result)
  // output: -2
  ```

#### Browser Support for `Array.prototype.reduceRight()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.reject

The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.

  ```js
  // Underscore/Lodash
  var array = [1, 2, 3, 4, 5];
  var result = _.reject(array, function (x) {
    return x % 2 === 0;
  });
  // output: [1, 3, 5]

  // Native
  var array = [1, 2, 3, 4, 5];
  
  var reject = function (arr, predicate) {
    var complement = function (f) {
      return function (x) {
        return !f(x);
      }
    };

    return arr.filter(complement(predicate));
  };
  // output: [1, 3, 5]
  ```

#### Browser Support for `Array.prototype.filter()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | 12 ✔ | 1.5 ✔ |  9.0 ✔  |  9.5 ✔ |  3.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.sample

Gets a random element from `array`.

  ```js
  // Underscore/Lodash
  const array = [0, 1, 2, 3, 4]
  const result = _.sample(array)
  console.log(result)
  // output: 2

  // Native
  const array = [0, 1, 2, 3, 4]
  const sample = arr => {
    const len = arr == null ? 0 : arr.length
    return len ? arr[Math.floor(Math.random() * len)] : undefined
  }

  const result = sample(array)
  console.log(result)
  // output: 2
  ```

#### Browser Support for `Array.prototype.length()` and `Math.random()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.0 ✔ |  ✔  |  ✔ |  ✔ |

**[⬆ back to top](#quick-links)**

### _.size

Returns the number of values in the collection.

  ```js
  // Underscore/Lodash
  var result = _.size({one: 1, two: 2, three: 3})
  console.log(result)
  // output: 3

  // Native
  var result2 = Object.keys({one: 1, two: 2, three: 3}).length
  console.log(result2)
  // output: 3
  ```

#### Browser Support for `Object.keys()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  5.0 ✔  | ✔ | 4.0 ✔ |  9.0 ✔ |  12.0 ✔ |  5.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.some

Tests whether any of the elements in the array pass the test implemented by the provided function.

  ```js
  // Underscore/Lodash
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }
  var array = [10, 9, 8]
  var result = _.some(array, isLargerThanTen)
  console.log(result)
  // output: true

  // Native
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }

  var array = [10, 9, 8]
  var result = array.some(isLargerThanTen)
  console.log(result)
  // output: true
  ```

#### Browser Support for `Array.prototype.some()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.5 ✔ |  ✔ 9.0  |  ✔  | ✔  |

**[⬆ back to top](#quick-links)**

### _.sortBy and _.orderBy

Sorts an array of object based on an object key provided by a parameter (note this is more limited than Underscore/Lodash).

  ```js
  const fruits = [
    {name:"banana", amount: 2},
    {name:"apple", amount: 4},
    {name:"pineapple", amount: 2},
    {name:"mango", amount: 1}
  ];

  // Underscore
  _.sortBy(fruits, 'name');
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]

  // Lodash
  _.orderBy(fruits, ['name'],['asc']);
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]

  // Native
  const sortBy = (key) => {
    return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
  };

  // The native sort modifies the array in place. `_.orderBy` and `_.sortBy` do not, so we use `.concat()` to
  // copy the array, then sort.
  fruits.concat().sort(sortBy("name"));
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]
  ```

#### Browser Support for `Array.prototype.concat()` and `Array.prototype.sort()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  1.0 ✔  | ✔ | 1.0 ✔ |  5.5 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.uniq

Produces a duplicate-free version of the array, using === to test object equality.

  ```js
  // Underscore/Lodash
  var array = [1, 2, 1, 4, 1, 3]
  var result = _.uniq(array)
  console.log(result)
  // output: [1, 2, 4, 3]

  // Native
  var array = [1, 2, 1, 4, 1, 3];
  var result = [...new Set(array)];
  console.log(result)
  // output: [1, 2, 4, 3]
  ```

#### Browser Support for Spread in array literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
 46.0  ✔  | 12.0 ✔ | 16.0 ✔ |  ✖  |  37.0 ✔  |  8.0 ✔  |

**[⬆ back to top](#quick-links)**

## Function

### _.after
:heavy_exclamation_mark:`Note this is an alternative implementation`
Creates a version of the function that will only be run after first being called count times. Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding.

  ```js
  var notes = ['profile', 'settings']
  // Underscore/Lodash
  var renderNotes = _.after(notes.length, render)
  notes.forEach(function (note) {
    console.log(note)
    renderNotes()
  })

  // Native
  notes.forEach(function (note, index) {
    console.log(note)
    if (notes.length === (index + 1)) {
      render()
    }
  })
  ```

#### Browser Support for `Array.prototype.forEach()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
   ✔  |  ✔ |  1.5 ✔ |  9.0 ✔ |  ✔  | ✔  |

 **[⬆ back to top](#quick-links)**

### _.bind
Create a new function that calls _func_ with _thisArg_ and _args_.

  ```js
  var objA = {
    x: 66,
    offsetX: function(offset) {
      return this.x + offset;
    }
  }

  var objB = {
    x: 67
  };

  // Underscore/Lodash
  var boundOffsetX = _.bind(objA.offsetX, objB, 0);

  // Native
  var boundOffsetX = objA.offsetX.bind(objB, 0);
  ```

#### Browser Support for `Function.prototype.bind()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
  7.0 ✔  |  ✔ | 4.0 ✔ |  9.0 ✔ |  11.6 ✔ |  5.1 ✔  |

 **[⬆ back to top](#quick-links)**
 
### _.isFunction

Checks if value is classified as a _Function_ object.

```js
// Lodash
_.isFunction(console.log);
// => true

_.isFunction(/abc/);
// => false

// Native
function isFunction(func) {
  if (func && typeof func === "function") {
    return true
  }
  return false
}

isFunction(setTimeout);
// => true

isFunction(123);
// => false
```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
 ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

 **[⬆ back to top](#quick-links)**
 
### _.debounce

Create a new function that calls _func_ with _thisArg_ and _args_.

  ```js
 function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
}

// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', debounce(calculateLayout, 150));

  ```
#### Browser Support for `debounce`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
  7.0 ✔  |  ✔ | 4.0 ✔ |  9.0 ✔ |  11.6 ✔ |  5.1 ✔  |

 **[⬆ back to top](#quick-links)**
 

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


### _.throttle
Create a new function that limits calls to _func_ to once every given timeframe.

  ```js
  function throttle(func, timeFrame) {
    var lastTime = 0;
    return function (...args) {
        var now = new Date();
        if (now - lastTime >= timeFrame) {
            func(...args);
            lastTime = now;
        }
    };
  }

  // Avoid running the same function twice within the specified timeframe.
  jQuery(window).on('resize', throttle(calculateLayout, 150));

  ```
#### Browser Support for `throttle`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
  5.0 ✔  |  12.0 ✔ | 3.0 ✔ |  9.0 ✔ |  10.5 ✔ |  4.0 ✔  |

 **[⬆ back to top](#quick-links)**
 

## Lang

### _.castArray

Puts the value into an array of length one if it is not already an array.

```js
// Underscore
console.log(_.castArray(5))
// output: [5]
console.log(_.castArray([2]))
// output: [2]

// Native
function castArray(arr) {
  return Array.isArray(arr) ? arr : [arr]
}
// output: true
console.log(castArray(5));
// output: [5]
console.log(castArray([2]));
// output: [2]
```

#### Browser Support for `Array.isArray()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
5.0 ✔  |  ✔  | 4.0 ✔  |  9.0 ✔  |  10.5 ✔  | 5.0 ✔  |

**[⬆ back to top](#quick-links)**

### _.gt

Checks if value is greater than other.

```js
// Lodash
console.log(_.gt(3, 1))
// output: true

// Native
console.log(3 > 1);
// output: true
```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.gte

Checks if value is greater than or equal to other.

```js
// Lodash
console.log(_.gte(3, 1))
// output: true

// Native
console.log(3 >= 1);
// output: true
```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.isEmpty

Checks if value is an empty object or collection.

:heavy_exclamation_mark:`Note that the Native version does not support evaluating a Set or a Map`

  ```js
  // Lodash
  console.log(_.isEmpty(null)
  // output: true
  console.log(_.isEmpty('')
  // output: true
  console.log(_.isEmpty({})
  // output: true
  console.log(_.isEmpty([])
  // output: true
  console.log(_.isEmpty({a: '1'})
  // output: false

  // Native
  const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;

  console.log(isEmpty(null)
  // output: true
  console.log(isEmpty('')
  // output: true
  console.log(isEmpty({})
  // output: true
  console.log(isEmpty([])
  // output: true
  console.log(isEmpty({a: '1'})
  // output: false
  ```

#### Browser Support for `Array.prototype.includes()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
   47.0 ✔  | 14.0 ✔ | 43.0 ✔ |  ✖ |  34.0 ✔ |  9.0 ✔  |

**[⬆ back to top](#quick-links)**


### _.isFinite

Checks if value is a finite primitive number.

  ```js
  // Lodash
  console.log(_.isFinite('3'))
  // output: false
  console.log(_.isFinite(3))
  // output: true

  // Native
  console.log(Number.isFinite('3'))
  // output: false
  console.log(Number.isFinite(3))
  // output: true
  ```
#### Browser Support for `Number.isFinite()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  19.0 ✔  |  ✔ | 16.0 ✔ |  ✖  |  15.0 ✔ |  9.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.isInteger

Checks if value is an integer.

  ```js
  // Lodash
  console.log(_.isInteger(3))
  // output: true
  console.log(_.isInteger('3'))
  // output: false

  // Native
  console.log(Number.isInteger(3))
  // output: true
  console.log(Number.isInteger('3'))
  // output: false
  ```
#### Browser Support for `Number.isInteger()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  12 ✔ | 16.0 ✔ |  ✖  |  ✔ |  ✔ |

**[⬆ back to top](#quick-links)**

### _.isNaN

Checks if a value is NaN.

  ```js
  // Underscore/Lodash
  console.log(_.isNaN(NaN))
  // output: true

  // Native
  console.log(isNaN(NaN))
  // output: true

  // ES6
  console.log(Number.isNaN(NaN))
  // output: true
  ```
MDN:
>In comparison to the global `isNaN()` function, `Number.isNaN()` doesn't suffer the problem of forcefully converting the parameter to a number. This means it is now safe to pass values that would normally convert to `NaN`, but aren't actually the same value as `NaN`. This also means that only values of the type number, that are also `NaN`, return true. [Number.isNaN()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)

Voice from the Lodash author:

>Lodash's `_.isNaN` is equiv to ES6 `Number.isNaN` which is different than the global `isNaN`.
>--- [jdalton](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore/commit/b8559a603dccaaa2449b5a68a2d8325cf1fb29cd#)

#### Browser Support for `isNaN`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ |  1.0 ✔ |  ✔ |  ✔ |  ✔  |

#### Browser Support for `Number.isNaN`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  25.0 ✔ | ✔ |  15.0 ✔ |  ✖ |  ✔ |  9.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.isNil
:heavy_exclamation_mark:`Not in Underscore.js`
Checks if value is null or undefined.

```js
// Lodash
console.log(_.isNil(null))
// output: true
console.log(_.isNil(NaN))
// output: false
console.log(_.isNil(undefined))
// output: true

// Native
console.log(null == null);
// output: true
console.log(NaN == null);
// output: false
console.log(undefined == null)
// output: true
```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ | ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.isNull

Checks if value is null or undefined.

```js
// Underscore/Lodash
console.log(_.isNull(null))
// output: true
console.log(_.isNull(void 0))
// output: false

// Native
console.log(null === null);
// output: true
console.log(void 0 === null);
// output: false
```

#### Browser Support

![Chrome][chrome-image] |  ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ | ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.isUndefined

Checks if value is undefined.

```js
// Underscore/Lodash
console.log(_.isUndefined(a))
// output: true

// Native
console.log(typeof a === 'undefined');
// output: true
console.log(a === undefined);
// output: true
```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1 ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

## Object

### _.assign

The method is used to copy the values of all enumerable own properties from one or more source objects to a target object.

  ```js
  // Underscore: _.extendOwn
  // Lodash
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = _.assign(new Foo, new Bar);
  console.log(result);
  // output: { 'c': 3, 'e': 5 }

  // Native
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = Object.assign({}, new Foo, new Bar);
  console.log(result);
  // output: { 'c': 3, 'e': 5 }
  ```

#### Browser Support for `Object.assign()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  45.0 ✔  | ✔ | 34.0 ✔ |  ✖  |  32.0 ✔ |  9.0 ✔  |

 **[⬆ back to top](#quick-links)**

### _.extend

The method is used to copy the values of all enumerable own and inherited properties from one or more source objects to a target object.

  ```js
  // Underscore
  // Lodash: _.assignIn
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = _.extend({}, new Foo, new Bar);
  console.log(result);
  // output: { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }

  // Native
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = Object.assign({}, new Foo, Foo.prototype, new Bar, Bar.prototype);
  console.log(result);
  // output: { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }

  //Or using a function
  const extend = (target, ...sources) => {
   const length = sources.length;

    if (length < 1 || target == null) return target;
    for (let i = 0; i < length; i++) {
      const source = sources[i];

      for (const key in source) {
        target[key] = source[key];
      }
    }
    return target;
  };
  console.log(extend({}, new Foo, new Bar));
  // output: { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }
  ```

#### Browser Support for `Object.assign()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  45.0 ✔  | ✔ | 34.0 ✔ |  ✖  |  32.0 ✔ |  9.0 ✔  |

 **[⬆ back to top](#quick-links)**

 ### _.has

Checks if `key` is a direct property of `object`. Key may be a path of a value separated by `.`

  ```js
  // Lodash
  var object = { a: 1, b: 'settings', c: { d: 'test' } };
    
  var hasA = _.has(object, 'a');
  var hasCWhichHasD = _.has(object, 'c.d')

  console.log(hasA);
  // output: true
  console.log(hasCWhichHasD);
  // output: true

  // Native
  const has = function (obj, key) {
    var keyParts = key.split('.');

    return !!obj && (
      keyParts.length > 1
        ? has(obj[key.split('.')[0]], keyParts.slice(1).join('.'))
        : hasOwnProperty.call(obj, key)
    );
  };
  
  var object = { a: 1, b: 'settings' };
  var result = has(object, 'a'); 
  // output: true
  ```

#### Browser Support for Object .hasOwnProperty

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | 12 ✔ |  ✔ |  5.5 ✔ |  5 ✔ |  3 ✔ |

  **[⬆ back to top](#quick-links)**


 ### _.get

Gets the value at path of object.
*Note: If provided path does not exists inside the object js will generate error.*

  ```js
  // Lodash
  var object = { a: [{ b: { c: 3 } }] };
  var result = _.get(object, 'a[0].b.c', 1);
  console.log(result);
  // output: 3

  // Native (ES6 - IE not supported)
  var object = { a: [{ b: { c: 3 } }] };
  var { a: [{ b: { c: result = 1 } = {} } = {}] = [] } = object;
  console.log(result);
  // output: 3

  // Native (ES11)
  var object = { a: [{ b: { c: 3 } }] };
  var result = object?.a?.[0]?.b?.c ?? 1;
  console.log(result);
  // output: 3
  
  // Native
  const get = (obj, path, defaultValue = undefined) => {
    const travel = regexp =>
      String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
  };
  
  var object = { a: [{ b: { c: 3 } }] };
  var result = get(object, 'a[0].b.c', 1); 
  // output: 3
  
  ```

#### Browser Support for Object destructing

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  49.0 ✔  | 14.0 ✔ |  41.0 ✔ |  ✖  |  41.0 ✔ |  8.0 ✔ |

#### Browser Support for optional chaining `?.`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  80.0 ✔  | 80.0 ✔ |  74.0 ✔ |  ✖  |  67.0 ✔ |  13.1 ✔ |

#### Browser Support for nullish coalescing operator `??`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  80.0 ✔  | 80.0 ✔ |  72.0 ✔ |  ✖  |  ✖ |  13.1 ✔ |

  **[⬆ back to top](#quick-links)**

### _.keys

Retrieves all the names of the object's own enumerable properties.

  ```js
  // Underscore/Lodash
  var result = _.keys({one: 1, two: 2, three: 3})
  console.log(result)
  // output: ["one", "two", "three"]

  // Native
  var result2 = Object.keys({one: 1, two: 2, three: 3})
  console.log(result2)
  // output: ["one", "two", "three"]
  ```

#### Browser Support for `Object.keys()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |  :-: |
  5.0 ✔  | ✔ | 4.0 ✔ |  9.0 ✔ |  12.0 ✔ |  5.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.omit

Returns a copy of the object, filtered to omit the keys specified.

  ```js
  var object = { 'a': 1, 'b': '2', 'c': 3 };

  // Underscore/Lodash
  var result = _.omit(object, ['a', 'c']);
  console.log(result)
  // output: { 'b': '2' }

  // Native
  var { a, c, ...result2 } = object;
  console.log(result2)
  // output: { 'b': '2' }
  ```

#### Browser Support for Spread in object literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  60.0 ✔ | ✖ | 55.0 ✔ |  ✖ |  37.0 ✔ | ✖ |

**[⬆ back to top](#quick-links)**

### _.pick

Creates an object composed of the object properties predicate returns truthy for.

  ```js
  var object = { 'a': 1, 'b': '2', 'c': 3 };

  // Underscore/Lodash
  var result = _.pick(object, ['a', 'c']);
  console.log(result)
  // output: {a: 1, c: 3}

  // Native
  const { a, c } = object;
  const result = { a, c};
  console.log(result);
  // output: {a: 1, c: 3}
  // for an array of this object --> array.map(({a, c}) => ({a, c}));

  // Native
  function pick(object, keys) {
    return keys.reduce((obj, key) => {
       if (object && object.hasOwnProperty(key)) {
          obj[key] = object[key];
       }
       return obj;
     }, {});
  }
  var result = pick(object, ['a', 'c']);
  console.log(result)
  // output: {a: 1, c: 3}
  ```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  38.0 ✔ | ✔ | 13.0 ✔ |  12.0 ✔  |  25.0 ✔ | 7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.pickBy

Creates an object composed of the object properties predicate returns truthy for.

  ```js
  var object = { 'a': 1, 'b': null, 'c': 3, 'd': false, 'e': undefined };

  // Underscore/Lodash
  var result = _.pickBy(object);
  console.log(result)
  // output: {a: 1, c: 3}

  // Native
  function pickBy(object) {
      const obj = {};
      for (const key in object) {
          if (object[key]) {
              obj[key] = object[key];
          }
      }
      return obj;
  } 
  var result = pickBy(object);
  console.log(result)
  // output: {a: 1, c: 3}
  ```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |  :-: |
  ✔  | ✔ |  ✔ | 6.0 ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.toPairs

Retrieves all the given object's own enumerable property `[ key, value ]` pairs.

  ```js
  // Underscore - also called _.pairs
  // Lodash - also called _.entries
  var result = _.toPairs({one: 1, two: 2, three: 3})
  console.log(result)
  // output: [["one", 1], ["two", 2], ["three", 3]]

  // Native
  var result2 = Object.entries({one: 1, two: 2, three: 3})
  console.log(result2)
  // output: [["one", 1], ["two", 2], ["three", 3]]
  ```

#### Browser Support for `Object.entries()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  54.0 ✔  | 14.0 ✔  | 47.0 ✔ |  ✖  |  41.0 ✔ |  10.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.values

Retrieves all the given object's own enumerable property values.

  ```js
  // Underscore/Lodash
  var result = _.values({one: 1, two: 2, three: 3})
  console.log(result)
  // output: [1, 2, 3]

  // Native
  var result2 = Object.values({one: 1, two: 2, three: 3})
  console.log(result2)
  // output: [1, 2, 3]
  ```

#### Browser Support for `Object.values()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  54.0 ✔  | 14.0 ✔ |  47.0 ✔ |  ✖  |  41.0 ✔ |  10.1 ✔ |

**[⬆ back to top](#quick-links)**

## String

### _.endsWith
:heavy_exclamation_mark:`Not in Underscore.js`
Checks if string ends with the given target string.

  ```js
  // Lodash
  _.endsWith('abc', 'c');
  // => true
 
  _.endsWith('abc', 'b');
  // => false
  
  _.endsWith('abc', 'b', 2);
  // => true

  // Native
  'abc'.endsWith('c');
  // => true
 
  'abc'.endsWith('b');
  // => false
  
  'abc'.endsWith('b', 2);
  // => true
  ```

#### Browser Support for `String.prototype.endsWith()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  41.0 ✔  |  ✔ | 17.0 ✔ |  ✖  |  28.0 ✔ |  9.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.isString

Checks if value is classified as a String primitive or object.

  ```js
  // Lodash
  _.isString('abc');
  // => true
 
  _.isString(123);
  // => false

  // Native
  function isString(str){
    if (str && typeof str.valueOf() === "string") {
      return true
    }
    return false
  }
 
  isString('abc');
  // => true
 
  isString(123);
  // => false
  ```

#### Browser Support

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
 ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.padStart and _.padEnd
:heavy_exclamation_mark:`Not in Underscore.js`
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

  ```js
  // Lodash
  console.log(_.padStart('123', 5, '0'))
  // output: '00123'

  console.log(_.padEnd('123', 5, '0'))
  // output: '12300'

  // Native
  console.log('123'.padStart(5, '0'))
  // output: '00123'

  console.log('123'.padEnd(5, '0'))
  // output: '12300'
  ```

#### Browser Support for `String.prototype.padStart()` and `String.prototype.padEnd()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  57.0 ✔  |  15.0 ✔ | 48.0 ✔ |  ✖  |  44.0 ✔ |  10.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.startsWith
:heavy_exclamation_mark:`Not in Underscore.js`
Checks if string starts with the given target string.

  ```js
  // Lodash
  var result = _.startsWith('abc', 'b', 1)
  console.log(result)
  // output: true

  // Native
  var result = 'abc'.startsWith('b', 1)
  console.log(result)
  // output: true
  ```

#### Browser Support for `String.prototype.startsWith()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  41.0 ✔  |  ✔ | 17.0 ✔ |  ✖  |  28.0 ✔ |  9.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.repeat
:heavy_exclamation_mark:`Not in Underscore.js`
Repeats the given string n times.

  ```js
  // Lodash
  var result = _.repeat('abc', 2)
  console.log(result)
  // output: 'abcabc'

  // Native
  var result = 'abc'.repeat(2)
  console.log(result)
  // output: 'abcabc'
  ```

#### Browser Support for `String.prototype.repeat()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  41.0 ✔  | ✔ | 24.0 ✔ |  ✖  |  28.0 ✔ |  9.0 ✔ |

**[⬆ back to top](#quick-links)**

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

#### Browser Support for `String.prototype.replace()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ | 1.0 ✔ |  ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**
  
### _.split
:heavy_exclamation_mark:`Not in Underscore.js`
Splits string by separator.

  ```js
  // Lodash
  var result = _.split('a-b-c', '-', 2)
    console.log(result)
  // output: ['a','b']

  // Native
  var result = 'a-b-c'.split('-', 2)
  console.log(result)
  // output: ['a','b']
  ```

#### Browser Support for `String.prototype.split()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ |  1.0 ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.template
:heavy_exclamation_mark: *Note this is an alternative implementation. Native template literals not escape html.*

Create a template function.

  ```js
  // Lodash/Underscore
  const compiled = _.template('hello <%= user %>!');
  var result = compiled({ 'user': 'fred' });
  console.log(result);
  // output: 'hello fred'

  // Native
  const templateLiteral = (value) => `hello ${value.user}`;
  var result = templateLiteral({ 'user': 'fred' });
  console.log(result);
  // output: 'hello fred'
  ```

#### Browser Support for String (template) literals

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  41.0 ✔  | 12.0 ✔ | 34.0 ✔ |  ✖  |  28.0 ✔ |  9.0 ✔  |

**[⬆ back to top](#quick-links)**

### _.toLower
:heavy_exclamation_mark:`Not in Underscore.js`
Lowercases a given string.

  ```js
  // Lodash
  var result = _.toLower('FOOBAR')
  console.log(result)
  // output: 'foobar'

  // Native
  var result = 'FOOBAR'.toLowerCase()
  console.log(result)
  // output: 'foobar'
  ```

#### Browser Support for `String.prototype.toLowerCase()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ | 1.0 ✔ |  ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.toUpper
:heavy_exclamation_mark:`Not in Underscore.js`
Uppercases a given string.

  ```js
  // Lodash
  var result = _.toUpper('foobar')
  console.log(result)
  // output: 'FOOBAR'

  // Native
  var result = 'foobar'.toUpperCase()
  console.log(result)
  // output: 'FOOBAR'
  ```

#### Browser Support for `String.prototype.toUpperCase()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ | 1.0 ✔ |  ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.trim
:heavy_exclamation_mark:`Not in Underscore.js`
Removes the leading and trailing whitespace characters from a string.

  ```js
  // Lodash
  var result = _.trim(' abc ')
  console.log(result)
  // output: 'abc'

  // Native
  var result = ' abc '.trim()
  console.log(result)
  // output: 'abc'
  ```

#### Browser Support for `String.prototype.trim()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  5.0 ✔  | ✔ |  3.5 ✔ |  9.0 ✔  |  10.5 ✔ |  5.0 ✔  |

**[⬆ back to top](#quick-links)**

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

## Reference

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Underscore.js](http://underscorejs.org)
* [Lodash.js](https://lodash.com/docs)

### _.uniq
Removes all duplicates entries from an array.

  ```js
  // Underscore/Lodash
  var result = _.uniq([1, 2, 1, 4, 1, 3]);
  console.log(result)
  // output: [1, 2, 4, 3]

  // Native
  var result = [... new Set([1, 2, 1, 4, 1, 3])]
  console.log(result)
  // output: [1, 2, 4, 3]
  ```

#### Browser Support for `new Set()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  38.0 ✔  | ✔ 12.0 | 13.0 ✔ |  11.0 ✔  |  25.0 ✔ |  7.1 ✔  |

**[⬆ back to top](#quick-links)**

## Util

### _.times
Invokes the iteratee n times, returning an array of the results of each invocation.

  ```js
  // Lodash
  var result = _.times(10)
  console.log(result)
  // output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'

  // Native
  var result = Array.from({length: 10}, (_,x) => x)
  console.log(result)
  // output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'
  
  // Native
  var result = [...Array(10).keys()]
  console.log(result)
  // output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'
  ```

#### Browser Support for `Array.from()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  45.0 ✔  | ✔ |  32.0 ✔ |  ✖  |  ✔ | 9.0 ✔  |

**[⬆ back to top](#quick-links)**

## Number

### _.clamp

Clamps number within the inclusive lower and upper bounds.

```js
// Lodash
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5

_.clamp(10, -5);
// => -5

_.clamp(10, 99);
// => 10

// Native
const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne; 
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};

clamp(-10, -5, 5);
// => -5
 
clamp(10, -5, 5);
// => 5

clamp(10, -5);
// => -5

clamp(10, 99);
// => 10
```

#### Browser Support for `Math.min() and Math.max()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
✔  |  ✔  |  ✔  |  ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.inRange
Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.

  ```js
    // Lodash
    _.inRange(3, 2, 4);
    // output: true
    _.inRange(-3, -2, -6);
    // output: true

    //Native
    const inRange = (num, init, final) => {
      if(final === undefined){
        final = init;
        init = 0;
      }
      return (num >= Math.min(init, final) && num < Math.max(init, final));
    }
    
    //Native
    const inRange = (num, a, b=0) => (Math.min(a,b) <= num && num < Math.max(a,b));

    inRange(3, 2, 4);
    // output: true
    inRange(-3, -2, -6);
    // output: true
  ```

  #### Browser Support for `Math.min() and Math.max()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
✔  |  ✔  |  ✔  |  ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

  ### _.random
Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.

  ```js
    // Lodash
    _.random(0, 5);
    // => an integer between 0 and 5
    
    _.random(5);
    // => also an integer between 0 and 5
    
    _.random(5, true);
    // => a floating-point number between 0 and 5
    
    _.random(1.2, 5.2);
    // => a floating-point number between 1.2 and 5.2

    //Native ES6
    const random = (a = 1, b = 0) => {
      const lower = Math.min(a, b);
      const upper = Math.max(a, b);
      return lower + Math.random() * (upper - lower);
    };

    const randomInt = (a = 1, b = 0) => {
      const lower = Math.ceil(Math.min(a, b));
      const upper = Math.floor(Math.max(a, b));
      return Math.floor(lower + Math.random() * (upper - lower + 1))
    };

    random();
    // => a floating-point number between 0 and 1
    
    random(5);
    // => a floating-point number between 0 and 5
    
    random(0, 5);
    // => also a floating-point number between 0 and 5
    
    random(1.2, 5.2);
    // => a floating-point number between 1.2 and 5.2

    randomInt();
    // => just 0 or 1
    
    randomInt(5);
    // => an integer between 0 and 5
    
    randomInt(0, 5);
    // => also an integer between 0 and 5
    
    randomInt(1.2, 5.2);
    // => an integer between 2 and 5

  ```

  #### Browser Support for `Math.random()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔  |  ✔  |  ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**



## Inspired by:

* [You-Dont-Need-jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery)
* [Rui's blog](http://ktei.github.io/2016/01/07/some-general-js-tips-1.html)


# License

MIT


[chrome-image]: https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png
[firefox-image]: https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png
[ie-image]: https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png
[opera-image]: https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png
[safari-image]: https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png
[edge-image]:
https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png
