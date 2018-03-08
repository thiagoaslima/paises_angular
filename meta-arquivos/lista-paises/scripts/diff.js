const fs = require('fs');
const ISO = require('../fontes/ISO.json').dados;
const ONU_EN = require('../fontes/UNSD_en.json').dados;

const iso = ISO.map(obj => obj.code_a3).sort();
const onu = ONU_EN.map(obj => obj["ISO-alpha3 Code"]).sort();

const iso_only = iso.filter(sigla => !onu.includes(sigla))
const onu_only = onu.filter(sigla => !iso.includes(sigla))

fs.writeFile('diff.json', JSON.stringify({iso, onu, only: {iso: iso_only, onu: onu_only}}), 'utf8', (err) => {
    if (err) console.log(err);
    console.log('sucess');
})