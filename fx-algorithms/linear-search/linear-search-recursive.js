const def = require('../shared/def');

console.log(linearSearch([9, 7, 2, 16, 4], 16));
console.log(linearSearch([1, 22, 57, 47, 34, 18, 66], 98));

function linearSearch(array, x) {
    const search = ([head, ...tail], x, idx = 0) => def(head)
        ? head === x
            ? idx
            : search(tail, x, idx + 1)
        : -1;

    return search(array, x);
}
