const fs = require('fs');
const path = require('path');
const util = require('util');
const slug = require('../../shared/slug');

const readFile = util.promisify(fs.readFile);

const ISO = require('../fontes/ISO.json').dados;
const ITU = require('../fontes/ITU.json').dados;
const ONU_EN = require('../fontes/UNSD_en.json').dados;
const ONU_ES = require('../fontes/UNSD_es.json').dados;
const IBGE = require('../fontes/IBGE_2015.json').dados;
const ONU_MEMBROS = require('../fontes/ONU_membros.json').dados;
const WIKIPEDIA = require('../fontes/Wikipedia.json');
const NOMES_ALTERNATIVOS = require('../fontes/nomes_alternativos.json');

const mapONU_EN = ONU_EN.reduce((agg, obj) => {
    agg[obj["ISO-alpha3 Code"]] = obj;
    return agg;
}, {});
const mapONU_ES = ONU_ES.reduce((agg, obj) => {
    agg[obj["ISO-alpha3 Code"]] = obj;
    return agg;
}, {});
const mapIBGE = IBGE.reduce((agg, obj, idx) => {
    let sigla = obj.a3 || '_' + idx;
    agg[sigla] = obj;
    return agg;
}, {});
const mapISO = ISO.reduce((agg, obj) => {
    let sigla = obj["code_a3"];
    agg[sigla] = obj;
    return agg;
}, {});
const mapITU = ITU.reduce((agg, obj) => {
    let sigla = obj["code_a3"];
    agg[sigla] = obj;
    return agg;
});
const slugMembrosONU = [].concat(ONU_MEMBROS.membros, ONU_MEMBROS.observadores.permanentes).map(slug);

let regioes = {
    "World": {
        "tipo": "mundo",
        "onu_type": "global",
        "slug": "mundo",
        "nome": {
            "en": "World",
            "es": "Mundo",
            "pt": "Mundo"
        },
        "slugs": {
            "en": "world",
            "es": "mundo",
            "pt": "mundo"
        },
        "codigo": 1,
        "parent": null
    }
};

ONU_EN.forEach((obj) => {
    let sigla = obj["ISO-alpha3 Code"];

    if (
        obj["Intermediate Region Name"] &&
        !regioes[obj["Intermediate Region Name"]]
    ) {
        const es = mapONU_ES[sigla];

        const nome_pt = WIKIPEDIA.regioes_pt[obj["Intermediate Region Code"]];
        const slug_pt = slug(nome_pt);

        regioes[obj["Intermediate Region Name"]] = {
            "tipo": "subregiao",
            "onu_type": "intermediate region",
            "slug": slug_pt,
            "nome": {
                "en": obj["Intermediate Region Name"],
                "es": es["Intermediate Region Name"],
                "pt": nome_pt
            },
            "slugs": {
                "en": slug(obj["Intermediate Region Name"]),
                "es": slug(es["Intermediate Region Name"]),
                "pt": slug_pt
            },
            "codigo": obj["Intermediate Region Code"],
            "parent": obj["Sub-region Code"]
        }
    }

    if (
        obj["Sub-region Name"] &&
        !regioes[obj["Sub-region Name"]]
    ) {
        const es = mapONU_ES[sigla];
        const nome_pt = WIKIPEDIA.regioes_pt[obj["Sub-region Code"]];
        const slug_pt = slug(nome_pt);

        regioes[obj["Sub-region Name"]] = {
            "tipo": "regiao",
            "onu_type": "sub-region",
            "slug": slug_pt,
            "nome": {
                "en": obj["Sub-region Name"],
                "es": es["Sub-region Name"],
                "pt": nome_pt
            },
            "slugs": {
                "en": slug(obj["Sub-region Name"]),
                "es": slug(es["Sub-region Name"]),
                "pt": slug_pt
            },
            "codigo": obj["Sub-region Code"],
            "parent": obj["Region Code"]
        }
    }

    if (
        obj["Region Name"] &&
        !regioes[obj["Region Name"]]
    ) {
        const es = mapONU_ES[sigla];
        const nome_pt = WIKIPEDIA.regioes_pt[obj["Region Code"]];
        const slug_pt = slug(nome_pt);

        regioes[obj["Region Name"]] = {
            "tipo": "continente",
            "onu_type": "region",
            "slug": slug_pt,
            "nome": {
                "en": obj["Region Name"],
                "es": es["Region Name"],
                "pt": nome_pt
            },
            "slugs": {
                "en": slug(obj["Region Name"]),
                "es": slug(es["Region Name"]),
                "pt": slug_pt
            },
            "codigo": obj["Region Code"],
            "parent": 1
        }
    }

});

