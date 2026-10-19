'use strict';
const kebabCase = require('kebab-case');
const rules = require('./lib/rules/rules.json')
const { name, version } = require('./package.json')

const all = Object.keys(rules);
const compatible = Object.keys(rules).filter(rule => rules[rule].compatible);
const incompatible = Object.keys(rules).filter(rule => !rules[rule].compatible);

const WARN = 1;
const ERROR = 2;

const configure = (list, level) => (
  list.reduce((ret, rule) => (Object.assign({}, ret,
    { ['you-dont-need-lodash-underscore/' + (rules[rule].ruleName || kebabCase(rule))]: level })), {})
)

const plugin = {
    meta: {
        name,
        version,
    },
    rules: require('./lib/rules/all'),
    configs: {},
    flatConfigs: {},
};

Object.assign( plugin.flatConfigs, {
    'all-warn': {
        plugins: {
            'you-dont-need-lodash-underscore': plugin,
        },
        rules: configure(all, WARN)
    },

    'all': {
        plugins: {
            'you-dont-need-lodash-underscore': plugin,
        },
        rules: configure(all, ERROR)
    },

    'compatible-warn': {
        plugins: {
            'you-dont-need-lodash-underscore': plugin,
        },
        rules: configure(compatible, WARN)
    },

    'compatible': {
        plugins: {
            'you-dont-need-lodash-underscore': plugin,
        },
        rules: Object.assign(
            configure(compatible, ERROR),
            configure(incompatible, WARN)
        )
    }
} );

for ( const [ key, config ] of Object.entries( plugin.flatConfigs ) ) {
    plugin.configs[ key ] = Object.assign( {}, config, {
        plugins: [ 'you-dont-need-lodash-underscore' ],
    } );
    plugin.configs[ 'flat/' + key ] = config;
}

module.exports = plugin;
