const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');
const util = require('util');
const cheerio = require('cheerio');
const dicionario = require('../../lista-paises/compilado/nomeen_sigla_dicionario.json');
const slug = require('../../shared/slug');
const readFile = util.promisify(fs.readFile);

const repository = path.resolve(__dirname, '..', '11-dados-capturados/world-factbook/');
const files = fs.readdirSync(repository);

files.forEach(file => {
    readFile(path.resolve(repository, file))
        .then(content => {
            file = file.replace('.html', '');
            const $ = cheerio.load(content);
            let $table = $('#fieldListing');
            let json;

            switch (file) {
                case 'extensao-territorial':
                    json = extractArea($table);
                    break;

                case 'capital':
                    json = extractCapital($table);
                    break;

                case 'tipo-de-governo':
                    json = extractTipo($table);
                    break;

                case 'chefe-de-governo':
                    json = extractChefeGoverno($table);
                    break;

                case 'chefe-de-estado':
                    json = extractChefeEstado($table);
                    break;

            }

            if (json) {
                json = convertJSON(json);
            }

            saveData(file, JSON.stringify(json, null, 4));
        })
})

function extractArea($table) {
    let $trs = $table.find('tr[id]');

    return Array.from($trs).map($tr => {
        const $ = cheerio.load($tr);
        let country = $('.country');
        let fieldData = $('.fieldData');
        
        const total = fieldData.text().split('\n').filter(Boolean)[0].split('sq km')[0];
         let valor = total.replace('total:', '').trim().replace(/,/g, '')

        if (valor.indexOf('million') >= 0) {
            valor = parseFloat(valor.replace('million', '').trim());
            valor = valor * Math.pow(10, 6);
        }

        return {
            pais: country.text(),
            valor
        }
    })
}

function extractCapital($table) {
    let $trs = $table.find('tr[id]');

    return Array.from($trs).map($tr => {
        const $ = cheerio.load($tr);
        let country = $('.country');
        let fieldData = $('.fieldData');
        
        const total = fieldData.text().split('\n').filter(Boolean)[0];
         let valor = total.replace('name:', '').trim()

        return {
            pais: country.text(),
            valor
        }
    })
}

function extractTipo($table) {
    let $trs = $table.find('tr[id]');

    return Array.from($trs).map($tr => {
        const $ = cheerio.load($tr);
        let country = $('.country');
        let fieldData = $('.fieldData');
        
        const valor = fieldData.text().trim()

        return {
            pais: country.text(),
            valor
        }
    })
}

function extractChefeGoverno($table) {
    let $trs = $table.find('tr[id]');
    debugger;

    return Array.from($trs).map($tr => {
        const $ = cheerio.load($tr);
        let country = $('.country');
        let fieldData = $('.fieldData');
        
        let els = fieldData.children('strong');
        let text;
        els.each((i, el) => {
            if (
                el.tagName == 'strong' && 
                el.firstChild.data.indexOf('head of government') >= 0
            ) {
                text = el.next.data.trim();
            }
        })       

        return {
            pais: country.text(),
            valor: text
        }
    })
}

function extractChefeEstado($table) {
    let $trs = $table.find('tr[id]');
    debugger;

    return Array.from($trs).map($tr => {
        const $ = cheerio.load($tr);
        let country = $('.country');
        let fieldData = $('.fieldData');
        
        let els = fieldData.children('strong');
        let text;
        els.each((i, el) => {
            if (
                el.tagName == 'strong' && 
                el.firstChild.data.indexOf('chief of state') >= 0
            ) {
                text = el.next.data.trim();
            }
        })       

        return {
            pais: country.text(),
            valor
        }
    })
}

function convertJSON(json) {
    return json.reduce( (agg, obj) => {
        let sigla = dicionario[slug(obj.pais)];
        if (sigla) {
            agg[sigla] = obj.valor;
        }
        return agg;
    }, {});
}

function saveData(fileName, content) {
    const folder = path.resolve(__dirname, '..', '21-dados-extraidos', 'world-factbook');

    return mkdirp(folder, '0777', (err) => {
        if (!err || (err && err.code === 'EEXIST')) {
            return fs.writeFile(path.resolve(folder, fileName + '.json'), content, 'utf8', (err) => {
                if (err) throw err;
                console.log('sucess');
            })
        } else {
            throw err;
        }
    })
}