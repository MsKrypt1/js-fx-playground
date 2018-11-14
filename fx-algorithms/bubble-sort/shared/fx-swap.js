const swap = (array, i, j) => array.map((e, index) => {
    if (index == i) {
        return array[j];
    }
    if (index == j) {
        return array[i];
    }
    return e;
});

module.exports = swap;