//@ts-check
const fs = require("fs");
const path = require("path");
const { moveFile, removeFolderFiles, saveFile } = require("../../shared");
const { logger } = require("./configuration").CONFIG;

/**
 * @typedef { {id: number, periodo: number, slug: string, variavel: string, content: {[sigla: string]: string}, hash?: string } } Content - objects containing indicator metadata
 */

const folders = {
    "base": path.resolve(__dirname, "..", "csv"),
    "new": path.resolve(__dirname, "..", "csv", "new"),
    "current": path.resolve(__dirname, "..", "csv", "current")
};

Object.keys(folders).forEach(key => {
    const dir = folders[key];
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
});

/** 
 * @param { Array<Content>} array 
 * @return { Promise<Content[]>} All indicators that must be created or updated 
*/
function saveNewCsv(array) {
    logger.verbose('apagando csv que porventura tenham ficado na pasta de arquivos novos');
    removeFolderFiles(folders.new);

    logger.verbose('gravando novos csv para registro');
    const foldernameMessage = path.relative(path.resolve(__dirname,'..'), folders.new);
    let promises = array.map(obj => {
        const filename = buildCSVFilename(obj.slug, obj.periodo);
        return saveFile(folders.new, filename, JSON.stringify(obj.content, null, 4)).then(({ fileName, saved }) => {
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
function buildCSVFilename(slug, periodo) {
    return slug + '-' + periodo.toString(10) + '.csv';
}

function getCSVPathToUpload(filename) {
    return path.join(folders.new, filename);
}

function setCSVAsCurrent(filename) {
    return moveFile(path.join(folders.new, filename), path.join(folders.current, filename));
}

exports.manageCSVFiles = { saveNewCsv, getCSVPathToUpload, buildCSVFilename, setCSVAsCurrent };
