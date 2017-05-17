require('./lib/rules/all.js');

const assert = require('assert');
const plugin = require('../');

assert.equal(plugin.configs['all-warn'].rules['you-dont-need-lodash-underscore/contains'], 1);
assert.equal(plugin.configs['all-warn'].rules['you-dont-need-lodash-underscore/trim'], 1);
assert.equal(plugin.configs.all.rules['you-dont-need-lodash-underscore/every'], 2);
assert.equal(plugin.configs.all.rules['you-dont-need-lodash-underscore/keys'], 2);
assert.equal(plugin.configs['compatible-warn'].rules['you-dont-need-lodash-underscore/each'], undefined);
assert.equal(plugin.configs['compatible-warn'].rules['you-dont-need-lodash-underscore/find-index'], 1);
assert.equal(plugin.configs.compatible.rules['you-dont-need-lodash-underscore/for-each'], 1);
assert.equal(plugin.configs.compatible.rules['you-dont-need-lodash-underscore/is-nan'], 2);
