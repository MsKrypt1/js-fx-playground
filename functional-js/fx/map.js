const def = require('./def');

const map = ([head, ...tail], fn, index = 0) => def(head)
    ? [fn(head, index), ...map(tail, fn, index + 1)]
    : [];

module.exports = map;