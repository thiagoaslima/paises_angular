const winston = require("winston");

winston.addColors({
    silly: 'magenta',
    debug: 'blue',
    verbose: 'cyan',
    info: 'green',
    warn: 'yellow',
    error: 'red'
  });

function Logger({ level, logFile, errorFile }) {
    const transports = [
        new winston.transports.Console({
            level: level,
            prettyPrint: true,
            colorize: true,
            silent: false,
            timestamp: function () {
                return (new Date()).toISOString();
            }
        })
    ];

    if (logFile) {
        transports.push(new (winston.transports.File)({
            name: 'info-file',
            filename: logFile,
            level: 'info',
            timestamp: function () {
                return (new Date()).toISOString();
            }
        }))
    }

    if (errorFile) {
        transports.push(new (winston.transports.File)({
            name: 'error-file',
            filename: errorFile,
            level: 'error',
            timestamp: function () {
                return (new Date()).toISOString();
            }
        }))
    }

    return new winston.Logger({
        transports: transports,
    });
}

module.exports = { Logger }; 
