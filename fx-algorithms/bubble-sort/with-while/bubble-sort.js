const swap = require('../shared/swap');

console.log(bubbleSort([0, 1, 2]));
console.log(bubbleSort([30, 2, 1]));

function bubbleSort(array) {
    let isSwapped;

    do {
        isSwapped = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                swap(array, i, i - 1);
                isSwapped = true;
            }
        }
    } while (isSwapped);
    return array;
}
