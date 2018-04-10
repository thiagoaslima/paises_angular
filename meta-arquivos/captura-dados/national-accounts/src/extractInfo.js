//@ts-check
const cheerio = require("cheerio");
const tabletojson = require("tabletojson");
const { getSigla, slugify } = require("../../shared");

/**
 * @typedef { {id: number, periodo: number, slug: string, variavel: string, rawData: string, hash: string } } Page - objects containing indicator metadata and html
 * @typedef { {id: number, periodo: number, slug: string, variavel: string, content: {[sigla: string]: string}, hash: string } } Content - objects containing indicator
 */

/**
 * @param { Array<Page> } array
 * @returns { Array<Content> }
 */
function extractContent(array) {
    return array.map(obj => {
        const table = extractTable(obj.rawData);
        if (!table) { return null; }
        const json = convertToJSON(table);
        const valores = convertToSiglaValor(obj.slug, json[0]);
        
        let content = Object.assign({}, obj, {content: valores});
        delete(content.rawData);

        return content;
    }).filter(Boolean);
}

/** 
 * @param { string } page - Page.rawData 
 * @return { string }
*/
function extractTable(page) {
    // @ts-ignore
    const $ = cheerio.load(page);
    const table = $('table').get(7);
    return cheerio(table).find('.amaheader').length > 0
        ? table
        : null;
}

/**
 * @param { string } table 
 * @returns { string[][] }
 */
function convertToJSON(table) {
    // @ts-ignore
    return tabletojson.convert(cheerio.html(table), {
        useFirstRowForHeadings: false,
        stripHtmlFromCells: true
    });
}


function convertToSiglaValor(slug, array) {
    let [head, ...tail] = array;

    return tail.reduce((agg, obj) => {
        // @ts-ignore
        let [name, year, currency, value] = Object.values(obj);
        let { sigla, valor } = convertTableItem(name, value, slug);
        agg[sigla] = valor;
        return agg;
    }, {});
}

function convertTableItem(name, value, slugIndicador) {
    let sigla = getSigla(name) || slugify(name);
    let valor = parseInt(value.replace(/,/g, ''), 10);

    if (slugIndicador === 'total-do-pib') {
        valor = Math.round(valor / 1000000);
    }

    return { sigla, valor };
}

exports.extractContent = extractContent;