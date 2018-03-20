const path = require('path');
const { saveFile } = require('../shared');
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
    .catch(err => {
        console.log(err)
    })
