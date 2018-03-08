const fs = require('fs');
const path = require('path');
const util = require('util');
const slug = require('slugger');

const readFile = util.promisify(fs.readFile);

const ISO = require('../fontes/ISO.json').dados;
const ONU_EN = require('../fontes/UNSD_en.json').dados;
const ONU_ES = require('../fontes/UNSD_es.json').dados;
const PAISES = require('../fontes/paises.json');
const nomesONU = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia (Plurinational State of)", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Côte D'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic People's Republic of Korea", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia (Republic of The)", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Lao People’s Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia (Federated States of)", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of Korea", "Republic of Moldova", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Tajikistan", "Thailand", "The former Yugoslav Republic of Macedonia", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom of Great Britain and Northern Ireland", "United Republic of Tanzania", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela, Bolivarian Republic of", "Viet Nam", "Yemen", "Zambia", "Zimbabwe", "Holy See", "State of Palestine"
];
const slugONU = nomesONU.map(slug);

const mapONU_EN = ONU_EN.reduce((agg, obj) => {
    agg[obj["ISO-alpha3 Code"]] = obj;
    return agg;
}, {});
const mapONU_ES = ONU_ES.reduce((agg, obj) => {
    agg[obj["ISO-alpha3 Code"]] = obj;
    return agg;
}, {});

let regioes = ONU_EN.reduce((agg, obj) => {
    const slug_en = slug(obj["Country or Area"]);
    const es = mapONU_ES[obj["ISO-alpha3 Code"]];
    const slug_es = slug(es["Country or Area"]);
    
    if (obj["Intermediate Region Name"] && !agg[obj["Intermediate Region Name"]]) {
        const pt = PAISES.regioes.find(regiao => regiao.nome.en === obj["Intermediate Region Name"]);

        agg[obj["Intermediate Region Name"]] = {
            "tipo": "subregiao",
            "nome": {
                "en": obj["Intermediate Region Name"],
                "es": es["Intermediate Region Name"],
                "pt": pt ? pt.nome.en : ""
            },
            "slug": {
                "en": slug_en,
                "es": slug_es,
                "pt": slug(pt ? pt.nome.en : "") 
            },
            "codigo": obj["Intermediate Region Code"],
            "parent": obj["Sub-region Code"]
        }
    }

    if (obj["Sub-region Name"] && !agg[obj["Sub-region Name"]]) {
        const pt = PAISES.regioes.find(regiao => regiao.nome.en === obj["Sub-region Name"]);

        agg[obj["Sub-region Name"]] = {
            "tipo": "subregiao",
            "nome": {
                "en": obj["Sub-region Name"],
                "es": es["Sub-region Name"],
                "pt": pt ? pt.nome.en : ""
            },
            "slug": {
                "en": slug_en,
                "es": slug_es,
                "pt": slug(pt ? pt.nome.en : "") 
            },
            "codigo": obj["Sub-region Code"],
            "parent": obj["Region Code"]
        }
    }

    if (obj["Region Name"] && !agg[obj["Region Name"]]) {
        const pt = PAISES.regioes.find(regiao => regiao.nome.en === obj["Region Name"]);

        agg[obj["Region Name"]] = {
            "tipo": "subregiao",
            "nome": {
                "en": obj["Region Name"],
                "es": es["Region Name"],
                "pt": pt ? pt.nome.en : ""
            },
            "slug": {
                "en": slug_en,
                "es": slug_es,
                "pt": slug(pt ? pt.nome.en : "") 
            },
            "codigo": obj["Region Code"],
            "parent": 1
        }
    }

    return agg;
}, {
        "World": {
            "tipo": "mundo",
            "nome": {
                "en": "World",
                "es": "Mundo",
                "pt": "Mundo"
            },
            "slug": {
                "en": "world",
                "es": "mundo",
                "pt": "mundo"
            },
            "codigo": 1,
            "parent": null
        }
    }
);

let paises = ISO.map(obj => {
    console.log(obj, obj.code_a3);
    const en = mapONU_EN[obj['code_a3']];
    const slug_en = en ? slug(en["Country or Area"]) : "";
    const es = mapONU_ES[obj.code_a3];
    const slug_es = es ? slug(es["Country or Area"]) : "";

    const pt = PAISES.paises.find(pais => pais.sigla3 === obj.code_a3);
    return {
        "codigo": obj.numeric,
        "sigla": obj.sigla,
        "sigla3": obj.sigla3,
        "nome": {
            "en": en ? en["Country or Area"] : obj["nome_en"],
            "es": es ? es["Country or Area"] : "",
            "pt": pt ? pt.nome.pt : ""
        },
        "slug": {
            "en": slug_en,
            "es": slug_es,
            "pt": slug(pt ? pt.nome.pt : "")
        },
        "parent": en ? en["Intermediate Region Code"] || en["Sub-region Code"] || en["Region Code"] || en["Global Code"] : "",
        "parents": {
            "continente": en ? en["Region Code"] : "",
            "regiao": en ? en["Sub-region Code"] : "",
            "subregiao": en ? en["Intermediate Region Code"] : ""
        },
        "ddi": pt ? pt.ddi : "",
        "onu": slugONU.includes(slug_en)
    }
});

