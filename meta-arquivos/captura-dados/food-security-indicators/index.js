var xlsx = require('xlsx');
var { getDados } = require('./getDados');
var { filterDados } = require('./filterDados');

getDados()
    .then(filterDados)
    .then(json => {
        console.log(json) /*?*/
    });