const fs = require('fs');
const path = require('path');
const util = require('util');
const slugify = require('../shared/slug');

const readFile = util.promisify(fs.readFile);

const fileContent = fs.readFileSync(path.resolve(__dirname, '..', 'fontes.json'), { encoding: 'utf8'})
const json = JSON.parse(fileContent);

function getFonteSync(str) {
    const slug = slugify(str);
    const fonte = json.find(obj => slugify(obj.fonte) === slug);
    
    if (!fonte) {
        console.log(
            "getFonte",
            "\x1b[41m\x1b[30m",
            "WARN",
            "\x1b[0m\x1b[31m",
            "Não foi possível encontrar a fonte desejada",
            err
        )
        throw new Error('Não foi possível encontrar a fonte' + str);
    }
    
    return fonte;
}

module.exports = getFonteSync;