regioes = Object.keys(regioes).map(key => regioes[key]);


let paises = ISO.map(obj => {
    const sigla = obj["code_a3"];

    const en = mapONU_EN[sigla];
    const es = mapONU_ES[sigla];
    const pt = mapIBGE[sigla];

    const nome_en = en ? en["Country or Area"] : obj["name_en"] ? obj["name_en"] : "";
    const nome_es = es ? es["Country or Area"] : WIKIPEDIA.paises_es[sigla] ? WIKIPEDIA.paises_es[sigla] : "";
    const nome_pt = pt ? pt.nome : WIKIPEDIA.paises_pt[sigla] ? WIKIPEDIA.paises_pt[sigla] : "";
    const slug_pt = slug(nome_pt);

    const apelidos_en = NOMES_ALTERNATIVOS.filter(o => o.a2_code === obj["code_a2"]).map(o => o.nome.en).filter(Boolean);
    const apelidos_es = NOMES_ALTERNATIVOS.filter(o => o.a2_code === obj["code_a2"]).map(o => o.nome.es).filter(Boolean);
    const apelidos_pt = NOMES_ALTERNATIVOS.filter(o => o.a2_code === obj["code_a2"]).map(o => o.nome.pt).filter(Boolean);

    return {
        "tipo": "pais",
        "onu_type": "country or area",
        "codigo": obj.numeric.toString(),
        "slug": slug_pt,
        "sigla": obj["code_a2"],
        "sigla3": obj["code_a3"],
        "nome": {
            "en": nome_en,
            "es": nome_es,
            "pt": nome_pt
        },
        "apelidos": {
            "en": apelidos_en,
            "es": apelidos_es,
            "pt": apelidos_pt
        },
        "slugs": {
            "en": slug(nome_en),
            "es": slug(nome_es),
            "pt": slug_pt
        },
        "parent": en ? en["Intermediate Region Code"] || en["Sub-region Code"] || en["Region Code"] || en["Global Code"] : "",
        "parents": {
            "continente": en ? en["Region Code"] : "",
            "regiao": en ? en["Sub-region Code"] : "",
            "subregiao": en ? en["Intermediate Region Code"] : ""
        },
        "ddi": mapITU[sigla] ? mapITU[sigla].ddi : "", 
        "onu": slugMembrosONU.indexOf(slug(nome_en)) > -1
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
        },
        "notas": [
            {
                "nota": "Nome da Antártida (ATA) em português foi pego da Wikipedia",
                "fonte": "https://pt.wikipedia.org/wiki/Ant%C3%A1rtida",
                "acessadoEm": "2018-03-08"
            },
            {
                "nota": "Nome da Ilha Bouvet (BVT) em português foi pego da Wikipedia",
                "fonte": "https://pt.wikipedia.org/wiki/Ilha_Bouvet",
                "acessadoEm": "2018-03-08"
            },
            {
                "nota": "Nome da Ilha Christmas (CXR) em português foi pego da Wikipedia",
                "fonte": "https://pt.wikipedia.org/wiki/Ilha_Christmas",
                "acessadoEm": "2018-03-08"
            },
            {
                "nota": "Nome das Ilha Heard e Ilhas McDonald (Keeling) (HMD) em português foi pego da Wikipedia",
                "fonte": "https://pt.wikipedia.org/wiki/Ilha_Heard_e_Ilhas_McDonald",
                "acessadoEm": "2018-03-08"
            },
            {
                "nota": "Nome das Ilhas Cocos (Keeling) (CCK) em português foi pego da Wikipedia",
                "fonte": "https://pt.wikipedia.org/wiki/Ilhas_Cocos_(Keeling)",
                "acessadoEm": "2018-03-08"
            },
            {
                "nota": "Nome das Ilhas Geórgia do Sul e Sandwich do Sul (SGS) em português foi pego da Wikipedia",
                "fonte": "https://pt.wikipedia.org/wiki/Ilhas_Geórgia_do_Sul_e_Sandwich_do_Sul",
                "acessadoEm": "2018-03-08"
            },
            {
                "nota": "Nome das Ilhas Menores Distantes dos Estados Unidos (UMI) em português foi pego da Wikipedia",
                "fonte": "https://pt.wikipedia.org/wiki/Ilhas_Menores_Distantes_dos_Estados_Unidos",
                "acessadoEm": "2018-03-08"
            },
            {
                "nota": "Nome de Taiwan (TWN) em português e espanhol foi pego da Wikipedia",
                "fontes": [
                    "https://pt.wikipedia.org/wiki/Taiwan",
                    "https://es.wikipedia.org/wiki/República_de_China"
                ],
                "acessadoEm": "2018-03-08"
            },
            {
                "nota": "Nome das Terras Austrais e Antárticas Francesas (ATF) em português foi pego da Wikipedia",
                "fonte": "https://pt.wikipedia.org/wiki/Terras_Austrais_e_Ant%C3%A1rticas_Francesas",
                "acessadoEm": "2018-03-08"
            },
            {
                "nota": "Nome do Território Britânico do Oceano Índico (IOT) em português foi pego da Wikipedia",
                "fonte": "https://pt.wikipedia.org/wiki/Territ%C3%B3rio_Brit%C3%A2nico_do_Oceano_%C3%8Dndico",
                "acessadoEm": "2018-03-08"
            }
        ]
    }
}

