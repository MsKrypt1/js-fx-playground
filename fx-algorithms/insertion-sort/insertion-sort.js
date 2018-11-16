console.log(insertionSort([12, 11, 13, 5, 6]));
console.log(insertionSort([9, 7, 2, 16, 4]));
console.log(insertionSort([1, 22, 57, 47, 34, 18, 66]));

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        const key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }

    return array;
}
