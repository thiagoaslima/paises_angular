const path = require('path');
const {
    flatten,
    getFolderContentList,
    postFileToDatabase
} = require("../shared");

var root = path.resolve(__dirname, './files');
getFolderContentList(root)
    .then(({folders}) => {
        const promises = folders.map(folder => getFolderContentList(folder).then(({files}) => files));
        return Promise.all(promises).then(flatten);
    })
    .then(files => {
        files.forEach(file => {
            const filename = file.split('/').pop().replace('.csv', '').trim();
            postFileToDatabase(filename, file, 2)
            .then(response => {
                console.log(file, 'was saved on the database');
            }).catch(err => {
                console.warn(file, 'could not be saved on the database');
                console.error(err.message);
            });
        })
    });