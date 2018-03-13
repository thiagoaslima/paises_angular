const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const util = require('util');
const paises = require('../../lista-paises/compilado/paises_resumido.json');
const slugify = require('../shared/slug');

const fonteDesejada = "The World Factbook";
const fonte = require('../fontes').find(obj => obj.fonte === fonteDesejada);
const { dados } = fonte;

const readFile = util.promisify(fs.readFile);

const repository = path.resolve(__dirname, '..', '21-dados-extraidos/world-factbook/');

dados.forEach(dados => {
    if (dados.ignore) { return; }

    const { nome, link, variavel_codigo } = dados;
    const slug = slugify(nome);

    readFile(path.resolve(repository, slug + '.json'))
        .then(content => {
            content = JSON.parse(content);

            return paises.map(pais => {
                let valor = content[pais.sigla] || '99999999999998'
                return `"${pais.sigla}";"${valor}"`;
            })
        }).then(fileContent => {
            saveData(slug, ";" + variavel_codigo + "\n" + fileContent.join("\n"));
        })
})

function saveData(fileName, content) {
    const folder = path.resolve(__dirname, '..', '31-arquivos-importacao', 'world-factbook');

    return mkdirp(folder, '0777', (err) => {
        if (!err || (err && err.code === 'EEXIST')) {
            return fs.writeFile(path.resolve(folder, fileName + '.csv'), content, 'utf8', (err) => {
                if (err) throw err;
                console.log('sucess');
            })
        } else {
            throw err;
        }
    })
}