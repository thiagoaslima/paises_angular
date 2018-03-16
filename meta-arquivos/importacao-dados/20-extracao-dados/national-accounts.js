const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const util = require('util');
const cheerio = require('cheerio');
const tabletojson = require('tabletojson');
const dicionario = require('../../lista-paises/compilado/nomeen_sigla_dicionario.json');
const slug = require('../shared/slug');
const readFile = util.promisify(fs.readFile);

const repository = path.resolve(__dirname, '..', '11-dados-capturados/national-accounts/');
const folders = fs.readdirSync(repository);

folders.forEach(folder => {
    const files = fs.readdirSync(path.resolve(repository, folder));

    files.forEach(file => {

        readFile(path.resolve(repository, folder, file))
            .then(content => {
                const $ = cheerio.load(content);
                let table = $('table').eq(7);
                let json = tabletojson.convert($.html(table), {
                    useFirstRowForHeadings: false,
                    stripHtmlFromCells: true
                })

                return json[0].slice(1);
            })
            .then(json => {
                return json.reduce((agg, obj) => {
                    const nome = obj[0];
                    const ano = obj[1];
                    const value = obj[3];
                    const _slug = slug(nome);

                    let valor = parseInt(value.replace(/,/g, ''), 10);
                    
                    if (folder === 'total-do-pib') {
                        valor = Math.round(valor / 1000000);
                    }

                    if (!agg[ano]) {
                        agg[ano] = {}
                    }

                    if (dicionario[_slug]) {
                        agg[ano][dicionario[_slug] || nome] = valor;
                    }

                    return agg;
                }, {})
            })
            .then(map => {
                Object.keys(map).forEach(ano => {
                    saveData(ano, folder, JSON.stringify(map[ano], null, 4))
                })
            });
    })
})


function saveData(periodo, indicador, content) {
    const folder = path.resolve(__dirname, '..', '21-dados-extraidos', 'national-accounts', indicador);

    return mkdirp(folder, '0777', (err) => {
        if (!err || (err && err.code === 'EEXIST')) {
            return fs.writeFile(path.resolve(folder, periodo + '.json'), content, 'utf8', (err) => {
                if (err) throw err;
                console.log('sucess');
            })
        } else {
            throw err;
        }
    })
}