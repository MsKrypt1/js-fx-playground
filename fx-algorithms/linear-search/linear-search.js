console.log(linearSearch([9, 7, 2, 16, 4], 16));
console.log(linearSearch([1, 22, 57, 47, 34, 18, 66], 98));

function linearSearch(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (x == array[i]) {
            return i;
        }
    }
    return -1;
}
