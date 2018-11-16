const reduceWhile = require('../shared/reduceWhile');
const reverse = require('../shared/reverse');
const append = require('../shared/append');

console.log(insertionSort([12, 11, 13, 5, 6]));
console.log(insertionSort([9, 7, 2, 16, 4]));
console.log(insertionSort([1, 22, 57, 47, 34, 18, 66]));

function insertionSort(array) {
    const movePreviousOneStep = arr => {
        const [head, ...tail] = reverse(arr);
        const largerThanHead = reduceWhile((_, e) => e > head, append, [], tail);
        const leftovers = tail.slice(largerThanHead.length);
        return reverse([...largerThanHead, head, ...leftovers]);
    };

    return array.reduce((acc, e) => movePreviousOneStep([...acc, e]), []);
}
