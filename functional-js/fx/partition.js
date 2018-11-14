const filter = require('./filter');
const reject = require('./reject');

const partition = (array, fn) => [filter(array, fn), reject(array, fn)];

module.exports = partition;