const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const ISO = require('../fontes/ISO.json').dados;
const ONU_EN = require('../fontes/UNSD_en.json').dados;
const ONU_ES = require('../fontes/UNSD_es.json').dados;

const mapONU_EN = 
