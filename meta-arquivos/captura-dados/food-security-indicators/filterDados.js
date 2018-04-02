const xlsx = require('xlsx');
const { getPais } = require('../shared');

function filterDados(file) {
    let table = getTable(file, 'A_9');
    let array = convertSheetToArray(table);
    
    return {
        periodos: getPeriodos(array),
        dados: arrayToJson(array)
    };
}

function getTable(file, key) {
    if (!file.Sheets) {
        throw new Error(`o arquivo não possui tabelas`);
    }
    return file.Sheets[key];
}

function convertSheetToArray(sheet) {
    let array = xlsx.utils.sheet_to_csv(sheet).split("\n");
    return array.slice(2);
}

function getPeriodos(array) {
    let [head, ...tail] = array;
    head = head.split(',');
    return head.slice(3).filter(Boolean);
}

function arrayToJson(array) {
    let [head, ...tail] = array;
    head = head.split(',');
    let periodos = head.slice(3).filter(Boolean);


    let json = tail.reduce((agg, line) => {
        let arr = line.split(',');
        let pais = getPais.byCodigo(arr[1]);

        if (pais && pais.sigla) {
            let obj = {
                sigla: pais.sigla
            };
            for (let i = 3; i < arr.length; i++) {
                if (arr[i]) {
                    obj[head[i]] = arr[i];
                }
            }

            agg.push(obj);
        }

        return agg;
    }, []);

    return json;
}

module.exports = { filterDados };