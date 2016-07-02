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
    { [rules[rule].ruleName || kebabCase(rule)]: level })), {})
)

module.exports.configs = {
    'all-warn': {
      rules: configure(all, WARN)
    },

    'all': {
      rules: configure(all, ERROR)
    },

    'compatible-warn': {
      rules: configure(compatible, WARN)
    },

    'compatible': {
      rules: Object.assign(
        configure(compatible, ERROR),
        configure(incompatible, WARN)
      )
    }
}
