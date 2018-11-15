const swap = require('../shared/fx-swap');

console.log(selectionSort([0, 3, 5]));
console.log(selectionSort([9, 7, 2, 16, 4], 0));
console.log(selectionSort([1, 22, 57, 47, 34, 18, 66]));

function selectionSort(array) {
    const min = arr => arr.reduce((acc, cur) => cur < acc ? cur : acc, Number.MAX_SAFE_INTEGER);
    const indexOf = (e, arr) => arr.reduce((acc, cur, idx) => e === cur ? idx : acc, -1);
    const indexOfMin = arr => indexOf(min(arr), arr);
    const swapWithMin = (arr, idx) => swap(arr, idx, idx + indexOfMin(arr.slice(idx)))

    return array.reduce((acc, _, idx) => swapWithMin(acc, idx), array);
}
