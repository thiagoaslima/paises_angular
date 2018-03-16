const cheerio =  require('cheerio');
const tabletojson = require('tabletojson');

function filterTables(pages) {
    let tables = extractTables(pages)
    return convertJSON(tables)
};

function extractTables(pages) {
    return pages.map(page => {
        const $ = cheerio.load(page);
        return $('table').eq(7);
    })
}

function convertJSON(tables) {
    return tables.map(table => {
        return tabletojson.convert(table, {
            useFirstRowForHeadings: false,
            stripHtmlFromCells: true
        }).slice(1)
    })
}

module.exports = { filterTables };
