//@ts-check
const fs = require("fs");
const path = require("path");
const { moveFile, removeFolderFiles, saveFile } = require("../../shared");
const { logger } = require("./configuration").CONFIG;

/**
 * @typedef { {id: number, periodo: number, slug: string, variavel: string, rawData: string, hash?: string } } IndicatorDescriptor - objects containing indicator metadata and html
 */

const folders = {
    "base": path.resolve(__dirname, "..", "originals"),
    "new": path.resolve(__dirname, "..", "originals", "new"),
    "current": path.resolve(__dirname, "..", "originals", "current")
};

Object.keys(folders).forEach(key => {
    const dir = folders[key];
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
});

/** 
 * @param { Array<IndicatorDescriptor>} array 
 * @return { Promise<IndicatorDescriptor[]>} All indicators that must be created or updated 
*/
function saveNewPages(array) {
    logger.verbose('apagando páginas que porventura tenham ficado na pasta de arquivos novos');
    removeFolderFiles(folders.new);

    logger.verbose('gravando novas páginas para registro');
    const foldernameMessage = path.relative(path.resolve(__dirname, '..'), folders.new);
    let promises = array.map(obj => {
        const filename = obj.slug + '-' + obj.periodo.toString(10) + '.html';
        return saveFile(folders.new, filename, obj.rawData).then(({ fileName, saved }) => {
            logger.info(`O arquivo ${fileName} foi gravado com sucesso na pasta ${foldernameMessage}`);
        });
    });

    return Promise.all(promises).then(_ => array);
}

/**
 * @param { string } slug
 * @param { number } periodo
 * @return { string }
 */
function buildPageFilename(slug, periodo) {
    return slug + '-' + periodo.toString(10) + '.html';
}

function setPageAsCurrent(filename) {
    return moveFile(path.join(folders.new, filename), path.join(folders.current, filename));
}

exports.managePageFiles = { buildPageFilename, saveNewPages, setPageAsCurrent };
