const { getPages, compareHashes, savePages } = require('./getDados');
const { filterTables } = require('./filterDados');
const { convertDados, prepareToUpload, upload } = require('./convertDados');
const { getVariavelCode, runToAllCountries, saveFile } = require('../shared');


getPages()
    .then(compareHashes)
    .then(savePages)
    .then(filterTables)
    .then(convertDados)
    .then(prepareToUpload)
    .then(upload)
    .then(res => {
        saveFile(null, 'teste2', JSON.stringify(res, null, 4));
    })
    .catch(err => {
        console.log(err);
    });