const {
    getFonte,
    getSigla,
    getVariavelCode,
    runToAllCountries,
    slugify
} = require('../shared');

const fonte = getFonte("Human Development Report");

function prepareToUpload(dados) {
    const content = [];
    Object.keys(dados).forEach(slug => {
        let code = getVariavelCode("Human Development Report", slug);
        Object.keys(dados[slug]).forEach(periodo => {
            let obj = runToAllCountries(dados[slug][periodo]);
            let array = Object.keys(obj).map(sigla => `"${sigla}";"${obj[sigla]}"`);
            let item = [`"";${code}`].concat(array).join("\n");
            content.push(item);
        })
    })
    return content;
}

module.exports = { prepareToUpload };
