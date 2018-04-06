// @ts-check
const { fonte, logger, periodos } = require("./configuration").CONFIG;
const { applyAllCountries } = require("./applyAllCountries");
const { compareHashes, updateHashes } = require("./manageHashes").manageHash;
const { extractContent } = require("./extractInfo");
const { getPages } = require("./getPages");
const { buildPageFilename, saveNewPages, setPageAsCurrent } = require("./managePageFiles").managePageFiles;
const { buildCSVFilename, getCSVPathToUpload, saveNewCsv, setCSVAsCurrent } = require("./manageCSVFiles").manageCSVFiles;
const { upload } = require("./upload");

exports.functions = {
    applyAllCountries,
    buildCSVFilename,
    buildPageFilename,
    compareHashes,
    extractContent,
    fonte,
    getCSVPathToUpload,
    getPages,
    logger,
    periodos,
    saveNewPages,
    saveNewCsv,
    setCSVAsCurrent,
    setPageAsCurrent,
    updateHashes,
    upload
};
