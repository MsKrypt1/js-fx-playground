const def = require('./def');
const length = require('./length');

const slice = ([head, ...tail], from, to) => def(head)
    ? from <= 0 && to > 0
        ? [head, ...slice(tail, from - 1, to - 1)]
        : [...slice(tail, from - 1, to - 1)]
    : [];

const sliceApi = (array, from, to = length(array)) => slice(array, from, to);

module.exports = sliceApi;