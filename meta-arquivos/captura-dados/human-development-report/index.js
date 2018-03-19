const path = require('path');
const {
    hashString,
    readFile,
    saveFile,
    updateHash
} = require('../shared/calculateHash');

const { compareHashes, getSummary, getIndicators } = require('./getDados');
const { filterSummary, filterIndicators } = require('./filterDados');
const { prepareToUpload } = require('./convertDados');


getSummary()
    .then(filterSummary)
    .then(indicadores => filterIndicators(getIndicators(), indicadores))
    .then(compareHashes)
    .then(prepareToUpload)
    .then(values => {
        if (values) {
            saveFile(path.resolve(__dirname), 'hdr.json', JSON.stringify(values, null, 4))
        }
    })
