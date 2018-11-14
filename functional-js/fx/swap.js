const first = require('./first');
const slice = require('./slice');
const at = require('./at');

const swap = (array, from, to) => [
    ...first(array, from),
    at(array, to),
    ...slice(array, from + 1, to),
    at(array, from),
    ...slice(array, to + 1)
];

const swapApi = (array, from, to) => to !== from
    ? to > from
        ? swap(array, from, to)
        : swap(array, to, from)
    : array;

module.exports = swapApi;