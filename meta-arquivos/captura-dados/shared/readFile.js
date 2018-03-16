const fs = require('fs');
const util = require('util');

const _readFile = util.promisify(fs.readFile);

function readFile(path, options) {
    return _readFile(path, options).catch(err => null);
} 

module.exports = readFile;