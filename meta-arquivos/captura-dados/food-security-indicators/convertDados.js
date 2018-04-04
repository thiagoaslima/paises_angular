const {
    getFonte,
    getSigla,
    getVariavelCode,
    runToAllCountries,
    slugify
} = require('../shared');

const fonte = getFonte("Food security indicators");
let code = getVariavelCode("Food security indicators", slugify(fonte.dados[0].nome));
function prepareToUpload(dados) {
    dados = extractPeriod(dados);
    let content = [];
    dados.forEach(({periodo, dados}) => {
        let obj = runToAllCountries(dados);
        console.log(dados) /*?*/
        let array = Object.keys(obj).map(sigla => `"${sigla}";"${obj[sigla]}"`);
        let item = [`"";${code}`].concat(array).join("\n");
        content.push(item);
    })
    return content;
}

function extractPeriod({periodos, dados}) {
    return periodos.map(periodo => {
        return {
            periodo,
            dados: dados.reduce( (agg, obj) => {
                agg[obj.sigla] = obj[periodo];
                return agg;
            }, {})
        }
    })
}

module.exports = { prepareToUpload }
