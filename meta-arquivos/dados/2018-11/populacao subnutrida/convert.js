const fs = require('fs');
const path = require('path');

var paises = require('../../../lista-paises/compilado/paises_completo.json');
let dados = require('./output-onlinecsvtools.json');

// troca sigla de 3 letras pela sigla de 2 letras
dados = dados.reduce((dados, obj) => {
    const pais = paises.paises.find(pais => pais.sigla3 === obj["Country Code"]);

    if (pais) {
        dados[pais.sigla] = obj;
    } else {
        console.log(obj["Country Name"], obj["Country Code"]);
    }

    return dados;
}, {})

const anos = [];
let ano = 2000;
const anoCorrente = new Date().getFullYear();
while(ano < anoCorrente) {
    anos.push(ano);
    ano++;
}

anos.forEach(ano => {
    const content = [",indicadoressociais_12"].concat(Object.keys(dados).map(key => `"${key}","${dados[key][String(ano)].toString().replace(',', '.')}"`));
    fs.writeFileSync(path.resolve(__dirname, 'carga', `pop_subnutrida_${ano}.csv`), content.join('\n'), 'utf-8');
})