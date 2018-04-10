//@ts-check
const request = require("request-promise-native");
const { convertEncoding, slugify } = require("../../shared");
const { fonte, logger, periodos } = require('./configuration').CONFIG;

function getPages() {
    let requests = [];

    fonte.dados.forEach(obj => {
        const { nome } = obj;
        const { link, data } = obj.post_request;

        periodos.forEach((periodo, idx) => {
            requests.push({
                id: obj.id,
                slug: slugify(nome),
                variavel: obj.variavel_code,
                periodo: periodo,
                params: buildRequestParams(link, data, periodo)
            })
        });
    });

    return manageRequests(requests);
}


function buildRequestParams(link, data, periodo) {
    const formData = Object.assign({}, data, { Year: periodo });

    return {
        link,
        options: {
            encoding: null,
            form: formData
        }
    }
}

function manageRequests(requests, idx = 0, responses = []) {
    const PACE = 15;
    
    const set = requests.slice(idx, idx+PACE);

    if (set.length === 0) {
        return responses;
    }

    return Promise.all( 
        set.map(obj => getPage(obj.params).then(page => {
            responses.push({
                id: obj.id,
                slug: obj.slug,
                variavel: obj.variavel,
                periodo: obj.periodo,
                rawData: page
            });
        }))
    ).then(_ => manageRequests(requests, idx + PACE, responses));

}

function getPage({ link, options }, tentativas = 0) {
    const MAX_TENTATIVAS = 5;
    logger.verbose(`tentativa ${tentativas + 1}: abrindo requisição ${JSON.stringify(options.form)}`);

    return request.post(link, options)
        .then(convertEncoding)
        .then(buffer => {
            logger.verbose(`tentativa ${tentativas + 1}: sucesso na requisição ${JSON.stringify(options.form)}`);
            return buffer.toString().replace('charset=iso-8859-1', 'charset=utf-8')
        })
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

exports.getPages = getPages;