const swap = require('../shared/fx-swap');

console.log(selectionSort([0, 3, 5]));
console.log(selectionSort([9, 7, 2, 16, 4]));
console.log(selectionSort([1, 22, 57, 47, 34, 18, 66]));

function selectionSort(array) {
    const isInLength = (arr, idx) => idx < arr.length;
    const getIndexOfSmaller = (arr, i, j) => arr[i] < arr[j] ? i : j;

    const findIndexOfSmallest = (arr, min, idx = min + 1) => isInLength(arr, idx)
        ? findIndexOfSmallest(arr, getIndexOfSmaller(arr, idx, min), idx + 1)
        : min;

    const checkArray = (arr, idx = 0) => isInLength(arr, idx + 1)
        ? checkArray(swap(arr, idx, findIndexOfSmallest(arr, idx)), idx + 1)
        : arr;

    return checkArray(array);
}
