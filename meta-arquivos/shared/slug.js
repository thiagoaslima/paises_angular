const slugify = require('slugify');

function slug(str) {
    if (str) {
        str = str.replace(/['`"´’\(\)\[\]]/g, "")

        return slugify(str, {
            replacement: '-',
            remove: null,
            lower: true
        });
    }
    return str;
}

module.exports = slug