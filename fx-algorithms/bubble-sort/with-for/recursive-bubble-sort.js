const swap = require('../shared/fx-swap');

console.log(bubbleSort([0, 1, 2]));
console.log(bubbleSort([30, 2, 1]));

function bubbleSort(input) {
    const bubbleElement = (arr, until, idx = 0) => idx < (arr.length - until - 1)
        ? arr[idx] > arr[idx + 1]
            ? bubbleElement(swap(arr, idx, idx + 1), until, idx + 1)
            : bubbleElement(arr, until, idx + 1)
        : arr;

    const checkArray = (arr, idx = 0) => idx < (arr.length - 1)
        ? checkArray(bubbleElement(arr, idx), idx + 1)
        : arr;

    return checkArray(input);
}
