const swap = require('../shared/swap');

console.log(bubbleSort([0, 1, 2]));
console.log(bubbleSort([30, 2, 1]));

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
