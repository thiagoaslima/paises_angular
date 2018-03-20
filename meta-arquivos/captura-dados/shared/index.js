const { hashFile, hashStream, hashString } = require('./calculateHash');
const convertEncoding = require('./convertEncoding');
const { flatten, flattenOneLevel } = require('./flatten');
const { getFonte, getVariavelCode} = require('./getFonte');
const getSigla = require('./getSigla');
const readFile = require('./readFile');
const runToAllCountries = require('./runToAllCountries');
const saveFile = require('./saveFile');
const slugify = require('./slugify');
const updateHash = require('./updateHash');

module.exports = {
    convertEncoding,
    flatten,
    flattenOneLevel,
    getFonte,
    getSigla,
    getVariavelCode,
    hashFile,
    hashStream,
    hashString,
    readFile,
    runToAllCountries,
    saveFile,
    slugify,
    updateHash
};