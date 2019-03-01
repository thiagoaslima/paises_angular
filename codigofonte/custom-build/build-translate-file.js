const pt = require('../ClientApp/locale/paises-pt.json');
const en = require('../ClientApp/locale/paises-en.json');
const es = require('../ClientApp/locale/paises-es.json');

const fs = require('fs');
const path = require('path');

const translateContent = { pt, en, es };

fs.writeFileSync(
    path.resolve(__dirname, '../wwwroot/translation/translate.js'),
    `var TRANSLATION = ${JSON.stringify(translateContent)}`,
    { encoding: 'utf-8' }
);
