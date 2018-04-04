const iconv = require('iconv-lite');

function convertEncoding(bufferResponse, encOriginal = 'ISO-8859-1', encDest = "utf8") {
    let buffer = iconv.decode(bufferResponse, encOriginal);
    buffer = iconv.encode(buffer, encDest);

    return buffer;
}

module.exports = { convertEncoding };