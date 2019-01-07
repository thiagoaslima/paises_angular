const fs = require('fs');
const path = require('path');

var paises = require('../../../lista-paises/compilado/paises_completo.json');
let dados = require('./dados.json');

// troca sigla de 3 letras pela sigla de 2 letras
dados = dados.reduce((dados, obj) => {
    const pais = paises.paises.find(pais => pais.sigla3 === obj.ref_area);

    if (pais) {
        if (!dados[pais.sigla]) {
            dados[pais.sigla] = {};
        }
        dados[pais.sigla][obj.time] = obj.obs_value || "";
    } else {
        console.log(obj.ref_area);
    }

    return dados;
}, {})

const anos = [];
let ano = 1990;
const anoCorrente = 2030;
while (ano <= anoCorrente) {
    anos.push(`${ano}`);
    ano++;
}

anos.forEach(ano => {
    const content = [";economia_20"].concat(Object.keys(dados).map(key => `"${key}";"${dados[key][ano].replace(',','.')}"`));
    fs.writeFileSync(path.resolve(__dirname, 'carga', `pop_ativa_${ano}.csv`), content.join('\n'), 'utf-8');
})