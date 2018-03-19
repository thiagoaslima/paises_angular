const {
    getFonte,
    getSigla,
    slugify
} = require('../shared');

const fonte = getFonte("Human Development Report");

function prepareToUpload(dados) {
    const content = [];
    Object.keys(dados).forEach(slug => {
        let code = getVariavelCode("National Accounts Main Aggregates Database, Basic Data Selection", slug);
        Object.keys(dados[slug]).forEach(periodo => {
            let obj = runToAllCountries(dados[slug][periodo]);
            let array = Object.keys(obj).map(sigla => `"${sigla}";"${obj[sigla]}"`);
            let item = ["", code].concat(array).join("\n");
            constent.push(item);
        })
    })
    return content;
}

module.exports = { prepareToUpload };
