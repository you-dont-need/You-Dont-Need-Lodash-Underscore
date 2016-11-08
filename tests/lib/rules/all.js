/**
 * @fileoverview Check methods you can use natively without lodash/underscore
 * @author Patrick McElhaney
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rules = require('../../../lib/rules/all');
const RuleTester = require('eslint').RuleTester;

// Only a couple of smoke tests because otherwise it would get very reduntant

const ruleTester = new RuleTester();

ruleTester.run('_.concat', rules.concat, {
  valid: [
    'array.concat(2, [3], [[4]])'
  ],
  invalid: [{
    code: '_.concat(array, 2, [3], [[4]])',
    errors: ['Consider using the native Array.prototype.concat()']
  }]
});

ruleTester.run('lodash.keys', rules.keys, {
  valid: [
    'Object.keys({one: 1, two: 2, three: 3})'
  ],
  invalid: [{
    code: 'lodash.keys({one: 1, two: 2, three: 3})',
    errors: ['Consider using the native Object.keys()']
  }]
});

ruleTester.run('underscore.forEach', rules.forEach, {
  valid: [
    '[0, 1].forEach()'
  ],
  invalid: [{
    code: 'underscore.forEach()',
    errors: ['Consider using the native Array.prototype.forEach()']
  }]
});

// Chaining.
ruleTester.run('_', rules.concat, {
  valid: [
    '_(2, [3], [[4]])'
  ],
  invalid: []
});

ruleTester.run('_.findIndex', rules.findIndex, {
  valid: [
    '[{user: fred, age: 20, active: false}, {user: rick, age: 43, active: false}].findIndex(function (o) { return o.age >= 40; })'
  ],
  invalid: [{
    code: '_.findIndex([{user: fred, age: 20, active: false}, {user: rick, age: 43, active: false}], function (o) { return o.age >= 40; });',
    errors: ['Consider using the native ES6 Array.prototype.findIndex()']
  }]
});
