const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const util = require('util');
const jsdom = require('jsdom').JSDOM;
const tabletojson = require('tabletojson');
const paises = require('../paises-dicionario.json');

const readFile = util.promisify(fs.readFile);

readFile(path.resolve(__dirname, '..', '11-dados-capturados/national-accounts/pib-per-capita/2000,2001,2002,2003.html'))
    .then(content => {
        const { document } = new jsdom(content).window;
        let table = document.querySelectorAll('table')[7];
        debugger;
        let json = tabletojson.convert(table.outerHTML, {
            useFirstRowForHeadings: false,
            stripHtmlFromCells: true
        })

        return json[0].slice(1);
    })
    .then(json => {
        return json.reduce((agg, obj) => {
            const nome = obj[0],
                ano = obj[1],
                valor = obj[3];

            if (!agg[ano]) {
                agg[ano] = []
            }

            if (!paises[nome]) {
                agg[ano].push({
                    nome: nome,
                    valor: parseInt(valor.replace(',', ''), 10)
                })
            }

            return agg;
        })
    })
    .then(map => {
        Object.keys(map).forEach(ano => {
            saveData(ano, ano, JSON.stringify(map[ano], null, 4))
        })
    })


function saveData(nome, periodo, content) {
    const folder = path.resolve(__dirname, '..', '21-dados-extraidos', 'national-accounts', 'pib-per-capita');

    return mkdirp(folder, '0777', (err) => {
        if (!err || (err && err.code === 'EEXIST')) {
            return fs.writeFile(path.resolve(folder, nome + '.json'), content, 'utf8', (err) => {
                if (err) throw err;
                console.log('sucess');
            })
        } else {
            throw err;
        }
    })
}