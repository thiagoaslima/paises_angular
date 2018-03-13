const path = require('path');
const { hashString } = require('../shared/calculateHash');
const readFile = require('../shared/readFile');
const saveFile = require('../shared/saveFile');

const { getSummary, getDados } = require('./getDados');
const { updateSummaryHash } = require('./updateHash');

const summary = getSummary();
const hash = summary.then(hashString);

const matchHash = readFile('hash-summary.txt')
    .then(oldHash => hash.then(hash => ({
        hash,
        oldHash,
        areEqual: hash === oldHash
    })));

matchHash.then(updateSummaryHash);

const indicators = summary.then(_ => getDados());
