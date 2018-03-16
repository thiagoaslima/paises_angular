const { getTables } = require('./getDados');
const { filterTables } = require('./filterDados');

getTables()
    .then(filterTables)
    .then(res => {
        console.log(JSON.stringify(res))
    })