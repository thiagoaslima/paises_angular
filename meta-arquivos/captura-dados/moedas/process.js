const fs = require('fs');
const path = require('path');
const ibanpt = require('./iban-pt.json');
const ibanen = require('./iban-en.json');
const ibanes = require('./iban-es.json');
const { paises } = require('../../lista-paises/compilado/paises_completo.json');

const numpt = ibanpt.map(item => item.numero);
const numes = ibanes.map(item => item.numero);
const numen = ibanen.map(item => item.numero);
const numerosIban = new Set([...numpt, ...numen, ...numes]);

const moedas = Array.from(numerosIban).map(num => {
    const pt = ibanpt.filter(item => item.numero === num);
    const en = ibanen.filter(item => item.numero === num);
    const es = ibanes.filter(item => item.numero === num);

    return {
        pais: en.map(p => p.pais.toLowerCase()),
        moeda_pt: pt[0] ? pt[0].moeda : null,
        moeda_en: en[0] ? en[0].moeda : null,
        moeda_es: es[0] ? es[0].moeda : null,
        codigo: en[0].codigo,
        numero: en[0].numero
    };
});

fs.writeFileSync(
    path.resolve('./moedas-iban.json'),
    JSON.stringify(moedas, null, 2)
);

const faltantes = [];

const comSigla = paises.map(pais => {
    const moeda = moedas.find(moeda =>
        moeda.pais.find(
            nome =>
                nome === pais.nome.en.toLowerCase() ||
                pais.apelidos.en.includes(nome)
        )
    );

    if (!moeda) {
        faltantes.push(pais);
        return;
    }

    return {
        ...moeda,
        sigla: pais.sigla,
        pais: { ...pais.nome }
    };
});

fs.writeFileSync(
    path.resolve('./base-moedas.json'),
    JSON.stringify(comSigla, null, 2)
);
