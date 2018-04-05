const path = require('path')
const { readFile } = require('./readFile');
const { saveFile } = require('./saveFile');

function updateHash(hash, file) {
    return readFile(file).then(oldHash => {
        const areEqual = (hash == oldHash);
        if (!areEqual) {
            saveFile(null, file, hash)
        }
        return areEqual;
    });
}

module.exports = { updateHash };