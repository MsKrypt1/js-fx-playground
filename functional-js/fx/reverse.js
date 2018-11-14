const def = require('./def');

const reverse = ([head, ...tail]) => def(head) ? [...reverse(tail), head] : [];

module.exports = reverse;