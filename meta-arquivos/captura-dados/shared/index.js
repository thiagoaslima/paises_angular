const { hashFile, hashStream, hashString } = require('./calculateHash');
const { convertEncoding } = require('./convertEncoding');
const { flatten, flattenOneLevel } = require('./flatten');
const { getFonte, getVariavelCode } = require('./getFonte');
const { getPais } = require('./getPais');
const { getSigla } = require('./getSigla');
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
    getFonte,
    getPais,
    getSigla,
    getVariavelCode,
    hashFile,
    hashStream,
    hashString,
    readFile,
    removeFolderFiles,
    runToAllCountries,
    saveFile,
    slugify,
    updateHash
};