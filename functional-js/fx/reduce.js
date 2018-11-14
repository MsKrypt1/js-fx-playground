const def = require('./def');

const reduce = ([head, ...tail], fn, memo, index = 0) => def(head)
    ? def(memo)
        ? reduce(tail, fn, fn(memo, head, index), index + 1)
        : reduce(tail, fn, head, index + 1)
    : memo;

module.exports = reduce;
