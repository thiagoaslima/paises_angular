const paises = require('../../lista-paises/compilado/paises_completo.json').paises;
const noDataCode = '99999999999998';

function runToAllCountries(map) {
    return paises.reduce((agg, pais) => {
        agg[pais.sigla] = map[pais.sigla] || noDataCode
        return agg;
    }, {});
}

module.exports = runToAllCountries;