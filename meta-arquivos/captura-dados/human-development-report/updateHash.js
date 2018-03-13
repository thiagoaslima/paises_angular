const saveFile = require('../shared/saveFile');

function updateSummaryHash({ hash, oldHash, areEqual }) {
    if (!areEqual) {
        saveFile('.', 'hash-summary.txt', hash)
    }
}

module.exports = { updateSummaryHash };