const { last, dropRight } = require('lodash');

console.log(bubbleSort([0, 1, 2]));
console.log(bubbleSort([30, 2, 1]));

function bubbleSort(input) {
    const prev = (arr, idx) => arr[idx - 1];

    const shouldBeSwapped = a => a.some((cur, idx, arr) => prev(arr, idx) > cur);

    const bubbleElement = a => a.reduce(
        (acc, cur) => last(acc) > cur
            ? [...dropRight(acc), cur, last(acc)]
            : [...acc, cur],
        []
    );

    const checkArray = arr => shouldBeSwapped(arr)
        ? checkArray(bubbleElement(arr))
        : arr;

    return checkArray(input);
}
