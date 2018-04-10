const path = require('path');
const { Logger } = require('../shared');

const logger = Logger({
    level: 'verbose',
    logFile: path.resolve(__dirname, 'logs', 'info.log'),
    errorFile: path.resolve(__dirname, 'logs', 'error.log')
});

module.exports = { logger };