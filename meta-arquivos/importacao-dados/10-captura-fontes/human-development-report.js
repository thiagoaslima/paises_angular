const request = require('request-promise-native');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const slugify = require('../../shared/slug');
const getFonteSync = require('../shared/getFonteSync');

const nome_fonte = "Human Development Report";
const fonte = getFonteSync(nome_fonte);

Promise.all([
    request.get(fonte.files[0]),
    request.get(fonte.files[1])
]).then(files => {
    ['summary.json', 'indicators.json'].forEach((file, idx) => {
        saveData(file, files[idx]);
    });
})

function saveData(fileName, content) {
    const folder = path.resolve(__dirname, '..', '11-dados-capturados', 'human-development-report');

    return mkdirp(folder, '0777', (err) => {
        if (!err || (err && err.code === 'EEXIST')) {
            return fs.writeFile(path.resolve(folder, fileName), content, 'utf8', (err) => {
                if (err) throw err;
                console.log('sucess');
            })
        } else {
            throw err;
        }
    })
}
