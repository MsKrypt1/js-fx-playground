console.log(linearSearch([9, 7, 2, 16, 4], 16));
console.log(linearSearch([1, 22, 57, 47, 34, 18, 66], 98));

function linearSearch(array, x) {
    return array.reduce(
        (acc, curr, idx) => acc == -1 && curr == x ? idx : acc,
        -1
    );
}
