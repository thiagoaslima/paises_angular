const _slugify = require('slugify');

function slugify(str) {
    str = str.replace(/['`"´’\(\)\[\]]/g, "")
    return _slugify(str, {
        replacement: '-',
        remove: null,
        lower: true
    });
}

module.exports = { slugify };