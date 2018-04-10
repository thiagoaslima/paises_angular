const request = require('request-promise-native');
const cheerio = require('cheerio');
const xlsx = require('xlsx');
const { NoNewData } = require('../errors')
const { getFonte, saveFile } = require('../shared');
const fonte = getFonte("Food security indicators");

function getDados() {
    return request(fonte.dados[0].link)
        .then(getFileLink)
        .then(getFile);
}

function getFileLink(page) {
    const $ = cheerio.load(page);
    let link = $('.download').attr('href');
    return 'http://www.fao.org/' + link;
}

function getFile(link) {
    return request(link, {encoding: 'binary'}).then(res => {
        return xlsx.read(res, {type: 'binary'});
    });
}

module.exports = { getDados };