const json = require('../../lista-paises/compilado/paises_completo.json');

const getPais = {
    byCodigo: (codigo) => {
        return json.paises.find(pais => pais.codigo == codigo) ||
            json.regioes.find(regiao => regiao.codigo == codigo);
    },

    bySigla: (sigla) => {
        const prop = sigla.length === 2 ? 'sigla' : 'sigla3';
        return json.paises.find(pais => pais[prop] === sigla)
    }
}

module.exports = getPais;