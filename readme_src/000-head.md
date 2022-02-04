# [You don't (may not) need Lodash/Underscore](https://you-dont-need.github.io/You-Dont-Need-Lodash-Underscore/#/)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/you-dont-need/lodash-underscore)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cht8687/You-Dont-Need-Lodash-Underscore)

Lodash and Underscore are great modern JavaScript utility libraries, and they are widely used by Front-end developers. However, when you are targeting modern browsers, you may find out that there are many methods which are already supported natively thanks to ECMAScript5 [ES5] and ECMAScript2015 [ES6]. If you want your project to require fewer dependencies, and you know your target browser clearly, then you may not need Lodash/Underscore.

You are welcome to contribute with more items provided below.

* If you are targeting legacy JavaScript engine with those ES5 methods, you can use [es5-shim](https://github.com/es-shims/es5-shim)

* Please note that, the examples used below are just showing you the native alternative of performing certain tasks. For some functions, Lodash provides you more options than native built-ins. This list is not a 1:1 comparison.

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
