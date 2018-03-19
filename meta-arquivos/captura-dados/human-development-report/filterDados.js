const StreamArray = require('stream-json/utils/StreamArray');

const slugify = require('../shared/slugify');
const { 
    getFonte,
    getSigla,
    hashStream 
} = require('../shared');

const fonte = getFonte("Human Development Report");

function filterSummary(summary) {
    const json = JSON.parse(summary);
    const nomeIndicadores = fonte.dados.map(obj => obj.nome_publicacao);

    console.log('filterSummary')

    return json.filter(obj => nomeIndicadores.includes(obj.indicator))
        .map(indicador => {
            const obj = fonte.dados.find(obj => obj.nome_publicacao === indicador.indicator);
            return {
                variavel_code: obj.variavel_code,
                nome: obj.nome,
                slug: slugify(obj.nome),
                id: indicador.id
            }
        });
}

function filterIndicators (indicatorsStream, indicadores) {
    const jsonStream = StreamArray.make();
    indicatorsStream.pipe(jsonStream.input);

    console.log('filterIndicators')

    const values = {};
    Object.defineProperties(values, {
        'ids': {
            value: indicadores.map(o => o.id),
            enumerable: false
        },
        'slugs': {
            value: indicadores.map(o => o.slug),
            enumerable: false
        }
    });
    const hash = hashStream(indicatorsStream);

    return new Promise((resolve, reject) => {
        jsonStream.output
            .on('data', ({ index, value }) => {
                convertIndicators(value, values);
            })
            .on('end', () => hash.then(hash => resolve({hash, values })))
            .on('error', (err) => reject(err));
    })

}

function convertIndicators({country, id, value, year}, values) {
    if (
        values.ids.includes(id)
        && year !== '9999' // atalho para ano mais recente
    ) {
        let sigla = getSigla(country);
        let slug = values.slugs[values.ids.indexOf(id)];    

        if (!values[slug]) { values[slug] = {}; }
        if (!values[slug][year]) { values[slug][year] = {}; }

        values[slug][year][sigla] = value;
    }
}


module.exports = { filterSummary, filterIndicators }