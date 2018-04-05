const path = require('path');
const { Logger } = require('../shared');

const logger = Logger({
    level: 'info',
    logFile: path.resolve(__dirname, 'info.log'),
    errorFile: path.resolve(__dirname, 'error.log')
});

module.exports = { logger };