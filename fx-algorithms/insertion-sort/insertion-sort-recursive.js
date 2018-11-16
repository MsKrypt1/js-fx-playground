console.log(insertionSort([12, 11, 13, 5, 6]));
console.log(insertionSort([9, 7, 2, 16, 4]));
console.log(insertionSort([1, 22, 57, 47, 34, 18, 66]));

function insertionSort(array) {
    const movePreviousOneStep = (arr, key, idx) => {
        if (idx > 0 && arr[idx - 1] > key) {
            arr[idx] = arr[idx - 1];
            return movePreviousOneStep(arr, key, idx - 1);
        }
        return idx;
    };

    const sort = (arr, idx = 1) => {
        if (idx >= arr.length) {
            return arr;
        }

        const key = arr[idx];
        arr[movePreviousOneStep(arr, key, idx)] = key;
        return sort(arr, idx + 1);
    };

    return sort(array);
}
