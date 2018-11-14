const reduceRight = require('./fx/reduceRight');

const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
    reduceRight(input, (acc, curr) => [...acc, curr], [])
)