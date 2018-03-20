const cheerio =  require('cheerio');
const tabletojson = require('tabletojson');
const { flattenOneLevel } = require('../shared')

function filterTables(pages) {
    let tables = _extractTables(pages);
    return flattenOneLevel(_convertJSON(tables));
};

function _extractTables(pages) {
    return pages.map(page => {
        const $ = cheerio.load(page);
        return $('table').get(7);
    });
}

function _convertJSON(cheerioTables) {
    return cheerioTables.map(table => {
        return tabletojson.convert(cheerio.html(table), {
            useFirstRowForHeadings: false,
            stripHtmlFromCells: true
        });
    });
}

module.exports = { filterTables };
