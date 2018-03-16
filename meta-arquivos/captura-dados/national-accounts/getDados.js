const request = require('request-promise-native');
const slugify = require('../shared/slug');
const convertEncoding = require('../shared/convertEncoding');
const getFonteSync = require('../shared/getFonteSync');
const fonte = getFonteSync("National Accounts Main Aggregates Database, Basic Data Selection");

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


function getTables() {
    let promises = [];

    fonte.dados.forEach(dados => {
        const { nome } = dados;
        const slug = slugify(nome);
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


module.exports = { getTables };
