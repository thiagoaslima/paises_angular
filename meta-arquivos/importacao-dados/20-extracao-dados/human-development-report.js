const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const StreamArray = require('stream-json/utils/StreamArray');
const slugify = require('../shared/slug');
const getFonteSync = require('../shared/getFonteSync');
const getSigla = require('../shared/getSigla');
const readFile = require('../shared/readFile');

const nome_fonte = "Human Development Report";
const fonte = getFonteSync(nome_fonte);

const folder = path.resolve(__dirname, '../11-dados-capturados/human-development-report')
const summaryPath = path.resolve(folder, 'summary.json');
const indicatorsPath = path.resolve(folder, 'indicators.json');

const nomeIndicadores = fonte.dados.map(obj => obj.nome_publicacao);
const idsIndicadores = [];

readFile(summaryPath, { encoding: 'utf8' })
    .then((content) => {
        const json = JSON.parse(content);
        const indicadores = json
            .filter(obj => nomeIndicadores.includes(obj.indicator))
            .map(indicador => {
                const obj = fonte.dados.find(obj => obj.nome_publicacao === indicador.indicator);
                return {
                    variavel_code: obj.variavel_code,
                    nome: obj.nome,
                    slug: slugify(obj.nome),
                    id: indicador.id
                }
            });

        processIndicators(indicadores);
    });


function processIndicators(indicadores) {
    const jsonStream = StreamArray.make();
    const indicatorsStream = fs.createReadStream(indicatorsPath, { encoding: 'utf8' });
    const ids = indicadores.map(o => o.id);
    const slugs = indicadores.reduce( (agg, o) => {
        agg[o.id] = o.slug
        return agg
    }, {})
    const valores = ids.reduce((agg, id) => {
        agg[id] = {};
        return agg;
    }, {});

    indicatorsStream.pipe(jsonStream.input);

    jsonStream.output
        .on('data', ({ index, value }) => {
            if (ids.includes(value.id)) {
                let sigla = getSigla(value.country);
                
                if (value.year === '9999') {
                    // código para ano mais recente
                    return; 
                }

                if (!valores[value.id][value.year]) {
                    valores[value.id][value.year] = {};
                }

                valores[value.id][value.year][sigla] = value.value;
            }
        })
        .on('end', () => saveFiles(valores, slugs))
}

function saveFiles(valores, slugs) {
    Object.keys(valores).forEach(id => {
        let obj = valores[id];
        
        Object.keys(obj).forEach(periodo => {
            let content = obj[periodo];
            const folder = path.resolve(__dirname, '../21-dados-extraidos/human-development-report', slugs[id])
            
            return mkdirp(folder, '0777', (err) => {
                if (!err || (err && err.code === 'EEXIST')) {
                    return fs.writeFile(path.resolve(folder, periodo + '.json'), JSON.stringify(content, null, 4), 'utf8', (err) => {
                        if (err) throw err;
                        console.log('sucess');
                    })
                } else {
                    throw err;
                }
            })
        })

    })
}