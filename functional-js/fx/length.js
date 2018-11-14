const def = require('./def');

const length = ([head, ...tail], index = 0) => def(head) ? length(tail, index + 1) : index;

module.exports = length;