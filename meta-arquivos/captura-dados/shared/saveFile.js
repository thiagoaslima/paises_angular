const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

function saveData(folder, fileName, content) {
    if (!folder) {
        return fs.writeFile(fileName, content, 'utf8', (err) => {
            if (err) throw err;
            console.log(fileName, ' saved successfully');
        })
    }

    return mkdirp(folder, '0777', (err) => {
        if (!err || (err && err.code === 'EEXIST')) {
            return fs.writeFile(path.resolve(folder, fileName), content, 'utf8', (err) => {
                if (err) throw err;
                console.log(fileName, ' saved successfully');
            })
        } else {
            throw err;
        }
    })
}

module.exports = saveData;