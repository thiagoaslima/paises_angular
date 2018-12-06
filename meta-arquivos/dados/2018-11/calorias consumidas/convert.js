const fs = require('fs');
const path = require('path');

var paises = require('../../../lista-paises/compilado/paises_completo.json');
let dados = require('./convertcsv.json');

// troca sigla de 3 letras pela sigla de 2 letras
dados = dados.reduce((dados, obj) => {
    const pais = paises.paises.find(pais => pais.nome.en === obj.local || pais.apelidos.en.includes(obj.local));

    if (pais) {
        dados[pais.sigla] = obj;
    } else {
        console.log(obj.local);
    }

    return dados;
}, {})

const anos = [];
let ano = 1999;
const anoCorrente = new Date().getFullYear();
while(ano < anoCorrente) {
    anos.push(`${ano}-${(ano + 2).toString().slice(2)}`);
    ano++;
}

anos.forEach(ano => {
    const content = [",indicadoressociais_13"].concat(Object.keys(dados).map(key => `"${key}","${dados[key][ano] || ""}"`));
    fs.writeFileSync(path.resolve(__dirname, 'carga', `calorias_consumidas_${ano}.csv`), content.join('\n'), 'utf-8');
})