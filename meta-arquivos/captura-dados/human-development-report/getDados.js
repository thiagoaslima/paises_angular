const request = require('request-promise-native');
const getFonteSync = require('../shared/getFonteSync');
const fonte = getFonteSync("Human Development Report");

function getSummary() {
    return request.get(fonte.files[0]);
}

function getIndicators() {
    return request(fonte.files[1]);
}

module.exports = { getSummary, getIndicators };
