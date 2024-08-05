'use strict';

const page = require('..');
const assert = require('assert').strict;

assert.strictEqual(page(), 'Hello from page');
console.info('page tests passed');