const metadados = {
    "regioes": {
        "original": "Geographic Regions",
        "publicacao": "Standard Country or Area Codes for Statistical Use",
        "link": "https://unstats.un.org/unsd/methodology/m49/",
        "acessadoEm": "2017-11-28",
        "propriedades": [
            {
                "codigo": {
                    "publicacao": "Standard Country or Area Codes for Statistical Use",
                    "link": "https://unstats.un.org/unsd/methodology/m49/",
                    "acessadoEm": "2018-03-07"
                },
                "tipo": {
                    "publicacao": "Standard Country or Area Codes for Statistical Use",
                    "link": "https://unstats.un.org/unsd/methodology/m49/",
                    "notas": [
                        "tradução nossa"
                    ],
                    "acessadoEm": "2018-03-07"
                },
                "nome": {
                    "en": {
                        "publicacao": "Standard Country or Area Codes for Statistical Use",
                        "link": "https://unstats.un.org/unsd/methodology/m49/",
                        "acessadoEm": "2018-03-07"
                    },
                    "es": {
                        "publicacao": "Standard Country or Area Codes for Statistical Use",
                        "link": "https://unstats.un.org/unsd/methodology/m49/",
                        "acessadoEm": "2018-03-07"
                    },
                    "pt": {
                        "publicacao": "Wikipedia - Geoesquema das Nações Unidas",
                        "link": "https://pt.wikipedia.org/wiki/Geoesquema_das_Nações_Unidas",
                        "acessadoEm": "2017-11-28"
                    }
                }
            }
        ]
    },
    "paises": {
        "original": "Geographic Regions",
        "publicacao": "Standard Country or Area Codes for Statistical Use",
        "link": "https://unstats.un.org/unsd/methodology/m49/",
        "acessadoEm": "2017-11-28",
        "proriedades": {
            "codigo": {
                "original": "Numeric",
                "publicacao": "Country Codes - ISO 3166",
                "fonte": "https://www.iso.org/obp/ui/#search/code",
                "acessadoEm": "2018-03-07"
            },
            "nome": {
                "en": {
                    "publicacao": "Standard Country or Area Codes for Statistical Use",
                    "link": "https://unstats.un.org/unsd/methodology/m49/",
                    "acessadoEm": "2018-03-07"
                },
                "es": {
                    "publicacao": "Standard Country or Area Codes for Statistical Use",
                    "link": "https://unstats.un.org/unsd/methodology/m49/",
                    "acessadoEm": "2018-03-07"
                }, 
                "pt": {}
            },
            "sigla": {
                "original": "Alpha-2 code",
                "definicao": "a two-letter code that represents a country name, recommended as the general purpose code",
                "publicacao": "Country Codes - ISO 3166",
                "link": "https://www.iso.org/obp/ui/#search/code",
                "acessadoEm": "2018-03-07"
            },
            "sigla3": {
                "original": "Alpha-3 code",
                "definicao": "a three-letter code that represents a country name, which is usually more closely related to the country name",
                "publicacao": "Country Codes - ISO 3166",
                "link": "https://www.iso.org/obp/ui/#search/code",
                "acessadoEm": "2018-03-07"
            },
            "parent": {
                "definicao": "região ou subregião (identificada pelo código numérico) mais específica a qual o país pertence"
            },
            "parents": {
                "continente": {
                    "definicao": "continente (identificado pelo código numérico) no qual o país se localiza",
                    "publicacao": "Standard Country or Area Codes for Statistical Use",
                    "link": "https://unstats.un.org/unsd/methodology/m49/",
                    "acessadoEm": "2018-03-07"
                },
                "regiao": {
                    "definicao": "região (identificada pelo código numérico) na qual o país se localiza",
                    "publicacao": "Standard Country or Area Codes for Statistical Use",
                    "link": "https://unstats.un.org/unsd/methodology/m49/",
                    "acessadoEm": "2018-03-07"
                },
                "subregiao": {
                    "definicao": "subregião (identificado pelo código numérico) na qual o país se localiza. Se não houver tal subdivisão, a propriedade recebe valor '' (string vazia)",
                    "publicacao": "Standard Country or Area Codes for Statistical Use",
                    "link": "https://unstats.un.org/unsd/methodology/m49/",
                    "acessadoEm": "2018-03-07"
                }
            },
            "ddi": {
                "definicao": "código de prefixo para ligações telefônicas internacionais"
            },
            "onu": {
                "definicao": "determina se o país é membro da ONU ou observador permanente",
                "publicacao": "Member States | United Nations",
                "link": "http://www.un.org/en/member-states/index.html",
                "acessadoEm": "2018-03-07"
            }
        }
    }
}

fs.writeFile(path.resolve('..', 'compilado', 'paises.json'), JSON.stringify(paises, null, 4), (err) => {
    console.log('paises pronto');
});
fs.writeFile(path.resolve('..', 'compilado', 'dados_completos.json'), JSON.stringify({regioes, paises, metadados}, null, 4), (err) => {
    console.log('dados_completos pronto');
})