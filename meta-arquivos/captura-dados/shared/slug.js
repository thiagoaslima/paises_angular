const slugify = require('slugify');

function slug(str) {
    str = str.replace(/['`"´’\(\)\[\]]/g, "")
    return slugify(str, {
        replacement: '-',
        remove: null,
        lower: true
    });
}

module.exports = slug