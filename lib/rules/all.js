/**
 * @fileoverview Check methods you can use natively without lodash/underscore
 * @author Patrick McElhaney
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const errorMessages = {
  concat: 'Consider using the native Array.prototype.concat()',
  fill: 'Consider using the native ES6 Array.prototype.fill()',
  find: 'Consider using the native ES6 Array.prototype.find()',
  findIndex: 'Consider using the native ES6 Array.prototype.findIndex()',
  indexOf: 'Consider using the native Array.prototype.indexOf()',
  join: 'Consider using the native Array.prototype.join()',
  lastIndexOf: 'Consider using the native Array.prototype.lastIndexOf()',
  reverse: 'Consider using the native Array.prototype.reverse()',
  each: 'Consider using the native Array.prototype.forEach()',
  every: 'Consider using the native Array.prototype.every()',
  filter: 'Consider using the native Array.prototype.filter()',
  includes: 'Consider using the native Array.prototype.includes()',
  map: 'Consider using the native Array.prototype.map()',
  reduce: 'Consider using the native Array.prototype.reduce()',
  reduceRight: 'Consider using the native Array.prototype.reduceRight()',
  size: 'Consider using the native Array.prototype.length',
  some: 'Consider using the native Array.prototype.some()',
  isNaN: 'Consider using the native isNaN() or ES6 Number.isNaN()',
  extendOwn: 'Consider using the native ES6 Object.assign()',
  assign: 'Consider using the native ES6 Object.assign()',
  keys: 'Consider using the native Object.keys()',
  repeat: 'Consider using the native ES6 String.prototype.repeat()',
  toLower: 'Consider using the native String.prototype.toLowerCase()',
  toUpper: 'Consider using the native String.prototype.toUpperCase()',
  trim: 'Consider using the native String.prototype.trim()',
};

module.exports = {
  create (context) {
    function checkForUnneededLibraryFunctions (node) {
      const functionName = getUnderscoreFunctionName(node);
      const errorMessage = errorMessages[functionName];

      if (errorMessage) {
        context.report({
          node,
          message: errorMessages[functionName],
        });
      }
    }

    return {
      'CallExpression': checkForUnneededLibraryFunctions,
    };
  }
};

function getUnderscoreFunctionName (node) {
  const callee = node.callee;
  return callee && callee.object && callee.object.name === '_' && callee.property && callee.property.name;
}
