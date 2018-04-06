const request = require('request-promise-native');
const path = require('path');

const { logger } = require('./logger');
const { NoNewData } = require('../errors');
const {
    convertEncoding,
    getFonte,
    hashString,
    removeFolderFiles,
    slugify,
    saveFile
} = require('../shared');

const fonte = getFonte("National Accounts Main Aggregates Database, Basic Data Selection");

let oldHashes;
try { oldHashes = require('./hashes.json'); }
catch (err) { oldHashes = []; }

const oldestYear = 1970;
const currentYear = (new Date()).getFullYear();
const periodos = Array(currentYear - oldestYear + 1)
    .fill('')
    .reduce((agg, _, idx) => {
        let next = oldestYear + idx;
        idx % 4 === 0
            ? agg.push([next])
            : agg[agg.length - 1].push(next);
        return agg;
    }, []);


function getPages() {
    let promises = [];

    fonte.dados.forEach(dados => {
        const { nome } = dados;
        const { link, data } = dados.post_request;

        periodos.forEach((periodos, idx) => {
            let promise = getPage(buildRequestParams(link, data, periodos))

            promises.push(promise);
        });
    });

    return Promise.all(promises);
}

function buildRequestParams(link, data, periodos) {
    const formData = Object.assign({}, data, { Year: periodos.join(',') });

    return {
        link,
        options: {
            encoding: null,
            form: formData
        }
    }
}

function getPage({ link, options }, tentativas = 0) {
    const MAX_TENTATIVAS = 5;
    logger.verbose(`tentativa ${tentativas + 1}: abrindo requisição ${JSON.stringify(options.form)}`);

    return request.post(link, options)
        .then(convertEncoding)
        .then(buffer => buffer.toString().replace('charset=iso-8859-1', 'charset=utf-8'))
        .catch(err => {
            if (tentativas < MAX_TENTATIVAS) {
                logger.info(`tentativa ${tentativas + 1}: erro no acesso aos dados da requisição ${JSON.stringify(options.form)}`);
                return getPage({ link, options }, ++tentativas);
            } else {
                logger.warn(`tentativa ${tentativas + 1}: Não foi possível acessar resposta da requisição ${JSON.stringify(options.form)}`);
                throw err;
            }
        });
}

function compareHashes(pages) {
    const promises = pages.map(hashString);

    return Promise.all(promises).then(hashes => {
        const areEqual = hashes.every((hash, idx) => hash === oldHashes[idx]);

        if (!areEqual) {
            logger.verbose('Hashes diferem. Há dados novos que devem ser capturados.');
            saveFile(null, 'hashes.json', JSON.stringify(hashes));
            return pages;
        } else {
            throw new NoNewData();
        }
    })
}

function savePages(pages) {
    const folder = path.resolve(__dirname, 'originais');
    logger.verbose('gravando páginas para registro');

    try {
        removeFolderFiles(folder);
        logger.verbose('pasta com arquivos originais apagada');
    } catch (err) {
        switch (err.name) {
            case 'FolderDoNotExist':
                break;
            default:
                throw err;
        }
    }

    fonte.dados.forEach((dados, idx) => {
        const { nome } = dados;
        periodos.forEach((periodo, index) => {
            const filename = slugify(nome) + '-' + periodo.join('-') + '.html';
            saveFile(folder, filename, pages[idx * periodos.length + index])
                .then( ({fileName, saved}) => {
                    logger.info(`O arquivo ${fileName} foi gravado com sucesso`);
                });
        })
    });

    return pages;
}

module.exports = { getPages, compareHashes, savePages };
