const fs = require("fs");

function removeFolderFiles(dirPath, removeSelf = true) {
    try {
        const files = fs.readdirSync(dirPath);

        if (files.length > 0) {
            files.forEach(file => {
                const filePath = dirPath + '/' + file;

                fs.statSync(filePath).isFile()
                    ? fs.unlinkSync(filePath)
                    : rmDir(filePath);
            });
        }

        if (removeSelf) {
            fs.rmdirSync(dirPath);
        }
    } catch (err) {
        if (err.code !== "ENOENT") {
            console.log(err);
        }
        return;
    }

};

module.exports = { removeFolderFiles };