const reduce = require('./reduce');
const reverse = require('./reverse');

const reduceRight = (array, fn, memo) => reduce(reverse(array), fn, memo);

module.exports = reduceRight;