const paisesFile = paises.map(pais => {
    let _pais = Object.assign({}, pais);
    delete _pais.parent,
        delete _pais.parents
    return _pais;
})

const dicionario = [].concat(paises, regioes).reduce((agg, obj) => {
    if (obj.sigla) {
        agg[obj.slugs.en] = obj.sigla;
    }
    return agg;
}, {})

NOMES_ALTERNATIVOS.forEach(obj => {
    let slug_en = slug(obj.nome.en);
    dicionario[slug_en] = obj.a2_code;
})

fs.writeFile(path.resolve('..', 'compilado', 'paises_resumido.json'), JSON.stringify(paisesFile, null, 4), (err) => {
    console.log('paises_resumido pronto');
});

fs.writeFile(path.resolve('..', 'compilado', 'paises.json'), JSON.stringify({ paises, regioes }, null, 4), (err) => {
    console.log('paises pronto');
});

fs.writeFile(
    path.resolve('../../../codigofonte/ClientApp/app/shared/localidade', 'localidades.lista.ts'),
    `import { Localidade, Pais } from './localidade.model';

export const localidades = ${JSON.stringify({ paises: paises.filter(pais => pais.onu) }, null, 4)}`,
    (err) => {
        if (err) { console.log('ERRO', 'localidades.lista não foi atualizada', err) }
        console.log('localidades.lista atualizada');
    }
);

fs.writeFile(path.resolve('..', 'compilado', 'paises_completo.json'), JSON.stringify({ paises, regioes, metadados }, null, 4), (err) => {
    console.log('paises_completos pronto');
})

fs.writeFile(path.resolve('..', 'compilado', 'nomeen_sigla_dicionario.json'), JSON.stringify(dicionario, null, 4), (err) => {
    console.log('dicionario pronto');
})
