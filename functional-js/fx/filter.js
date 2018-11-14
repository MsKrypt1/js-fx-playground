const def = require('./def');

const filter = ([head, ...tail], fn, index = 0) => def(head)
    ? fn(head, index)
        ? [head, ...filter(tail, fn, index + 1)]
        : [...filter(tail, fn, index + 1)]
    : [];

module.exports = filter;