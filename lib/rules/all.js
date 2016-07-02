/**
 * @fileoverview Discourages the use of Underscore/Lodash where native methods will do
 * @author Patrick McElhaney
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const errorMessages = {
  concat: 'Consider using the native Array.concat()',
  fill: 'Consider using the native Array.fill()',
  find: 'Consider using the native Array.find()',
  findIndex: 'Consider using the native Array.findIndex()',
  indexOf: 'Consider using the native Array.indexOf()',
  join: 'Consider using the native Array.join()',
  lastIndexOf: 'Consider using the native Array.lastIndexOf()',
  reverse: 'Consider using the native Array.reverse()',
  each: 'Consider using the native Array.forEach()',
  every: 'Consider using the native Array.every()',
  filter: 'Consider using the native Array.filter()',
  includes: 'Consider using the native Array.includes()',
  map: 'Consider using the native Array.map()',
  reduce: 'Consider using the native Array.reduce()',
  reduceRight: 'Consider using the native Array.reduceRight()',
  size: 'Consider using the native array length property',
  some: 'Consider using the native Array.some()',
  isNaN: 'Consider using the ES6 Number.isNaN function',
  extendOwn: 'Consider using the ES6 Object.assign function',
  assign: 'Consider using the ES6 Object.assign function',
  keys: 'Consider using the ES6 Object.keys function',
  repeat: 'Consider using the native repeat function',
  toLower: 'Consider using the native toLowerCase function',
  toUpper: 'Consider using the native toUpperCase function',
  trim: 'Consider using the native trim function',
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
  },

};


function getUnderscoreFunctionName (node) {
  const callee = node.callee;
  return callee && callee.object && callee.object.name === '_' && callee.property && callee.property.name;
}
