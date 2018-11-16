const reduceWhile = (pred, fn, acc, arr) => arr.reduce(
    (acc, e, idx, arr) => {
        if (!acc.stopped && pred(acc, e, idx, arr)) {
            return { acc: fn(acc.acc, e, idx, arr), stopped: false };
        }
        return { acc: acc.acc, stopped: true };
    },
    { acc, stopped: false }
).acc;

module.exports = reduceWhile;