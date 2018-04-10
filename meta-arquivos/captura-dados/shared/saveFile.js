const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

function saveFile(folder, fileName, content) {
    return new Promise((resolve, reject) => {
        if (!folder) {
            fs.writeFile(fileName, content, 'utf8', (err) => {
                if (err) reject(err);
                resolve({
                    fileName,
                    saved: true
                });
            })
        } else {
            mkdirp(folder, '0777', (err) => {
                if (!err || (err && err.code === 'EEXIST')) {
                    fs.writeFile(path.resolve(folder, fileName), content, 'utf8', (err) => {
                        if (err) reject(err);
                        resolve({
                            fileName,
                            saved: true
                        })
                    })
                } else {
                    reject(err);
                }
            })
        }

    })
}

module.exports = { saveFile };