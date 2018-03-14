const crypto = require('crypto');
const fs = require('fs');
const util = require('util');

// Algorithm depends on availability of OpenSSL on platform
// Another algorithms: 'sha1', 'md5', 'sha256', 'sha512' ...
const algorithm = 'md5';

function hashFile(path) {
    const shasum = crypto.createHash(algorithm);

    return new Promise((resolve, reject) => {
        let str = fs.ReadStream(path);

        str.on('data', function (data) {
            shasum.update(data);
        });

        str.on('end', function () {
            var hash = shasum.digest('hex');
            resolve(hash);
        });

        str.on('error', (err) => {
            reject(err);
        });
    })
}

function hashString(str) {
    const shasum = crypto.createHash(algorithm);

    return new Promise((resolve, reject) => {
        try {
            shasum.update(str)
            var hash = shasum.digest('hex');
            resolve(hash);
        } catch(err) {
            reject(err);
        }
    });
}

function hashStream(stream) {
    const shasum = crypto.createHash(algorithm);

    return new Promise((resolve, reject) => {
        stream.on('data', function (data) {
            shasum.update(data);
        });

        stream.on('end', function () {
            var hash = shasum.digest('hex');
            resolve(hash);
        });

        stream.on('error', (err) => {
            reject(err);
        });
    });
}

module.exports = { hashFile, hashString, hashStream };
