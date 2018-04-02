const xlsx = require('xlsx');
const { getDados } = require('./getDados');
const { filterDados } = require('./filterDados');
const { prepareToUpload } = require('./convertDados');

getDados()
    .then(filterDados)
    .then(prepareToUpload)
    .then(console.log.bind(console));