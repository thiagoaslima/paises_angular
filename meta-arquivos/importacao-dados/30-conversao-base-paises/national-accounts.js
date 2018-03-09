const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const util = require('util');
const paises = require('../../lista-paises/compilado/paises_resumido.json');

const readFile = util.promisify(fs.readFile);

const repository = path.resolve(__dirname, '..', '21-dados-extraidos/national-accounts/');
const folders = fs.readdirSync(repository);

folders.forEach(folder => {
    const files = fs.readdirSync(path.resolve(repository, folder));

    files.forEach(file => {
        readFile(path.resolve(repository, folder, file))
            .then(content => {
                content = JSON.parse(content);

                return paises.map(pais => {
                    let valor = content[pais.sigla] || '99999999999998'
                    return `"${pais.sigla}";"${valor}"`;
                })
            }).then(array => {
                let header;
                switch (folder) {
                    case 'total-do-pib':
                        header = ',economia_18';
                        break;
                    case 'pib-per-capita':
                        header = ',economia_19';
                }

                return header + "\n" + array.join("\n");
            }).then(fileContent => {
                saveData(file.replace('.json', ''), folder, fileContent);
            })
    })
})

function saveData(fileName, indicador, content) {
    const folder = path.resolve(__dirname, '..', '31-arquivos-importacao', 'national-accounts', indicador);

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