//@ts-check
const { runToAllCountries } = require("../../shared");

/**
 * @typedef { {id: number, periodo: number, slug: string, variavel: string, content: {[sigla: string]: string}, hash?: string } } Content - objects containing indicator metadata
 */

/**
 * @param { Content[] } array
 */
function applyAllCountries(array) {
    debugger;

    return array.map(obj => {
        obj.content = runToAllCountries(obj.content);
        return obj;
    })
}

module.exports = { applyAllCountries };
