const request = require('request-promise-native');
const { NoNewData } = require('../errors')
const { getFonte, saveFile } = require('../shared');
const fonte = getFonte("Human Development Report");
const oldHash = require('./hash.json');

function getSummary() {
    return request.get(fonte.files[0]);
}

function getIndicators() {
    return request(fonte.files[1]);
}

function compareHashes({hash, values}) {
    const areEqual = hash === oldHash;

    if (!areEqual) {
        saveFile(null, 'hash.json', JSON.stringify(hash));
        return values
    } else {
        throw new NoNewData();
    }
}

module.exports = { compareHashes, getSummary, getIndicators };
