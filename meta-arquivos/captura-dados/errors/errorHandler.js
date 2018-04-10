const winston = require("winston");
const {
    NoNewData,
    NoResponseError
} = require('./index');

const errorHandler = (logger = winston) => (err) => {
    switch (err.name) {
        case 'NoNewData':
            logger.info(err.message);
            break;

        case "NoResponseError":
            logger.error(err.message);
            break;

        default:
            logger.error('Uncaught error', err.message, err.stack);
            break;
    }

}

module.exports = { errorHandler };