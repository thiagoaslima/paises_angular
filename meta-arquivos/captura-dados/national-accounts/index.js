const { getPages, compareHashes } = require('./getDados');
const { filterTables } = require('./filterDados');
const { convertDados, prepareToUpload } = require('./convertDados');
const { getVariavelCode, runToAllCountries, saveFile } = require('../shared');


getPages()
    .then(compareHashes)
    .then(filterTables)
    .then(convertDados)
    .then(prepareToUpload)
    .then(res => {
        saveFile(null, 'teste2', JSON.stringify(res, null, 4));
    })
    .catch(err => {
        console.log(err);
    });