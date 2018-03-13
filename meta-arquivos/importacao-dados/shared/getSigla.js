const slugify = require('../shared/slug');
const DICIONARIO = require('../../lista-paises/compilado/nomeen_sigla_dicionario.json');

function getSigla(name) {
    let slug = slugify(name);
    return DICIONARIO[slug];
}

module.exports = getSigla;