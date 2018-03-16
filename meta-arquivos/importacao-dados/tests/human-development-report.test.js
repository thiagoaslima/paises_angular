const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const path = require('path');
const request = require('request-promise-native');
const getFonteSync = require('../shared/getFonteSync');
const { hashFile, hashString } = require('../shared/calculateHash');

const nome_fonte = "Human Development Report";
const fonte = getFonteSync(nome_fonte);
const timeout = 10000;

chai.use(chaiAsPromised);
const expect = chai.expect;

let hdr_json = Promise.all([
    request.get(fonte.files[0]),
    request.get(fonte.files[1])
]).then(([lista, indicadores]) => {
    return { lista, indicadores };
}).catch(err => {
    console.log('Não foi possivel acessar os arquivos', err);
});

describe('Human Development Report', () => {

    it('deve ter uma fonte configurada', () => {
        expect(fonte.fonte).to.equal(nome_fonte);
    });

    it('deve ter os arquivos json disponíveis online', (done) => {
        hdr_json
            .then(json => {
                expect(Object.keys(json)).to.deep.equal(['lista', 'indicadores']);
                done();
            });
    }).timeout(timeout);

    it('deve ser equivalente ao arquivo gravado localmente', (done) => {
        let comp1 = Promise.all([
            hashFile(path.resolve(__dirname, '../11-dados-capturados/human-development-report/summary.json')),
            hdr_json.then(({ lista }) => hashString(lista))
        ]).then(([hash1, hash2]) => hash1 === hash2);

        let comp2 = Promise.all([
            hashFile(path.resolve(__dirname, '../11-dados-capturados/human-development-report/indicators.json')),
            hdr_json.then(({ indicadores }) => hashString(indicadores))
        ]).then(([hash1, hash2]) => {
            return hash1 === hash2;
        });

        Promise.all([comp1, comp2]).then(array => {
            expect(array).to.deep.equal([true, true])
            done();
        });
    }).timeout(timeout);

});
