const def = require('./def');
const isArray = require('./isArray');

const flatten = ([head, ...tail]) => def(head)
    ? isArray(head)
        ? [...flatten(head), ...flatten(tail)]
        : [head, ...flatten(tail)]
    : [];

module.exports = flatten;