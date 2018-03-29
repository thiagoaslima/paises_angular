const request = require('request-promise-native');
const { AllOldDataError } = require('../errors')
const { getFonte, saveFile } = require('../shared');
const fonte = getFonte("Food security indicators");

function getDados() {
    return fonte.dados[0]
}

function getPage(link) {
    return request(link)
}