const sniff = require('supersniff');
const path = require('path');
const { hashString } = require('../shared/calculateHash');
const readFile = require('../shared/readFile');
const saveFile = require('../shared/saveFile');

const { getSummary, getIndicators } = require('./getDados');
const { filterSummary, filterIndicators } = require('./filterDados');
const { updateHash } = require('./updateHash');

getSummary()
    .then(filterSummary)
    .then(indicadores => filterIndicators(getIndicators(), indicadores))
    .then(({hash, values}) => {
        return updateHash(hash).then(bool => bool ? values : null);
    })
    .then(values => {
        if (values) {
            saveFile(path.resolve(__dirname), 'hdr', JSON.stringify(values, null, 4))
        }
    })
