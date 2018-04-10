//@ts-check
const fs = require("fs");
const path = require("path");
const { logger } = require("./configuration").CONFIG;
const { hashString, saveFile } = require("../../shared");

const hashFilepath = path.resolve(__dirname, "hashes.json");

/** 
 * @type { {[id: number]: { [periodo: string]: string}}} 
*/
const oldHashes = (function () {
    try {
        let oldHashes = fs.readFileSync(hashFilepath, "utf-8");
        return JSON.parse(oldHashes);
    }
    catch (err) { return {}; }
})();

/**
 * @typedef { {id: number, periodo: number, slug: string, variavel: string, rawData: string, hash?: string } } IndicatorDescriptor - objects containing indicator metadata and html
 */

/** 
 * @param { Array<IndicatorDescriptor>} array 
 * @return { Array<IndicatorDescriptor>} All indicators that must be created or updated 
*/
function compareHashes(array) {
    let filteredArray = [];

    for (let obj of array) {
        obj.hash = hashString(obj.rawData);

        if (!hasOldHash(obj) || obj.hash !== getOldHash(obj)) {
            filteredArray.push(obj);
        }
    }

    return filteredArray;
}

/** 
 * @param { {id: number, periodo: number} } params
 * @return { boolean } 
*/
function hasOldHash(params) {
    return Boolean(oldHashes[params.id] && oldHashes[params.id][params.periodo])
}

/** 
 * @param { {id: number, periodo: number} } params
 * @return { string | null } 
*/
function getOldHash(params) {
    const { id, periodo } = params;
    return hasOldHash({ id, periodo }) ? oldHashes[id][periodo] : null;
}

/** 
 * @param { {id: number, periodo: number, hash: string} } params
 * @return { Promise<{id: number, periodo: number, hash: string}> }
*/
function updateHashes(params) {
    const { id, periodo, hash } = params;
    logger.verbose(`Atualizando o hash do indicador ${id}, periodo ${periodo}`)

    if (!oldHashes[id]) { oldHashes[id] = {} }
    oldHashes[id][periodo] = hash;

    return saveFile(null, hashFilepath, JSON.stringify(oldHashes, null, 4)).then(res => {
        logger.verbose(`O hash do indicador ${id}, periodo ${periodo}, foi ayualizado com sucesso`);
        return params;
    })
}

exports.manageHash = { compareHashes, updateHashes };
