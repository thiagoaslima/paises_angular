const fs = require("fs");
const request = require("request-promise-native");

function postFileToDatabase(periodo, filepath, tentativas = 0) {
    const MAX_TENTATIVAS = 5;

    let formData = {
        file: fs.createReadStream(filepath)
    };

    return request
        .post({
            url: `http://pesquisas.producao.ibge.gov.br/api/pesquisas/10071/periodos/${periodo}/resultados?publicacao=`,
            formData
        })
        .then(res => ({file: filepath, saved: true}))
        .catch(err => {
            if (tentativas < MAX_TENTATIVAS) {
                return postFileToDatabase(periodo, filepath, ++tentativas);
            } else {
                throw err;
            }
        });
}

module.exports = { postFileToDatabase };