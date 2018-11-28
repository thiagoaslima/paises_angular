const fs = require('fs');
const path = require('path');
const util = require('util');

const _readFolder = util.promisify(fs.readdir);
const isDirectory = source => fs.lstatSync(source).isDirectory();
const isFile = source => fs.lstatSync(source).isFile();

function getFolderContentList(folder, options) {
    return _readFolder(folder, options)
    .then(list => {
        return list.reduce((agg, name) => {
            const _path = path.join(folder, name);
            const prop = isDirectory(_path) ? 'folders' : isFile(_path) ? 'files' : '';
            if (prop) { agg[prop].push(_path); }
            return agg;
        }, {folders:[], files:[]});
    })
    .catch(err => null);
}

module.exports = { getFolderContentList };