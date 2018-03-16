const fs = require('fs');
const path = require('path');
const request = require('request-promise-native');
const paises = require('../../lista-paises/compilado/paises_completo.json').paises;
const saveFile = require('../shared/saveFile');

paises.forEach(pais => {
    if (!pais.onu) { return; }

    request(`https://servicodados.ibge.gov.br/api/v1/paises/olimpicos/valores/pais/${pais.sigla}`)
        .then(res => JSON.parse(res))
        .then(json => json.find(obj => obj.indicador === 44))
        .then(obj => obj.valor.replace(/<\/p><p>/g, "\n").replace("<p>", "").replace("</p>", "").trim())
        .then(historico => {
            saveFile(path.resolve(__dirname, 'arquivos'), pais.slug + '.txt', historico);
        })

})

let listaPaises = paises.filter(pais => pais.onu)
    .sort((p1, p2) => p1.slug > p2.slug ? 1 : -1)
    .map(pais => `${pais.sigla};${pais.nome.pt};${pais.nome.en}`)

saveFile(path.resolve(__dirname), 'lista-paises.csv', ['sigla;português;inglês'].concat(listaPaises).join("\n"));
