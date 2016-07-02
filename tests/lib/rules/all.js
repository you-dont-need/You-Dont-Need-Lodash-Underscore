/**
 * @fileoverview Check methods you can use natively without lodash/underscore
 * @author Patrick McElhaney
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/all');
const RuleTester = require('eslint').RuleTester;

// Only a couple of smoke tests because otherwise it would get very reduntant

const ruleTester = new RuleTester();
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
    }
  ]
});
