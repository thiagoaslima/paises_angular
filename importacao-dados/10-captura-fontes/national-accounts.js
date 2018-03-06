const request = require('request-promise-native');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
const iconv = require('iconv-lite');

const fonteDesejada = "National Accounts Main Aggregates Database, Basic Data Selection";
const fonte = require('../fontes').find(obj => obj.fonte === fonteDesejada);
const { dados } = fonte;
const oldestYear = 2000;
const latestYear = 2016;

dados.forEach(dados => {
    const { nome } = dados;
    const { link, data } = dados.post_request;
    const slug = slugify(nome, { replacement: '-', remove: null, lower: true });

    let periodos = [];
    let current = oldestYear;
    while (current <= latestYear) {
        let length = periodos.length;
        let idx = length - 1;

        if (periodos[idx] && periodos[idx].length < 4) {
            periodos[idx].push(current);
        } else {
            periodos.push([current]);
        }

        current++;
    }

    periodos.forEach(periodos => {
        const formData = Object.assign({}, data, { Year: periodos.join(',') });

        request.post(link, { encoding: null, form: formData })
            .then((bufferResponse) => {
                let buffer = iconv.decode(bufferResponse, 'ISO-8859-1');
                buffer = iconv.encode(buffer, "utf8");

                saveNationalAccountsData(slug, periodos.join(','), buffer.toString().replace('charset=iso-8859-1', 'charset=utf-8'));
            }).catch((err) => {
                console.log(
                    "national-accounts.js",
                    "\x1b[43m\x1b[30mERROR\x1b[0m",
                    "Não foi possível acessar a página solicitada",
                    err
                );
            });
    })
});

function saveNationalAccountsData(nome, periodo, content) {
    const folder = path.resolve(__dirname, '..', '11-dados-capturados', 'national-accounts', nome);

    return fs.mkdir(folder, '0777', (err) => {
        if (!err || (err && err.code === 'EEXIST')) {
            return fs.writeFile(path.resolve(folder, periodo + '.html'), content, 'utf8', (err) => {
                if (err) throw err;
                console.log('sucess');
            })
        } else {
            throw err;
        }
    })
}