const def = require('./def');

const first = ([head, ...tail], n = 1) => def(head) && n > 0
    ? [head, ...first(tail, n - 1)]
    : [];

module.exports = first;