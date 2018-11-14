const negate = fn => (...args) => !fn(...args);

module.exports = negate;