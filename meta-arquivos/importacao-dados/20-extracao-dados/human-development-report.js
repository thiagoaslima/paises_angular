const path = require('path');
const slugify = require('../../shared/slug');
const getFonteSync = require('../shared/getFonteSync');
const readFile = require('../shared/readFile');

const nome_fonte = "Human Development Report";
const fonte = getFonteSync(nome_fonte);

Promise.all([
    path.resolve(__dirname, '../11-dados-capturados/human-development-report', 'summary.json'),
    path.resolve(__dirname, '../11-dados-capturados/human-development-report', 'indicators.json')
]).then( (summary, indicators) => {
    const ids = fonte.dados.map(dados => {
        dados
    })
})