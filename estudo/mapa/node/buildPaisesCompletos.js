const fs = require('fs');
const path = require('path');
const paises = require(path.resolve(__dirname, '..', 'metadados', 'paises.json'));
const _paises = require(path.resolve(__dirname, 'lista_paises_onu.json'));
const regioes = require(path.resolve(__dirname, 'lista_regioes_onu.json'));

const ONU = _paises.reduce((agg, pais) => Object.assign(agg, { [pais.sigla]: pais }), Object.create(null));

const PAISES = paises.map(pais => {
    let sigla = pais.sigla3;
    let onu = ONU[sigla];

    let parents = [onu.parent];
    let parent = regioes[onu.parent];
    while (parent.parent) {
        parents.push(parent.parent);
        parent = regioes[parent.parent];
    }
    while (parents.length < 3) {
        parents.push("");
    }
    parents.reverse();


    let obj = {
        codigo: onu.cod,
        sigla: pais.sigla,
        sigla3: onu.sigla,
        nome: {
            en: onu.en,
            es: onu.es,
            pt: pais.nome.pt,
        },
        parent: parents[2] || parents[1] || parents[0],
        parents: {
            continente: parents[0],
            regiao: parents[1],
            subregiao: parents[2]
        },
        ddi: pais.ddi
    }

    return obj;
})

fs.writeFileSync(path.resolve(__dirname, 'paises2.json'), JSON.stringify(PAISES, null, '\t'), { encoding: 'utf8' });