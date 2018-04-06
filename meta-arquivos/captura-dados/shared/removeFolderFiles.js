const fs = require("fs");
const { FolderDoNotExist } = require("../errors");

function removeFolderFiles(dirPath, removeSelf = true) {
    try {
        const files = fs.readdirSync(dirPath);

        if (files.length > 0) {
            files.forEach(file => {
                const filePath = dirPath + '/' + file;

                fs.statSync(filePath).isFile()
                    ? fs.unlinkSync(filePath)
                    : removeFolderFiles(filePath);
            });
        }

        if (removeSelf) {
            fs.rmdirSync(dirPath);
        }
    } catch (err) {
        if (err.code === "ENOENT") {
            throw new FolderDoNotExist(
                `A pasta ${dirPath} não existe, portanto não é possível apagá-la.`
            );
        }

        throw err;
    }

};

module.exports = { removeFolderFiles };