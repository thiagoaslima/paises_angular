// https://stackoverflow.com/questions/8579055/how-do-i-move-files-in-node-js#answer-29105404

var fs = require('fs');

function moveFile(oldPath, newPath) {
    return new Promise( (resolve, reject) => {
        fs.rename(oldPath, newPath, function (err) {
            if (err) {
                if (err.code === 'EXDEV') {
                    return copy(resolve, reject);
                } else {
                    reject(err);
                }
            }
            resolve();
        });
    });
}

function copy(resolve, reject) {
    var readStream = fs.createReadStream(oldPath);
    var writeStream = fs.createWriteStream(newPath);

    readStream.on('error', reject);
    writeStream.on('error', reject);

    readStream.on('close', function () {
        fs.unlink(oldPath, (err) => {
            if (err) reject(err);
            resolve();
        });
    });

    readStream.pipe(writeStream);
}

module.exports = { moveFile };