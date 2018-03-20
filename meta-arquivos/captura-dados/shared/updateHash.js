const path = require('path')
const readFile = require('../shared/readFile');
const saveFile = require('../shared/saveFile');

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