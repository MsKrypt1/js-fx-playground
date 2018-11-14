const def = require('./def');

const undef = x => !def(x);

module.exports = undef;