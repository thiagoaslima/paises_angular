const {
    getFonte,
    getSigla,
    slugify
} = require('../shared');

const fonte = getFonte("National Accounts Main Aggregates Database, Basic Data Selection");

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

function convertDados(json) {
    let content = Object.create(null);

    json.forEach(array => {
        let [head, ...tail] = array;
        const indicador = fonte.dados.find(obj => obj.titulo_tabela === head[3]);
        const slug = slugify(indicador.nome);
        content[slug] = createYearsProperties(tail);

        tail.forEach(obj => {
            let [name, year, currency, value] = obj;
            let item = convertTableItem(name, value, slug);
            content[slug][year][item.sigla] = item.valor;
        });
    });
}

function convertTableItem(name, value, slugIndicador) {
    let sigla = getSigla(name);
    let valor = parseInt(value.replace(/,/g, ''), 10);

    if (slugIndicador === 'total-do-pib') {
        valor = Math.round(valor / 1000000);
    }

    return { sigla, valor };
}

function createYearsProperties(array) {
    const obj = {};
    let lastName = "";

    for (let i = 0; i < array.length; i++) {
        let [nome, year] = array[i];
        if (i === 0) { lastName = nome; }
        if (nome !== lastName) { break; }
        obj[year] = [];
    }

    return obj;
}

module.exports = { convertDados, prepareToUpload }
