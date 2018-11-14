const { last, dropRight } = require('lodash');

console.log(bubbleSort([0, 1, 2]));
console.log(bubbleSort([30, 2, 1]));

function bubbleSort(input) {
    const bubbleElement = arr => arr.reduce(
        (acc, cur) => last(acc) > cur
            ? [...dropRight(acc), cur, last(acc)]
            : [...acc, cur],
        []
    );

    return input.reduce(bubbleElement, input);
}
