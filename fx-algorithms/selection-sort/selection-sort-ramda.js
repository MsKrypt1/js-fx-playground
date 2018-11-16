const R = require('ramda');
const swap = require('../shared/fx-swap');

console.log(selectionSort([0, 3, 5]));
console.log(selectionSort([9, 7, 2, 16, 4], 0));
console.log(selectionSort([1, 22, 57, 47, 34, 18, 66]));

function selectionSort(array) {
    const reduceWithIdx = R.addIndex(R.reduce);
    const min = R.reduce((x, y) => x < y ? x : y, Number.MAX_SAFE_INTEGER);
    const indexOf = e => reduceWithIdx((acc, cur, idx) => e === cur ? idx : acc, -1);

    const indexOfMin = R.converge(
        R.uncurryN(2, indexOf),
        [min, R.identity]
    );

    const swapWithMin = (arr, idx) => swap(arr, idx, idx + indexOfMin(arr.slice(idx)));
    const sort = reduceWithIdx((acc, _, idx) => swapWithMin(acc, idx), array);

    return sort(array);
}
