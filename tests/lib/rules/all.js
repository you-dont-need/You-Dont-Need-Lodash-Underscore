/**
 * @fileoverview Discourages the use of Underscore/Lodash where native methods will do
 * @author Patrick McElhaney
 */
"use strict";

var rule = require("../../../lib/rules/all"),

  RuleTester = require("eslint").RuleTester;


// Only a couple of smoke tests because otherwise it would get very reduntant

var ruleTester = new RuleTester();
ruleTester.run('no-lodash-underscore', rule, {

  valid: [
    'array.concat(2, [3], [[4]])',
    'Object.keys({one: 1, two: 2, three: 3})'
  ],

  invalid: [
    {
      code: '_.concat(array, 2, [3], [[4]])',
      errors: ['Consider using the native Array.prototype.concat()']
    },
    {
      code: '_.keys({one: 1, two: 2, three: 3})',
      errors: ['Consider using the native Object.keys()']
    },

  ]
});
