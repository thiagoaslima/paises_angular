//@ts-check
const fs = require("fs");
const path = require("path");
const {
    getFonteById,
    Logger
} = require("../../shared");

const foldername = path.basename(path.resolve(__dirname, '..'));
const fonte = getFonteById(foldername);

const logger = Logger({
    level: 'verbose',
    logFile: path.resolve(__dirname, '..', 'logs', 'info.log'),
    errorFile: path.resolve(__dirname, '..', 'logs', 'error.log')
});

const oldestYear = 2000;
const currentYear = (new Date()).getFullYear();
const periodos = Array(currentYear - oldestYear + 1).fill('').map((_, idx) => oldestYear + idx);
        

const CONFIG = {
    fonte,
    logger,  
    periodos
}

exports.CONFIG = CONFIG;