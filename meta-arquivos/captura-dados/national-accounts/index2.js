const { errorHandler } = require("../errors/errorHandler");
const {
    applyAllCountries,
    compareHashes,
    extractContent,
    getPages,
    logger,
    prepareCSVContent,
    saveNewPages,
    saveNewCsv,
    upload
} = require("./src").functions;

getPages()
    .then(compareHashes)
    .then(saveNewPages)
    .then(extractContent)
    .then(applyAllCountries)
    .then(prepareCSVContent)
    .then(saveNewCsv)
    .then(upload)
    .catch(err => {
        errorHandler(logger)(err);
    });
    
    