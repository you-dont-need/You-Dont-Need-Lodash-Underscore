'use strict';
const kebabCase = require('kebab-case');
const rules = require('./lib/rules/rules.json')

module.exports.rules = require('./lib/rules/all');

const all = Object.keys(rules);
const compatible = Object.keys(rules).filter(rule => rules[rule].compatible);
const incompatible = Object.keys(rules).filter(rule => !rules[rule].compatible);

const WARN = 1;
const ERROR = 2;

const configure = (list, level) => (
  list.reduce((ret, rule) => (Object.assign({}, ret,
    { ['you-dont-need-lodash-underscore/' + (rules[rule].ruleName || kebabCase(rule))]: level })), {})
)

module.exports.configs = {
  'all-warn': {
    plugins: [
      'you-dont-need-lodash-underscore'
    ],
    rules: configure(all, WARN)
  },

  'all': {
    plugins: [
      'you-dont-need-lodash-underscore'
    ],
    rules: configure(all, ERROR)
  },

  'compatible-warn': {
    plugins: [
      'you-dont-need-lodash-underscore'
    ],
    rules: configure(compatible, WARN)
  },

  'compatible': {
    plugins: [
      'you-dont-need-lodash-underscore'
    ],
    rules: Object.assign(
      configure(compatible, ERROR),
      configure(incompatible, WARN)
    )
  }
}
