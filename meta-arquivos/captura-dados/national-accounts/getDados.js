const request = require('request-promise-native');
const oldHashes = require('./hashes.json');
const { AllOldDataError } = require('../errors');
const {
    convertEncoding,
    getFonte,
    hashString,
    slugify,
    saveFile
} = require('../shared');

const fonte = getFonte("National Accounts Main Aggregates Database, Basic Data Selection");

const oldestYear = 2000;
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

        periodos.forEach(periodos => {
            let promise = getPage(buildRequestParams(link, data, periodos))
                .then(convertEncoding)
                .then(buffer => buffer.toString().replace('charset=iso-8859-1', 'charset=utf-8'));
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

function getPage({link, options}) {
    return request.post(link, options);
}

function compareHashes(pages) {
    const hashes = pages.map(hashString);
    console.log(hashes);
    const areEqual = hashes.every((hash, idx) => hash === oldHashes[idx]);

    if (!areEqual) {
        saveFile(null, 'hashes.json', JSON.stringify(hashes));
        return pages
    } else {
        throw new AllOldDataError();
    }
}


module.exports = { getPages, compareHashes };
