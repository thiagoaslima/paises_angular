const {
    getFonte,
    getSigla,
    getVariavelCode,
    runToAllCountries,
    slugify
} = require('../shared');

const fonte = getFonte("Food security indicators");

function prepareToUpload(periodo, dados) {

}

function extractPeriod(periodos, dados) {
    return periodos.map(periodo => {
        return {
            periodo,
            dados: dados.map(obj => ({[obj.sigla]: obj[periodo]}))
        }
    })
}
