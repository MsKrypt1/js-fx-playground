const def = require('./def');

const at = ([head, ...tail], i) => def(head) && i > 0
    ? at(tail, i - 1)
    : head;

module.exports = at;