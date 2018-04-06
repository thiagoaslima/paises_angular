const path = require("path");
const fs = require("fs");
const request = require("request-promise-native");
const {
    getFonte,
    getSigla,
    getVariavelCode,
    postFileToDatabase,
    runToAllCountries,
    saveFile,
    slugify
} = require('../shared');

const fonte = getFonte("National Accounts Main Aggregates Database, Basic Data Selection");

function prepareToUpload(dados) {
    return dados.map(obj => {
        let allCountries = runToAllCountries(obj.content);
        let array = Object.keys(allCountries).map(sigla => `"${sigla}";"${allCountries[sigla]}"`);
        obj.content = [`"";${obj.variavel}`].concat(array).join("\n");
        return obj;
    })
}

function upload(dados, idx = 0) {
    const folder = path.resolve(__dirname, 'csv');
    
    const obj = dados[idx];
    const periodo = obj.periodo;
    const filename = obj.variavel + '-' + obj.periodo + '.csv';
    const filepath = path.join(folder, filename);

    return saveFile(folder, filename, obj.content).then(res => {
        return postFileToDatabase(periodo, filepath).then(res => {
            logger.info(`O arquivo ${filename} foi salvo com sucesso`);

            if (++idx < dados.length) {
                return upload(dados, idx);
            } else {
                logger.info(`Todos os arquivos foram salvos com sucesso`);
                return dados;
            }
        })
    });
}

function convertDados(json) {
    let content = [];

    json.forEach(array => {
        let [head, ...tail] = array;
        const indicador = fonte.dados.find(obj => obj.titulo_tabela === head[3]);
        
        if (!indicador) {
            debugger;
        }

        const slug = slugify(indicador.nome);
        const id = indicador.id;
        const variavel = indicador.variavel_code;

        let mapByPeriod = createYearsProperties(tail);

        tail.forEach(obj => {
            let [name, year, currency, value] = Object.values(obj);
            let item = convertTableItem(name, value, slug);
            if (!mapByPeriod[year]) { mapByPeriod[year] = {}; }
            mapByPeriod[year][item.sigla] = item.valor;
        });

        Object.keys(mapByPeriod).forEach(period => {
            content.push({
                id,
                variavel,
                periodo: period,
                content: mapByPeriod[period]
            });
        })
    });

    return content;
}

function convertTableItem(name, value, slugIndicador) {
    let sigla = getSigla(name);
    let valor = parseInt(value.replace(/,/g, ''), 10);

    if (slugIndicador === 'total-do-pib') {
        valor = Math.round(valor / 1000000);
    }

    return { sigla, valor };
}

function createYearsProperties(array, obj = {}) {
    let lastName = "";

    for (let i = 0; i < array.length; i++) {
        let nome = array[i][0], year = array[i][1];
        if (i === 0) { lastName = nome; }
        if (nome !== lastName) { break; }
        obj[year] = {};
    }

    return obj;
}

module.exports = { convertDados, prepareToUpload, upload }
