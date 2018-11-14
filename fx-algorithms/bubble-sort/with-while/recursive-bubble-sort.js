const swap = require('../../shared/fx-swap');

console.log(bubbleSort([0, 1, 2]));
console.log(bubbleSort([30, 2, 1]));

function bubbleSort(input) {
    const isInLength = (array, index) => index < array.length;
    const isPreviousLarger = (array, index) => array[index - 1] > array[index];

    const shouldBeSwapped = (array, index = 1) =>
        isInLength(array, index)
            ? !isPreviousLarger(array, index)
                ? shouldBeSwapped(array, index + 1)
                : true
            : false;

    const bubbleElement = (array, index = 1) =>
        isInLength(array, index)
            ? isPreviousLarger(array, index)
                ? bubbleElement(swap(array, index, index - 1), index + 1)
                : bubbleElement(array, index + 1)
            : array;

    const checkArray = (array) =>
        shouldBeSwapped(array)
            ? checkArray(bubbleElement(array))
            : array;

    return checkArray(input);
}
