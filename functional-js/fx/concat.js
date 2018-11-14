const def = require('./def');

const concat = ([head, ...tail]) => def(head)
    ? [...head, ...concat(tail)]
    : [];

module.exports = concat;