const request = require('request');
const fonteDesejada = "National Accounts Main Aggregates Database, Basic Data Selection";
const fontes = require('../fontes');
debugger;

const fonte = fontes.find(obj => obj.fonte === fonteDesejada);
console.log(fonte);

const { link, data } = fonte.dados[0].post_request;

// Array(26).fill(2000).map((y, i) => y + i).forEach(year => {
    debugger;

    request.post(link, {
        Country: "9999",
        Series: "5",
        Selection: "basic",
        Year: "2010,2011,2014"
    }, function (err, value) {
        if (err) console.log(err);
        debugger;
        console.log(value);
    })
// });
