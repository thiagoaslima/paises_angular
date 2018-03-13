const fs = require('fs');
const request = require('request-promise-native');
const fetch = require('node-fetch');
const StreamArray = require('stream-json/utils/StreamArray');

const getFonteSync = require('../shared/getFonteSync');
const fonte = getFonteSync("Human Development Report");

function getSummary() {
    return request.get(fonte.files[0]);
}

function getDados() {
    const jsonStream = StreamArray.make();
    return fetch(fonte.files[1]).then(res => {
        return res.arrayBuffer();
    }).then(buffer => {
        typeof buffer
        const indicatorsStream = fs.createWriteStream(buffer, { encoding: 'utf8' });;
        indicatorsStream.pipe(jsonStream.input);
        return jsonStream.output;
    })
}

getDados()

module.exports = { getSummary, getDados };