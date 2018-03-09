const request = require('request-promise-native');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const slugify = require('../../shared/slug');

const fonteDesejada = "The World Factbook";
const fonte = require('../fontes').find(obj => obj.fonte === fonteDesejada);
const { dados } = fonte;

dados.forEach(dados => {
    const { nome, link } = dados;
    const slug = slugify(nome);

    request.get(link, { encoding: "utf8" })
        .then(saveData.bind(null, slug));
})

function saveData(fileName, content) {
    const folder = path.resolve(__dirname, '..', '11-dados-capturados', 'world-factbook');

    return mkdirp(folder, '0777', (err) => {
        if (!err || (err && err.code === 'EEXIST')) {
            return fs.writeFile(path.resolve(folder, fileName + '.html'), content, 'utf8', (err) => {
                if (err) throw err;
                console.log('sucess');
            })
        } else {
            throw err;
        }
    })
}