const reverse = require('./reverse');
const first = require('./first');

const last = (array, n = 1) => reverse(first(reverse(array), n));

module.exports = last;