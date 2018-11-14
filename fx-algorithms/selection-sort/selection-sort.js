const swap = require('../shared/swap');

console.log(selectionSort([0, 3, 5]));
console.log(selectionSort([9, 7, 2, 16, 4]));
console.log(selectionSort([1, 22, 57, 47, 34, 18, 66]));

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minPos = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minPos]) {
                minPos = j;
            }
        }

        swap(array, i, minPos);
    }

    return array;
}
