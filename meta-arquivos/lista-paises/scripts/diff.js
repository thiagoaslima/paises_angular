const fs = require('fs');
const IBGE = require('../fontes/IBGE_2015.json').dados;
const ISO = require('../fontes/ISO.json').dados;
const ONU_EN = require('../fontes/UNSD_en.json').dados;
const ITU = require('../fontes/ITU.json').dados;

const _ibge = IBGE.map(obj => obj.a3).sort();
const _iso = ISO.map(obj => obj.code_a3).sort();
const _onu = ONU_EN.map(obj => obj["ISO-alpha3 Code"]).sort();

const todos = new Set([].concat(_ibge, _iso, _onu));

const ibge = (function () {
    let comp = new Set([].concat(_iso, _onu));

    return {
        todos: _ibge,
        faltantes: Array.from(todos.values()).filter(sigla => !_ibge.includes(sigla)),
        exclusivos: _ibge.filter(sigla => !comp.has(sigla))
    }
})()

const iso = (function () {
    let comp = new Set([].concat(_ibge, _onu));

    return {
        todos: _iso,
        faltantes: Array.from(todos.values()).filter(sigla => !_iso.includes(sigla)),
        exclusivos: _iso.filter(sigla => !comp.has(sigla))
    }
})()

const onu = (function () {
    let comp = new Set([].concat(_iso, _ibge));

    return {
        todos: _onu,
        faltantes: Array.from(todos.values()).filter(sigla => !_onu.includes(sigla)),
        exclusivos: _onu.filter(sigla => !comp.has(sigla))
    }
})()

const diff_content = {
    ibge,
    iso,
    onu
};

const itu = ITU.reduce((agg, pais) => {
    const teste = ISO.find(obj => obj.name_en === pais.name)
    if (teste) {
        agg[teste.code_a3] = pais.code;
    } else {
        agg[pais.name] = pais.code;
    }
    return agg;
}, {});

fs.writeFile('diff.json', JSON.stringify(diff_content, null, 4), 'utf8', (err) => {
    if (err) console.log(err);
    console.log('diff sucess');
})

fs.writeFile('lista-siglas-a3.json', JSON.stringify(Array.from(todos.values())), 'utf8', (err) => {
    if (err) console.log(err);
    console.log('lista sucess');
})

fs.writeFile('ddi.json', JSON.stringify(itu, null, 4), 'utf8', (err) => {
    if (err) console.log(err);
    console.log('ddi sucess');
})
