const { hashFile, hashStream, hashString } = require('./calculateHash');
const { convertEncoding } = require('./convertEncoding');
const { flatten, flattenOneLevel } = require('./flatten');
const { getFolderContentList } = require('./getFolderContentList');
const { getFonte, getFonteById, getVariavelCode } = require('./getFonte');
const { getPais } = require('./getPais');
const { getSigla } = require('./getSigla');
const { Logger } = require('./Logger');
const { moveFile } = require('./moveFile');
const { postFileToDatabase } = require('./postFileToDatabase');
const { readFile } = require('./readFile');
const { removeFolderFiles } = require('./removeFolderFiles');
const { runToAllCountries } = require('./runToAllCountries');
const { saveFile } = require('./saveFile');
const { slugify } = require('./slugify');
const { updateHash } = require('./updateHash');

module.exports = {
    convertEncoding,
    flatten,
    flattenOneLevel,
    getFolderContentList,
    getFonte,
    getFonteById,
    getPais,
    getSigla,
    getVariavelCode,
    hashFile,
    hashStream,
    hashString,
    Logger,
    moveFile,
    postFileToDatabase,
    readFile,
    removeFolderFiles,
    runToAllCountries,
    saveFile,
    slugify,
    updateHash
};