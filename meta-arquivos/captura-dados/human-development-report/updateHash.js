const readFile = require('../shared/readFile');
const saveFile = require('../shared/saveFile');

function updateHash({ hash }) {
    const fileName = 'hash-indicators.txt'
    
    return readFile(fileName).then(oldHash => {
        const areEqual = hash == oldHash;
        if (!areEqual) {
            saveFile('.', fileName, hash)
        }
        return areEqual;
    });
}

module.exports = { updateHash };