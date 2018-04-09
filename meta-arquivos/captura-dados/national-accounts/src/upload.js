//@ts-check
const { buildCSVFilename, getCSVPathToUpload, setCSVAsCurrent } = require("./manageCSVFiles").manageCSVFiles;
const { updateHashes } = require("./manageHashes").manageHash;
const { buildPageFilename, setPageAsCurrent } = require("./managePageFiles").managePageFiles
const { logger } = require("./configuration").CONFIG;
const { postFileToDatabase } = require("../../shared");

function upload(array, idx = 0) {
    const { id, periodo, slug, hash } = array[idx];

    const csvFilename = buildCSVFilename(slug, periodo);
    const csvFilepath = getCSVPathToUpload(csvFilename);
    const pageFilename = buildPageFilename(slug, periodo);

    logger.info(`Enviando o arquivo ${csvFilename}.`);
    return postFileToDatabase(periodo, csvFilepath).then(res => {
        logger.info(`O arquivo ${csvFilename} foi salvo com sucesso`);

        return Promise.all([
            // save hash
            updateHashes({ id, periodo, hash }),
            // move csv to current
            setCSVAsCurrent(csvFilename),
            // move html to current
            setPageAsCurrent(pageFilename)
        ])
        .then(_ => {
            logger.info(`Os arquivos relativos a ${csvFilename} foram atualizados corretamente.`);
        })
        .catch(err => {
            logger.error(`Erro nos arquivos relativos a ${csvFilename}`, err);
        })
    }).then(_ => {
        if (++idx < array.length) {
            return upload(array, idx);
        } else {
            // logger.info(`Todos os arquivos foram salvos com sucesso`);
            return array;
        }
    }).catch(err => {
        logger.error(`Erro no arquivo ${csvFilename}. Dados não atualizados`, err)
        if (++idx < array.length) {
            return upload(array, idx);
        } else {
            //logger.info(`Todos os arquivos foram salvos com sucesso`);
            return array;
        }
    })
}

exports.upload = upload;
