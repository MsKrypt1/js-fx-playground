const def = require('./def');

const insert = ([head, ...tail], newVal, index = 0) => def(head)
    ? index === 0
        ? [newVal, head, ...insert(tail, newVal, index - 1)]
        : [head, ...insert(tail, newVal, index - 1)]
    : index === 0
        ? [newVal]
        : [];

module.exports = insert;