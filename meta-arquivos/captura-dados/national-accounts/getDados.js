const request = require('request-promise-native');
const path = require('path');
const { AllOldDataError } = require('../errors');
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
try {
    oldHashes = require('./hashes.json') || [];
} catch(err) {
    oldHashes = [];
}

const oldestYear = 1970;
const currentYear = (new Date()).getFullYear();
const periodos = Array(currentYear - oldestYear + 1)
    .fill('')
    .reduce((agg, _, idx) => {
        let next = oldestYear + idx;
        idx % 4 === 0 
            ? agg.push([next])
            : agg[agg.length-1].push(next);
        return agg;
    }, []);


function getPages() {
    let promises = [];

    fonte.dados.forEach(dados => {
        const { nome } = dados;
        const { link, data } = dados.post_request;

        periodos.forEach((periodos,idx) => {
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

function getPage({link, options}, tentativas = 0) {
    return request.post(link, options)
        .then(convertEncoding)
        .then(buffer => buffer.toString().replace('charset=iso-8859-1', 'charset=utf-8'))
        .catch(err => {
            if (tentativas < 5) {
                console.log('erro', tentativas, link);
                return getPage({link, options}, ++tentativas);
            }
        });
}

function compareHashes(pages) {
    const promises = pages.map(hashString);
    
    return Promise.all(promises).then(hashes => {
        const areEqual = hashes.every((hash, idx) => hash === oldHashes[idx]);
        
        if (!areEqual) {
            saveFile(null, 'hashes.json', JSON.stringify(hashes));
            return pages;
        } else {
            throw new AllOldDataError();
        }
    })
}

function savePages(pages) {
    const folder = path.resolve(__dirname, 'original');
    removeFolderFiles(folder);

    fonte.dados.forEach((dados, idx) => {
        const { nome } = dados;
        periodos.forEach((periodo, index) => {
            saveFile(folder, slugify(nome) + '-' +  periodo.join('-'), pages[idx * periodos.length + index]);
        })
    });

    return pages;
}


module.exports = { getPages, compareHashes, savePages };
