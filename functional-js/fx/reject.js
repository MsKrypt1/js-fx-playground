const negate = require('./negate');
const filter = require('./filter');

const reject = (array, fn) => filter(array, negate(fn));

module.exports = reject;