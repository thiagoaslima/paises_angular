import { Localidade, Pais } from './localidade.model';

export const localidades = {
  'regiões': <Localidade[]>[
    {
      "tipo": "continente",
      "nome": {
        "en": "Asia",
        "es": "Asia",
        "pt": "Ásia"
      },
      "codigo": "142",
      "parent": "",
      "slug": "asia"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Central Asia",
        "es": "Asia central",
        "pt": "Ásia Central"
      },
      "codigo": "143",
      "parent": "142",
      "slug": "asia-central"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Western Asia",
        "es": "Asia occidental",
        "pt": "Ásia Ocidental"
      },
      "codigo": "145",
      "parent": "034",
      "slug": "asia-ocidental"
    },
    {
      "tipo": "continente",
      "nome": {
        "en": "Europe",
        "es": "Europa",
        "pt": "Europa"
      },
      "codigo": "150",
      "parent": "",
      "slug": "europa"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Eastern Europe",
        "es": "Europa oriental",
        "pt": "Europa Oriental"
      },
      "codigo": "151",
      "parent": "150",
      "slug": "europa-oriental"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Northern Europe",
        "es": "Europa septentrional",
        "pt": "Europa Setentrional"
      },
      "codigo": "154",
      "parent": "151",
      "slug": "europa-setentrional"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Western Europe",
        "es": "Europa occidental",
        "pt": "Europa Ocidental"
      },
      "codigo": "155",
      "parent": "039",
      "slug": "europa-ocidental"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Sub-Saharan Africa",
        "es": "África Subsahariana",
        "pt": "África Subsaariana"
      },
      "codigo": "202",
      "parent": "015",
      "slug": "africa-subsaariana"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Latin America and the Caribbean",
        "es": "América Latina y el Caribe",
        "pt": "América Latina e o Caribe"
      },
      "codigo": "419",
      "parent": "019",
      "slug": "america-latina-e-o-caribe"
    },
    {
      "tipo": "continente",
      "nome": {
        "en": "Africa",
        "es": "África",
        "pt": "África"
      },
      "codigo": "002",
      "parent": "",
      "slug": "africa"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Northern Africa",
        "es": "África septentrional",
        "pt": "Norte da África"
      },
      "codigo": "015",
      "parent": "002",
      "slug": "norte-da-africa"
    },
    {
      "tipo": "subregiao",
      "nome": {
        "en": "Western Africa",
        "es": "África occidental",
        "pt": "África Ocidental"
      },
      "codigo": "011",
      "parent": "202",
      "slug": "africa-ocidental"
    },
    {
      "tipo": "subregiao",
      "nome": {
        "en": "Eastern Africa",
        "es": "África oriental",
        "pt": "África Oriental"
      },
      "codigo": "014",
      "parent": "011",
      "slug": "africa-oriental"
    },
    {
      "tipo": "subregiao",
      "nome": {
        "en": "Middle Africa",
        "es": "África central",
        "pt": "África Central"
      },
      "codigo": "017",
      "parent": "014",
      "slug": "africa-central"
    },
    {
      "tipo": "subregiao",
      "nome": {
        "en": "Southern Africa",
        "es": "África meridional",
        "pt": "África Austral"
      },
      "codigo": "018",
      "parent": "017",
      "slug": "africa-austral"
    },
    {
      "tipo": "continente",
      "nome": {
        "en": "Americas",
        "es": "Américas",
        "pt": "América"
      },
      "codigo": "019",
      "parent": "",
      "slug": "america"
    },
    {
      "tipo": "subregiao",
      "nome": {
        "en": "Caribbean",
        "es": "El Caribe",
        "pt": "Caribe"
      },
      "codigo": "029",
      "parent": "419",
      "slug": "caribe"
    },
    {
      "tipo": "subregiao",
      "nome": {
        "en": "Central America",
        "es": "América central",
        "pt": "América Central"
      },
      "codigo": "013",
      "parent": "029",
      "slug": "america-central"
    },
    {
      "tipo": "subregiao",
      "nome": {
        "en": "South America",
        "es": "América del Sur",
        "pt": "América do Sul"
      },
      "codigo": "005",
      "parent": "013",
      "slug": "america-do-sul"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Northern America",
        "es": "América septentrional",
        "pt": "América do Norte"
      },
      "codigo": "021",
      "parent": "005",
      "slug": "america-do-norte"
    },
    {
      "tipo": "continente",
      "nome": {
        "en": "Antarctica",
        "es": "Antártida",
        "pt": "Antártida"
      },
      "codigo": "010",
      "parent": "",
      "slug": "antartida"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Eastern Asia",
        "es": "Asia oriental",
        "pt": "Ásia Oriental"
      },
      "codigo": "030",
      "parent": "143",
      "slug": "asia-oriental"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "South-eastern Asia",
        "es": "Asia sudoriental",
        "pt": "Sudeste Asiático"
      },
      "codigo": "035",
      "parent": "030",
      "slug": "sudeste-asiatico"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Southern Asia",
        "es": "Asia meridional",
        "pt": "Ásia Meridional"
      },
      "codigo": "034",
      "parent": "035",
      "slug": "asia-meridional"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Southern Europe",
        "es": "Europa meridional",
        "pt": "Europa Meridional"
      },
      "codigo": "039",
      "parent": "154",
      "slug": "europa-meridional"
    },
    {
      "tipo": "continente",
      "nome": {
        "en": "Oceania",
        "es": "Oceanía",
        "pt": "Oceania"
      },
      "codigo": "009",
      "parent": "",
      "slug": "oceania"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Australia and New Zealand",
        "es": "Australia y Nueva Zelandia",
        "pt": "Austrália e Nova Zelândia"
      },
      "codigo": "053",
      "parent": "009",
      "slug": "australia-e-nova-zelandia"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Melanesia",
        "es": "Melanesia",
        "pt": "Melanésia"
      },
      "codigo": "054",
      "parent": "053",
      "slug": "melanesia"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Micronesia",
        "es": "Micronesia",
        "pt": "Micronésia"
      },
      "codigo": "057",
      "parent": "054",
      "slug": "micronesia"
    },
    {
      "tipo": "regiao",
      "nome": {
        "en": "Polynesia",
        "es": "Polinesia",
        "pt": "Polinésia"
      },
      "codigo": "061",
      "parent": "057",
      "slug": "polinesia"
    }
  ],
  'paises': <Pais[]>[
    {
      "tipo": "pais",
      "slug": "antigua-e-barbuda",
      "codigo": "028",
      "sigla": "AG",
      "sigla3": "ATG",
      "nome": {
        "en": "Antigua and Barbuda",
        "es": "Antigua y Barbuda",
        "pt": "Antígua e Barbuda"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-268"
    },
    {
      "tipo": "pais",
      "slug": "emirados-arabes-unidos",
      "codigo": "784",
      "sigla": "AE",
      "sigla3": "ARE",
      "nome": {
        "en": "United Arab Emirates",
        "es": "Emiratos Árabes Unidos",
        "pt": "Emirados Árabes Unidos"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "971"
    },
    {
      "tipo": "pais",
      "slug": "afeganistao",
      "codigo": "004",
      "sigla": "AF",
      "sigla3": "AFG",
      "nome": {
        "en": "Afghanistan",
        "es": "Afganistán",
        "pt": "Afeganistão"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "93"
    },
    {
      "tipo": "pais",
      "slug": "argelia",
      "codigo": "012",
      "sigla": "DZ",
      "sigla3": "DZA",
      "nome": {
        "en": "Algeria",
        "es": "Argelia",
        "pt": "Argélia"
      },
      "parent": "015",
      "parents": {
        "continente": "",
        "regiao": "002",
        "subregiao": "015"
      },
      "ddi": "213"
    },
    {
      "tipo": "pais",
      "slug": "azerbaijao",
      "codigo": "031",
      "sigla": "AZ",
      "sigla3": "AZE",
      "nome": {
        "en": "Azerbaijan",
        "es": "Azerbaiyán",
        "pt": "Azerbaijão"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "994"
    },
    {
      "tipo": "pais",
      "slug": "albania",
      "codigo": "008",
      "sigla": "AL",
      "sigla3": "ALB",
      "nome": {
        "en": "Albania",
        "es": "Albania",
        "pt": "Albânia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "355"
    },
    {
      "tipo": "pais",
      "slug": "armenia",
      "codigo": "051",
      "sigla": "AM",
      "sigla3": "ARM",
      "nome": {
        "en": "Armenia",
        "es": "Armenia",
        "pt": "Armênia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "374"
    },
    {
      "tipo": "pais",
      "slug": "andorra",
      "codigo": "020",
      "sigla": "AD",
      "sigla3": "AND",
      "nome": {
        "en": "Andorra",
        "es": "Andorra",
        "pt": "Andorra"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "376"
    },
    {
      "tipo": "pais",
      "slug": "angola",
      "codigo": "024",
      "sigla": "AO",
      "sigla3": "AGO",
      "nome": {
        "en": "Angola",
        "es": "Angola",
        "pt": "Angola"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "244"
    },
    {
      "tipo": "pais",
      "slug": "argentina",
      "codigo": "032",
      "sigla": "AR",
      "sigla3": "ARG",
      "nome": {
        "en": "Argentina",
        "es": "Argentina",
        "pt": "Argentina"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "54"
    },
    {
      "tipo": "pais",
      "slug": "australia",
      "codigo": "036",
      "sigla": "AU",
      "sigla3": "AUS",
      "nome": {
        "en": "Australia",
        "es": "Australia",
        "pt": "Austrália"
      },
      "parent": "053",
      "parents": {
        "continente": "",
        "regiao": "009",
        "subregiao": "053"
      },
      "ddi": "61"
    },
    {
      "tipo": "pais",
      "slug": "austria",
      "codigo": "040",
      "sigla": "AT",
      "sigla3": "AUT",
      "nome": {
        "en": "Austria",
        "es": "Austria",
        "pt": "Áustria"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "43"
    },
    {
      "tipo": "pais",
      "slug": "barein",
      "codigo": "048",
      "sigla": "BH",
      "sigla3": "BHR",
      "nome": {
        "en": "Bahrain",
        "es": "Bahrein",
        "pt": "Barein"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "973"
    },
    {
      "tipo": "pais",
      "slug": "barbados",
      "codigo": "052",
      "sigla": "BB",
      "sigla3": "BRB",
      "nome": {
        "en": "Barbados",
        "es": "Barbados",
        "pt": "Barbados"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-246"
    },
    {
      "tipo": "pais",
      "slug": "botswana",
      "codigo": "072",
      "sigla": "BW",
      "sigla3": "BWA",
      "nome": {
        "en": "Botswana",
        "es": "Botswana",
        "pt": "Botswana"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "267"
    },
    {
      "tipo": "pais",
      "slug": "belgica",
      "codigo": "056",
      "sigla": "BE",
      "sigla3": "BEL",
      "nome": {
        "en": "Belgium",
        "es": "Bélgica",
        "pt": "Bélgica"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "32"
    },
    {
      "tipo": "pais",
      "slug": "bahamas",
      "codigo": "044",
      "sigla": "BS",
      "sigla3": "BHS",
      "nome": {
        "en": "Bahamas",
        "es": "Bahamas",
        "pt": "Bahamas"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-242"
    },
    {
      "tipo": "pais",
      "slug": "bangladesh",
      "codigo": "050",
      "sigla": "BD",
      "sigla3": "BGD",
      "nome": {
        "en": "Bangladesh",
        "es": "Bangladesh",
        "pt": "Bangladesh"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "880"
    },
    {
      "tipo": "pais",
      "slug": "belize",
      "codigo": "084",
      "sigla": "BZ",
      "sigla3": "BLZ",
      "nome": {
        "en": "Belize",
        "es": "Belice",
        "pt": "Belize"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "501"
    },
    {
      "tipo": "pais",
      "slug": "bosnia-e-herzegovina",
      "codigo": "070",
      "sigla": "BA",
      "sigla3": "BIH",
      "nome": {
        "en": "Bosnia and Herzegovina",
        "es": "Bosnia y Herzegovina",
        "pt": "Bósnia e Herzegovina"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "387"
    },
    {
      "tipo": "pais",
      "slug": "bolivia",
      "codigo": "068",
      "sigla": "BO",
      "sigla3": "BOL",
      "nome": {
        "en": "Bolivia (Plurinational State of)",
        "es": "Bolivia (Estado Plurinacional de)",
        "pt": "Bolívia"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "591"
    },
    {
      "tipo": "pais",
      "slug": "mianmar",
      "codigo": "104",
      "sigla": "MM",
      "sigla3": "MMR",
      "nome": {
        "en": "Myanmar",
        "es": "Myanmar",
        "pt": "Mianmar"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "95"
    },
    {
      "tipo": "pais",
      "slug": "benin",
      "codigo": "204",
      "sigla": "BJ",
      "sigla3": "BEN",
      "nome": {
        "en": "Benin",
        "es": "Benin",
        "pt": "Benin"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "229"
    },
    {
      "tipo": "pais",
      "slug": "belarus",
      "codigo": "112",
      "sigla": "BY",
      "sigla3": "BLR",
      "nome": {
        "en": "Belarus",
        "es": "Belarús",
        "pt": "Belarus"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "375"
    },
    {
      "tipo": "pais",
      "slug": "ilhas-salomao",
      "codigo": "090",
      "sigla": "SB",
      "sigla3": "SLB",
      "nome": {
        "en": "Solomon Islands",
        "es": "Islas Salomón",
        "pt": "Ilhas Salomão"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "677"
    },
    {
      "tipo": "pais",
      "slug": "brasil",
      "codigo": "076",
      "sigla": "BR",
      "sigla3": "BRA",
      "nome": {
        "en": "Brazil",
        "es": "Brasil",
        "pt": "Brasil"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "55"
    },
    {
      "tipo": "pais",
      "slug": "butao",
      "codigo": "064",
      "sigla": "BT",
      "sigla3": "BTN",
      "nome": {
        "en": "Bhutan",
        "es": "Bhután",
        "pt": "Butão"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "975"
    },
    {
      "tipo": "pais",
      "slug": "bulgaria",
      "codigo": "100",
      "sigla": "BG",
      "sigla3": "BGR",
      "nome": {
        "en": "Bulgaria",
        "es": "Bulgaria",
        "pt": "Bulgária"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "359"
    },
    {
      "tipo": "pais",
      "slug": "brunei",
      "codigo": "096",
      "sigla": "BN",
      "sigla3": "BRN",
      "nome": {
        "en": "Brunei Darussalam",
        "es": "Brunei Darussalam",
        "pt": "Brunei"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "673"
    },
    {
      "tipo": "pais",
      "slug": "burundi",
      "codigo": "108",
      "sigla": "BI",
      "sigla3": "BDI",
      "nome": {
        "en": "Burundi",
        "es": "Burundi",
        "pt": "Burundi"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "257"
    },
    {
      "tipo": "pais",
      "slug": "canada",
      "codigo": "124",
      "sigla": "CA",
      "sigla3": "CAN",
      "nome": {
        "en": "Canada",
        "es": "Canadá",
        "pt": "Canadá "
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1"
    },
    {
      "tipo": "pais",
      "slug": "camboja",
      "codigo": "116",
      "sigla": "KH",
      "sigla3": "KHM",
      "nome": {
        "en": "Cambodia",
        "es": "Camboya",
        "pt": "Camboja"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "855"
    },
    {
      "tipo": "pais",
      "slug": "chade",
      "codigo": "148",
      "sigla": "TD",
      "sigla3": "TCD",
      "nome": {
        "en": "Chad",
        "es": "Chad",
        "pt": "Chade"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "235"
    },
    {
      "tipo": "pais",
      "slug": "sri-lanka",
      "codigo": "144",
      "sigla": "LK",
      "sigla3": "LKA",
      "nome": {
        "en": "Sri Lanka",
        "es": "Sri Lanka",
        "pt": "Sri Lanka"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "94"
    },
    {
      "tipo": "pais",
      "slug": "congo",
      "codigo": "178",
      "sigla": "CG",
      "sigla3": "COG",
      "nome": {
        "en": "Congo",
        "es": "Congo",
        "pt": "Congo"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "242"
    },
    {
      "tipo": "pais",
      "slug": "republica-democratica-do-congo",
      "codigo": "180",
      "sigla": "CD",
      "sigla3": "COD",
      "nome": {
        "en": "Democratic Republic of the Congo",
        "es": "República Democrática del Congo",
        "pt": "República Democrática do Congo"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "243"
    },
    {
      "tipo": "pais",
      "slug": "china",
      "codigo": "156",
      "sigla": "CN",
      "sigla3": "CHN",
      "nome": {
        "en": "China",
        "es": "China",
        "pt": "China"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "86"
    },
    {
      "tipo": "pais",
      "slug": "chile",
      "codigo": "152",
      "sigla": "CL",
      "sigla3": "CHL",
      "nome": {
        "en": "Chile",
        "es": "Chile",
        "pt": "Chile"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "56"
    },
    {
      "tipo": "pais",
      "slug": "camaroes",
      "codigo": "120",
      "sigla": "CM",
      "sigla3": "CMR",
      "nome": {
        "en": "Cameroon",
        "es": "Camerún",
        "pt": "Camarões"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "237"
    },
    {
      "tipo": "pais",
      "slug": "comores",
      "codigo": "174",
      "sigla": "KM",
      "sigla3": "COM",
      "nome": {
        "en": "Comoros",
        "es": "Comoras",
        "pt": "Comores"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "269"
    },
    {
      "tipo": "pais",
      "slug": "colombia",
      "codigo": "170",
      "sigla": "CO",
      "sigla3": "COL",
      "nome": {
        "en": "Colombia",
        "es": "Colombia",
        "pt": "Colômbia"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "57"
    },
    {
      "tipo": "pais",
      "slug": "costa-rica",
      "codigo": "188",
      "sigla": "CR",
      "sigla3": "CRI",
      "nome": {
        "en": "Costa Rica",
        "es": "Costa Rica",
        "pt": "Costa Rica"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "506"
    },
    {
      "tipo": "pais",
      "slug": "republica-centro-africana",
      "codigo": "140",
      "sigla": "CF",
      "sigla3": "CAF",
      "nome": {
        "en": "Central African Republic",
        "es": "República Centroafricana",
        "pt": "República Centro Africana"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "236"
    },
    {
      "tipo": "pais",
      "slug": "cuba",
      "codigo": "192",
      "sigla": "CU",
      "sigla3": "CUB",
      "nome": {
        "en": "Cuba",
        "es": "Cuba",
        "pt": "Cuba"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "53"
    },
    {
      "tipo": "pais",
      "slug": "cabo-verde",
      "codigo": "132",
      "sigla": "CV",
      "sigla3": "CPV",
      "nome": {
        "en": "Cabo Verde",
        "es": "Cabo Verde",
        "pt": "Cabo Verde"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "238"
    },
    {
      "tipo": "pais",
      "slug": "chipre",
      "codigo": "196",
      "sigla": "CY",
      "sigla3": "CYP",
      "nome": {
        "en": "Cyprus",
        "es": "Chipre",
        "pt": "Chipre"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "357"
    },
    {
      "tipo": "pais",
      "slug": "dinamarca",
      "codigo": "208",
      "sigla": "DK",
      "sigla3": "DNK",
      "nome": {
        "en": "Denmark",
        "es": "Dinamarca",
        "pt": "Dinamarca"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "45"
    },
    {
      "tipo": "pais",
      "slug": "djibuti",
      "codigo": "262",
      "sigla": "DJ",
      "sigla3": "DJI",
      "nome": {
        "en": "Djibouti",
        "es": "Djibouti",
        "pt": "Djibuti"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "253"
    },
    {
      "tipo": "pais",
      "slug": "dominica",
      "codigo": "212",
      "sigla": "DM",
      "sigla3": "DMA",
      "nome": {
        "en": "Dominica",
        "es": "Dominica",
        "pt": "Dominica"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-767"
    },
    {
      "tipo": "pais",
      "slug": "republica-dominicana",
      "codigo": "214",
      "sigla": "DO",
      "sigla3": "DOM",
      "nome": {
        "en": "Dominican Republic",
        "es": "República Dominicana",
        "pt": "República Dominicana"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-809,1-829,1-849"
    },
    {
      "tipo": "pais",
      "slug": "equador",
      "codigo": "218",
      "sigla": "EC",
      "sigla3": "ECU",
      "nome": {
        "en": "Ecuador",
        "es": "Ecuador",
        "pt": "Equador"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "593"
    },
    {
      "tipo": "pais",
      "slug": "egito",
      "codigo": "818",
      "sigla": "EG",
      "sigla3": "EGY",
      "nome": {
        "en": "Egypt",
        "es": "Egipto",
        "pt": "Egito"
      },
      "parent": "015",
      "parents": {
        "continente": "",
        "regiao": "002",
        "subregiao": "015"
      },
      "ddi": "20"
    },
    {
      "tipo": "pais",
      "slug": "irlanda",
      "codigo": "372",
      "sigla": "IE",
      "sigla3": "IRL",
      "nome": {
        "en": "Ireland",
        "es": "Irlanda",
        "pt": "Irlanda"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "353"
    },
    {
      "tipo": "pais",
      "slug": "guine-equatorial",
      "codigo": "226",
      "sigla": "GQ",
      "sigla3": "GNQ",
      "nome": {
        "en": "Equatorial Guinea",
        "es": "Guinea Ecuatorial",
        "pt": "Guiné Equatorial"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "240"
    },
    {
      "tipo": "pais",
      "slug": "estonia",
      "codigo": "233",
      "sigla": "EE",
      "sigla3": "EST",
      "nome": {
        "en": "Estonia",
        "es": "Estonia",
        "pt": "Estônia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "372"
    },
    {
      "tipo": "pais",
      "slug": "eritreia",
      "codigo": "232",
      "sigla": "ER",
      "sigla3": "ERI",
      "nome": {
        "en": "Eritrea",
        "es": "Eritrea",
        "pt": "Eritreia"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "291"
    },
    {
      "tipo": "pais",
      "slug": "el-salvador",
      "codigo": "222",
      "sigla": "SV",
      "sigla3": "SLV",
      "nome": {
        "en": "El Salvador",
        "es": "El Salvador",
        "pt": "El Salvador"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "503"
    },
    {
      "tipo": "pais",
      "slug": "etiopia",
      "codigo": "231",
      "sigla": "ET",
      "sigla3": "ETH",
      "nome": {
        "en": "Ethiopia",
        "es": "Etiopía",
        "pt": "Etiópia"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "251"
    },
    {
      "tipo": "pais",
      "slug": "republica-tcheca",
      "codigo": "203",
      "sigla": "CZ",
      "sigla3": "CZE",
      "nome": {
        "en": "Czechia",
        "es": "Chequia",
        "pt": "República Tcheca"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "420"
    },
    {
      "tipo": "pais",
      "slug": "finlandia",
      "codigo": "246",
      "sigla": "FI",
      "sigla3": "FIN",
      "nome": {
        "en": "Finland",
        "es": "Finlandia",
        "pt": "Finlândia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "358"
    },
    {
      "tipo": "pais",
      "slug": "fiji",
      "codigo": "242",
      "sigla": "FJ",
      "sigla3": "FJI",
      "nome": {
        "en": "Fiji",
        "es": "Fiji",
        "pt": "Fiji"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "679"
    },
    {
      "tipo": "pais",
      "slug": "federacao-dos-estados-da-micronesia",
      "codigo": "583",
      "sigla": "FM",
      "sigla3": "FSM",
      "nome": {
        "en": "Micronesia (Federated States of)",
        "es": "Micronesia (Estados Federados de)",
        "pt": "Federação dos Estados da Micronésia"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "691"
    },
    {
      "tipo": "pais",
      "slug": "franca",
      "codigo": "250",
      "sigla": "FR",
      "sigla3": "FRA",
      "nome": {
        "en": "France",
        "es": "Francia",
        "pt": "França"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "33"
    },
    {
      "tipo": "pais",
      "slug": "gambia",
      "codigo": "270",
      "sigla": "GM",
      "sigla3": "GMB",
      "nome": {
        "en": "Gambia",
        "es": "Gambia",
        "pt": "Gâmbia"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "220"
    },
    {
      "tipo": "pais",
      "slug": "gabao",
      "codigo": "266",
      "sigla": "GA",
      "sigla3": "GAB",
      "nome": {
        "en": "Gabon",
        "es": "Gabón",
        "pt": "Gabão"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "241"
    },
    {
      "tipo": "pais",
      "slug": "georgia",
      "codigo": "268",
      "sigla": "GE",
      "sigla3": "GEO",
      "nome": {
        "en": "Georgia",
        "es": "Georgia",
        "pt": "Geórgia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "995"
    },
    {
      "tipo": "pais",
      "slug": "gana",
      "codigo": "288",
      "sigla": "GH",
      "sigla3": "GHA",
      "nome": {
        "en": "Ghana",
        "es": "Ghana",
        "pt": "Gana"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "233"
    },
    {
      "tipo": "pais",
      "slug": "granada",
      "codigo": "308",
      "sigla": "GD",
      "sigla3": "GRD",
      "nome": {
        "en": "Grenada",
        "es": "Granada",
        "pt": "Granada"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-473"
    },
    {
      "tipo": "pais",
      "slug": "alemanha",
      "codigo": "276",
      "sigla": "DE",
      "sigla3": "DEU",
      "nome": {
        "en": "Germany",
        "es": "Alemania",
        "pt": "Alemanha"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "49"
    },
    {
      "tipo": "pais",
      "slug": "grecia",
      "codigo": "300",
      "sigla": "GR",
      "sigla3": "GRC",
      "nome": {
        "en": "Greece",
        "es": "Grecia",
        "pt": "Grécia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "30"
    },
    {
      "tipo": "pais",
      "slug": "guatemala",
      "codigo": "320",
      "sigla": "GT",
      "sigla3": "GTM",
      "nome": {
        "en": "Guatemala",
        "es": "Guatemala",
        "pt": "Guatemala"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "502"
    },
    {
      "tipo": "pais",
      "slug": "guine",
      "codigo": "324",
      "sigla": "GN",
      "sigla3": "GIN",
      "nome": {
        "en": "Guinea",
        "es": "Guinea",
        "pt": "Guiné"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "224"
    },
    {
      "tipo": "pais",
      "slug": "guiana",
      "codigo": "328",
      "sigla": "GY",
      "sigla3": "GUY",
      "nome": {
        "en": "Guyana",
        "es": "Guyana",
        "pt": "Guiana"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "592"
    },
    {
      "tipo": "pais",
      "slug": "haiti",
      "codigo": "332",
      "sigla": "HT",
      "sigla3": "HTI",
      "nome": {
        "en": "Haiti",
        "es": "Haití",
        "pt": "Haiti"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "509"
    },
    {
      "tipo": "pais",
      "slug": "honduras",
      "codigo": "340",
      "sigla": "HN",
      "sigla3": "HND",
      "nome": {
        "en": "Honduras",
        "es": "Honduras",
        "pt": "Honduras"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "504"
    },
    {
      "tipo": "pais",
      "slug": "croacia",
      "codigo": "191",
      "sigla": "HR",
      "sigla3": "HRV",
      "nome": {
        "en": "Croatia",
        "es": "Croacia",
        "pt": "Croácia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "385"
    },
    {
      "tipo": "pais",
      "slug": "hungria",
      "codigo": "348",
      "sigla": "HU",
      "sigla3": "HUN",
      "nome": {
        "en": "Hungary",
        "es": "Hungría",
        "pt": "Hungria"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "36"
    },
    {
      "tipo": "pais",
      "slug": "islandia",
      "codigo": "352",
      "sigla": "IS",
      "sigla3": "ISL",
      "nome": {
        "en": "Iceland",
        "es": "Islandia",
        "pt": "Islândia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "354"
    },
    {
      "tipo": "pais",
      "slug": "indonesia",
      "codigo": "360",
      "sigla": "ID",
      "sigla3": "IDN",
      "nome": {
        "en": "Indonesia",
        "es": "Indonesia",
        "pt": "Indonésia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "62"
    },
    {
      "tipo": "pais",
      "slug": "india",
      "codigo": "356",
      "sigla": "IN",
      "sigla3": "IND",
      "nome": {
        "en": "India",
        "es": "India",
        "pt": "Índia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "91"
    },
    {
      "tipo": "pais",
      "slug": "ira",
      "codigo": "364",
      "sigla": "IR",
      "sigla3": "IRN",
      "nome": {
        "en": "Iran (Islamic Republic of)",
        "es": "Irán (República Islámica del)",
        "pt": "Irã"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "98"
    },
    {
      "tipo": "pais",
      "slug": "israel",
      "codigo": "376",
      "sigla": "IL",
      "sigla3": "ISR",
      "nome": {
        "en": "Israel",
        "es": "Israel",
        "pt": "Israel"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "972"
    },
    {
      "tipo": "pais",
      "slug": "italia",
      "codigo": "380",
      "sigla": "IT",
      "sigla3": "ITA",
      "nome": {
        "en": "Italy",
        "es": "Italia",
        "pt": "Itália"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "39"
    },
    {
      "tipo": "pais",
      "slug": "costa-do-marfim",
      "codigo": "384",
      "sigla": "CI",
      "sigla3": "CIV",
      "nome": {
        "en": "Côte d'Ivoire",
        "es": "Côte d'Ivoire",
        "pt": "Costa do Marfim"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "225"
    },
    {
      "tipo": "pais",
      "slug": "iraque",
      "codigo": "368",
      "sigla": "IQ",
      "sigla3": "IRQ",
      "nome": {
        "en": "Iraq",
        "es": "Iraq",
        "pt": "Iraque"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "964"
    },
    {
      "tipo": "pais",
      "slug": "japao",
      "codigo": "392",
      "sigla": "JP",
      "sigla3": "JPN",
      "nome": {
        "en": "Japan",
        "es": "Japón",
        "pt": "Japão"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "81"
    },
    {
      "tipo": "pais",
      "slug": "jamaica",
      "codigo": "388",
      "sigla": "JM",
      "sigla3": "JAM",
      "nome": {
        "en": "Jamaica",
        "es": "Jamaica",
        "pt": "Jamaica"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-876"
    },
    {
      "tipo": "pais",
      "slug": "jordania",
      "codigo": "400",
      "sigla": "JO",
      "sigla3": "JOR",
      "nome": {
        "en": "Jordan",
        "es": "Jordania",
        "pt": "Jordânia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "962"
    },
    {
      "tipo": "pais",
      "slug": "quenia",
      "codigo": "404",
      "sigla": "KE",
      "sigla3": "KEN",
      "nome": {
        "en": "Kenya",
        "es": "Kenya",
        "pt": "Quênia"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "254"
    },
    {
      "tipo": "pais",
      "slug": "quirguistao",
      "codigo": "417",
      "sigla": "KG",
      "sigla3": "KGZ",
      "nome": {
        "en": "Kyrgyzstan",
        "es": "Kirguistán",
        "pt": "Quirguistão"
      },
      "parent": "143",
      "parents": {
        "continente": "",
        "regiao": "142",
        "subregiao": "143"
      },
      "ddi": "996"
    },
    {
      "tipo": "pais",
      "slug": "republica-popular-democratica-da-coreia",
      "codigo": "408",
      "sigla": "KP",
      "sigla3": "PRK",
      "nome": {
        "en": "Democratic People's Republic of Korea",
        "es": "República Popular Democrática de Corea",
        "pt": "República Popular Democrática da Coreia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "850"
    },
    {
      "tipo": "pais",
      "slug": "kiribati",
      "codigo": "296",
      "sigla": "KI",
      "sigla3": "KIR",
      "nome": {
        "en": "Kiribati",
        "es": "Kiribati",
        "pt": "Kiribati"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "686"
    },
    {
      "tipo": "pais",
      "slug": "republica-da-coreia",
      "codigo": "410",
      "sigla": "KR",
      "sigla3": "KOR",
      "nome": {
        "en": "Republic of Korea",
        "es": "República de Corea",
        "pt": "República da Coreia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "82"
    },
    {
      "tipo": "pais",
      "slug": "kuwait",
      "codigo": "414",
      "sigla": "KW",
      "sigla3": "KWT",
      "nome": {
        "en": "Kuwait",
        "es": "Kuwait",
        "pt": "Kuwait"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "965"
    },
    {
      "tipo": "pais",
      "slug": "cazaquistao",
      "codigo": "398",
      "sigla": "KZ",
      "sigla3": "KAZ",
      "nome": {
        "en": "Kazakhstan",
        "es": "Kazajstán",
        "pt": "Cazaquistão"
      },
      "parent": "143",
      "parents": {
        "continente": "",
        "regiao": "142",
        "subregiao": "143"
      },
      "ddi": "7"
    },
    {
      "tipo": "pais",
      "slug": "laos",
      "codigo": "418",
      "sigla": "LA",
      "sigla3": "LAO",
      "nome": {
        "en": "Lao People's Democratic Republic",
        "es": "República Democrática Popular Lao",
        "pt": "Laos"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "856"
    },
    {
      "tipo": "pais",
      "slug": "libano",
      "codigo": "422",
      "sigla": "LB",
      "sigla3": "LBN",
      "nome": {
        "en": "Lebanon",
        "es": "Líbano",
        "pt": "Líbano"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "961"
    },
    {
      "tipo": "pais",
      "slug": "letonia",
      "codigo": "428",
      "sigla": "LV",
      "sigla3": "LVA",
      "nome": {
        "en": "Latvia",
        "es": "Letonia",
        "pt": "Letônia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "371"
    },
    {
      "tipo": "pais",
      "slug": "lituania",
      "codigo": "440",
      "sigla": "LT",
      "sigla3": "LTU",
      "nome": {
        "en": "Lithuania",
        "es": "Lituania",
        "pt": "Lituânia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "370"
    },
    {
      "tipo": "pais",
      "slug": "liberia",
      "codigo": "430",
      "sigla": "LR",
      "sigla3": "LBR",
      "nome": {
        "en": "Liberia",
        "es": "Liberia",
        "pt": "Libéria"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "231"
    },
    {
      "tipo": "pais",
      "slug": "eslovaquia",
      "codigo": "703",
      "sigla": "SK",
      "sigla3": "SVK",
      "nome": {
        "en": "Slovakia",
        "es": "Eslovaquia",
        "pt": "Eslováquia"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "421"
    },
    {
      "tipo": "pais",
      "slug": "liechtenstein",
      "codigo": "438",
      "sigla": "LI",
      "sigla3": "LIE",
      "nome": {
        "en": "Liechtenstein",
        "es": "Liechtenstein",
        "pt": "Liechtenstein"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "423"
    },
    {
      "tipo": "pais",
      "slug": "lesoto",
      "codigo": "426",
      "sigla": "LS",
      "sigla3": "LSO",
      "nome": {
        "en": "Lesotho",
        "es": "Lesotho",
        "pt": "Lesoto"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "266"
    },
    {
      "tipo": "pais",
      "slug": "luxemburgo",
      "codigo": "442",
      "sigla": "LU",
      "sigla3": "LUX",
      "nome": {
        "en": "Luxembourg",
        "es": "Luxemburgo",
        "pt": "Luxemburgo"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "352"
    },
    {
      "tipo": "pais",
      "slug": "libia",
      "codigo": "434",
      "sigla": "LY",
      "sigla3": "LBY",
      "nome": {
        "en": "Libya",
        "es": "Libia",
        "pt": "Líbia"
      },
      "parent": "015",
      "parents": {
        "continente": "",
        "regiao": "002",
        "subregiao": "015"
      },
      "ddi": "218"
    },
    {
      "tipo": "pais",
      "slug": "madagascar",
      "codigo": "450",
      "sigla": "MG",
      "sigla3": "MDG",
      "nome": {
        "en": "Madagascar",
        "es": "Madagascar",
        "pt": "Madagascar"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "261"
    },
    {
      "tipo": "pais",
      "slug": "moldavia",
      "codigo": "498",
      "sigla": "MD",
      "sigla3": "MDA",
      "nome": {
        "en": "Republic of Moldova",
        "es": "República de Moldova",
        "pt": "Moldávia"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "373"
    },
    {
      "tipo": "pais",
      "slug": "mongolia",
      "codigo": "496",
      "sigla": "MN",
      "sigla3": "MNG",
      "nome": {
        "en": "Mongolia",
        "es": "Mongolia",
        "pt": "Mongólia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "976"
    },
    {
      "tipo": "pais",
      "slug": "malawi",
      "codigo": "454",
      "sigla": "MW",
      "sigla3": "MWI",
      "nome": {
        "en": "Malawi",
        "es": "Malawi",
        "pt": "Malawi"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "265"
    },
    {
      "tipo": "pais",
      "slug": "montenegro",
      "codigo": "499",
      "sigla": "ME",
      "sigla3": "MNE",
      "nome": {
        "en": "Montenegro",
        "es": "Montenegro",
        "pt": "Montenegro"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "382"
    },
    {
      "tipo": "pais",
      "slug": "macedonia",
      "codigo": "807",
      "sigla": "MK",
      "sigla3": "MKD",
      "nome": {
        "en": "The former Yugoslav Republic of Macedonia",
        "es": "ex República Yugoslava de Macedonia",
        "pt": "Macedônia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "389"
    },
    {
      "tipo": "pais",
      "slug": "mali",
      "codigo": "466",
      "sigla": "ML",
      "sigla3": "MLI",
      "nome": {
        "en": "Mali",
        "es": "Malí",
        "pt": "Mali"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "223"
    },
    {
      "tipo": "pais",
      "slug": "monaco",
      "codigo": "492",
      "sigla": "MC",
      "sigla3": "MCO",
      "nome": {
        "en": "Monaco",
        "es": "Mónaco",
        "pt": "Mônaco"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "377"
    },
    {
      "tipo": "pais",
      "slug": "marrocos",
      "codigo": "504",
      "sigla": "MA",
      "sigla3": "MAR",
      "nome": {
        "en": "Morocco",
        "es": "Marruecos",
        "pt": "Marrocos"
      },
      "parent": "015",
      "parents": {
        "continente": "",
        "regiao": "002",
        "subregiao": "015"
      },
      "ddi": "212"
    },
    {
      "tipo": "pais",
      "slug": "mauricio",
      "codigo": "480",
      "sigla": "MU",
      "sigla3": "MUS",
      "nome": {
        "en": "Mauritius",
        "es": "Mauricio",
        "pt": "Maurício"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "230"
    },
    {
      "tipo": "pais",
      "slug": "mauritania",
      "codigo": "478",
      "sigla": "MR",
      "sigla3": "MRT",
      "nome": {
        "en": "Mauritania",
        "es": "Mauritania",
        "pt": "Mauritânia"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "222"
    },
    {
      "tipo": "pais",
      "slug": "malta",
      "codigo": "470",
      "sigla": "MT",
      "sigla3": "MLT",
      "nome": {
        "en": "Malta",
        "es": "Malta",
        "pt": "Malta"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "356"
    },
    {
      "tipo": "pais",
      "slug": "oma",
      "codigo": "512",
      "sigla": "OM",
      "sigla3": "OMN",
      "nome": {
        "en": "Oman",
        "es": "Omán",
        "pt": "Omã"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "968"
    },
    {
      "tipo": "pais",
      "slug": "maldivas",
      "codigo": "462",
      "sigla": "MV",
      "sigla3": "MDV",
      "nome": {
        "en": "Maldives",
        "es": "Maldivas",
        "pt": "Maldivas"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "960"
    },
    {
      "tipo": "pais",
      "slug": "mexico",
      "codigo": "484",
      "sigla": "MX",
      "sigla3": "MEX",
      "nome": {
        "en": "Mexico",
        "es": "México",
        "pt": "México"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "52"
    },
    {
      "tipo": "pais",
      "slug": "malasia",
      "codigo": "458",
      "sigla": "MY",
      "sigla3": "MYS",
      "nome": {
        "en": "Malaysia",
        "es": "Malasia",
        "pt": "Malásia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "60"
    },
    {
      "tipo": "pais",
      "slug": "mocambique",
      "codigo": "508",
      "sigla": "MZ",
      "sigla3": "MOZ",
      "nome": {
        "en": "Mozambique",
        "es": "Mozambique",
        "pt": "Moçambique"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "258"
    },
    {
      "tipo": "pais",
      "slug": "niger",
      "codigo": "562",
      "sigla": "NE",
      "sigla3": "NER",
      "nome": {
        "en": "Niger",
        "es": "Níger",
        "pt": "Níger"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "227"
    },
    {
      "tipo": "pais",
      "slug": "vanuatu",
      "codigo": "548",
      "sigla": "VU",
      "sigla3": "VUT",
      "nome": {
        "en": "Vanuatu",
        "es": "Vanuatu",
        "pt": "Vanuatu"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "678"
    },
    {
      "tipo": "pais",
      "slug": "nigeria",
      "codigo": "566",
      "sigla": "NG",
      "sigla3": "NGA",
      "nome": {
        "en": "Nigeria",
        "es": "Nigeria",
        "pt": "Nigéria"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "234"
    },
    {
      "tipo": "pais",
      "slug": "holanda",
      "codigo": "528",
      "sigla": "NL",
      "sigla3": "NLD",
      "nome": {
        "en": "Netherlands",
        "es": "Países Bajos",
        "pt": "Holanda"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "31"
    },
    {
      "tipo": "pais",
      "slug": "noruega",
      "codigo": "578",
      "sigla": "NO",
      "sigla3": "NOR",
      "nome": {
        "en": "Norway",
        "es": "Noruega",
        "pt": "Noruega"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "47"
    },
    {
      "tipo": "pais",
      "slug": "nepal",
      "codigo": "524",
      "sigla": "NP",
      "sigla3": "NPL",
      "nome": {
        "en": "Nepal",
        "es": "Nepal",
        "pt": "Nepal"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "977"
    },
    {
      "tipo": "pais",
      "slug": "nauru",
      "codigo": "520",
      "sigla": "NR",
      "sigla3": "NRU",
      "nome": {
        "en": "Nauru",
        "es": "Nauru",
        "pt": "Nauru"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "674"
    },
    {
      "tipo": "pais",
      "slug": "suriname",
      "codigo": "740",
      "sigla": "SR",
      "sigla3": "SUR",
      "nome": {
        "en": "Suriname",
        "es": "Suriname",
        "pt": "Suriname"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "597"
    },
    {
      "tipo": "pais",
      "slug": "nicaragua",
      "codigo": "558",
      "sigla": "NI",
      "sigla3": "NIC",
      "nome": {
        "en": "Nicaragua",
        "es": "Nicaragua",
        "pt": "Nicarágua"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "505"
    },
    {
      "tipo": "pais",
      "slug": "nova-zelandia",
      "codigo": "554",
      "sigla": "NZ",
      "sigla3": "NZL",
      "nome": {
        "en": "New Zealand",
        "es": "Nueva Zelandia",
        "pt": "Nova Zelândia"
      },
      "parent": "053",
      "parents": {
        "continente": "",
        "regiao": "009",
        "subregiao": "053"
      },
      "ddi": "64"
    },
    {
      "tipo": "pais",
      "slug": "sudao-do-sul",
      "codigo": "728",
      "sigla": "SS",
      "sigla3": "SSD",
      "nome": {
        "en": "South Sudan",
        "es": "Sudán del Sur",
        "pt": "Sudão do Sul"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "211"
    },
    {
      "tipo": "pais",
      "slug": "paraguai",
      "codigo": "600",
      "sigla": "PY",
      "sigla3": "PRY",
      "nome": {
        "en": "Paraguay",
        "es": "Paraguay",
        "pt": "Paraguai"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "595"
    },
    {
      "tipo": "pais",
      "slug": "peru",
      "codigo": "604",
      "sigla": "PE",
      "sigla3": "PER",
      "nome": {
        "en": "Peru",
        "es": "Perú",
        "pt": "Peru"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "51"
    },
    {
      "tipo": "pais",
      "slug": "paquistao",
      "codigo": "586",
      "sigla": "PK",
      "sigla3": "PAK",
      "nome": {
        "en": "Pakistan",
        "es": "Pakistán",
        "pt": "Paquistão"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "92"
    },
    {
      "tipo": "pais",
      "slug": "polonia",
      "codigo": "616",
      "sigla": "PL",
      "sigla3": "POL",
      "nome": {
        "en": "Poland",
        "es": "Polonia",
        "pt": "Polônia"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "48"
    },
    {
      "tipo": "pais",
      "slug": "panama",
      "codigo": "591",
      "sigla": "PA",
      "sigla3": "PAN",
      "nome": {
        "en": "Panama",
        "es": "Panamá",
        "pt": "Panamá "
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "507"
    },
    {
      "tipo": "pais",
      "slug": "portugal",
      "codigo": "620",
      "sigla": "PT",
      "sigla3": "PRT",
      "nome": {
        "en": "Portugal",
        "es": "Portugal",
        "pt": "Portugal"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "351"
    },
    {
      "tipo": "pais",
      "slug": "papua-nova-guine",
      "codigo": "598",
      "sigla": "PG",
      "sigla3": "PNG",
      "nome": {
        "en": "Papua New Guinea",
        "es": "Papua Nueva Guinea",
        "pt": "Papua Nova Guiné"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "675"
    },
    {
      "tipo": "pais",
      "slug": "palau",
      "codigo": "585",
      "sigla": "PW",
      "sigla3": "PLW",
      "nome": {
        "en": "Palau",
        "es": "Palau",
        "pt": "Palau"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "680"
    },
    {
      "tipo": "pais",
      "slug": "guine-bissau",
      "codigo": "624",
      "sigla": "GW",
      "sigla3": "GNB",
      "nome": {
        "en": "Guinea-Bissau",
        "es": "Guinea-Bissau",
        "pt": "Guiné-Bissau"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "245"
    },
    {
      "tipo": "pais",
      "slug": "catar",
      "codigo": "634",
      "sigla": "QA",
      "sigla3": "QAT",
      "nome": {
        "en": "Qatar",
        "es": "Qatar",
        "pt": "Catar"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "974"
    },
    {
      "tipo": "pais",
      "slug": "servia",
      "codigo": "688",
      "sigla": "RS",
      "sigla3": "SRB",
      "nome": {
        "en": "Serbia",
        "es": "Serbia",
        "pt": "Sérvia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "381"
    },
    {
      "tipo": "pais",
      "slug": "ilhas-marshall",
      "codigo": "584",
      "sigla": "MH",
      "sigla3": "MHL",
      "nome": {
        "en": "Marshall Islands",
        "es": "Islas Marshall",
        "pt": "Ilhas Marshall"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "692"
    },
    {
      "tipo": "pais",
      "slug": "romenia",
      "codigo": "642",
      "sigla": "RO",
      "sigla3": "ROU",
      "nome": {
        "en": "Romania",
        "es": "Rumania",
        "pt": "Romênia"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "40"
    },
    {
      "tipo": "pais",
      "slug": "filipinas",
      "codigo": "608",
      "sigla": "PH",
      "sigla3": "PHL",
      "nome": {
        "en": "Philippines",
        "es": "Filipinas",
        "pt": "Filipinas"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "63"
    },
    {
      "tipo": "pais",
      "slug": "federacao-russa",
      "codigo": "643",
      "sigla": "RU",
      "sigla3": "RUS",
      "nome": {
        "en": "Russian Federation",
        "es": "Federación de Rusia",
        "pt": "Federação Russa"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "7"
    },
    {
      "tipo": "pais",
      "slug": "ruanda",
      "codigo": "646",
      "sigla": "RW",
      "sigla3": "RWA",
      "nome": {
        "en": "Rwanda",
        "es": "Rwanda",
        "pt": "Ruanda"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "250"
    },
    {
      "tipo": "pais",
      "slug": "arabia-saudita",
      "codigo": "682",
      "sigla": "SA",
      "sigla3": "SAU",
      "nome": {
        "en": "Saudi Arabia",
        "es": "Arabia Saudita",
        "pt": "Arábia Saudita"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "966"
    },
    {
      "tipo": "pais",
      "slug": "sao-cristovao-e-nevis",
      "codigo": "659",
      "sigla": "KN",
      "sigla3": "KNA",
      "nome": {
        "en": "Saint Kitts and Nevis",
        "es": "Saint Kitts y Nevis",
        "pt": "São Cristóvão e Névis"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-869"
    },
    {
      "tipo": "pais",
      "slug": "seychelles",
      "codigo": "690",
      "sigla": "SC",
      "sigla3": "SYC",
      "nome": {
        "en": "Seychelles",
        "es": "Seychelles",
        "pt": "Seychelles"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "248"
    },
    {
      "tipo": "pais",
      "slug": "africa-do-sul",
      "codigo": "710",
      "sigla": "ZA",
      "sigla3": "ZAF",
      "nome": {
        "en": "South Africa",
        "es": "Sudáfrica",
        "pt": "África do Sul"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "27"
    },
    {
      "tipo": "pais",
      "slug": "senegal",
      "codigo": "686",
      "sigla": "SN",
      "sigla3": "SEN",
      "nome": {
        "en": "Senegal",
        "es": "Senegal",
        "pt": "Senegal"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "221"
    },
    {
      "tipo": "pais",
      "slug": "eslovenia",
      "codigo": "705",
      "sigla": "SI",
      "sigla3": "SVN",
      "nome": {
        "en": "Slovenia",
        "es": "Eslovenia",
        "pt": "Eslovênia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "386"
    },
    {
      "tipo": "pais",
      "slug": "serra-leoa",
      "codigo": "694",
      "sigla": "SL",
      "sigla3": "SLE",
      "nome": {
        "en": "Sierra Leone",
        "es": "Sierra Leona",
        "pt": "Serra Leoa"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "232"
    },
    {
      "tipo": "pais",
      "slug": "san-marino",
      "codigo": "674",
      "sigla": "SM",
      "sigla3": "SMR",
      "nome": {
        "en": "San Marino",
        "es": "San Marino",
        "pt": "San Marino"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "378"
    },
    {
      "tipo": "pais",
      "slug": "cingapura",
      "codigo": "702",
      "sigla": "SG",
      "sigla3": "SGP",
      "nome": {
        "en": "Singapore",
        "es": "Singapur",
        "pt": "Cingapura"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "65"
    },
    {
      "tipo": "pais",
      "slug": "somalia",
      "codigo": "706",
      "sigla": "SO",
      "sigla3": "SOM",
      "nome": {
        "en": "Somalia",
        "es": "Somalia",
        "pt": "Somália"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "252"
    },
    {
      "tipo": "pais",
      "slug": "espanha",
      "codigo": "724",
      "sigla": "ES",
      "sigla3": "ESP",
      "nome": {
        "en": "Spain",
        "es": "España",
        "pt": "Espanha"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "34"
    },
    {
      "tipo": "pais",
      "slug": "santa-lucia",
      "codigo": "662",
      "sigla": "LC",
      "sigla3": "LCA",
      "nome": {
        "en": "Saint Lucia",
        "es": "Santa Lucía",
        "pt": "Santa Lúcia"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-758"
    },
    {
      "tipo": "pais",
      "slug": "sudao",
      "codigo": "729",
      "sigla": "SD",
      "sigla3": "SDN",
      "nome": {
        "en": "Sudan",
        "es": "Sudán",
        "pt": "Sudão"
      },
      "parent": "015",
      "parents": {
        "continente": "",
        "regiao": "002",
        "subregiao": "015"
      },
      "ddi": "249"
    },
    {
      "tipo": "pais",
      "slug": "suecia",
      "codigo": "752",
      "sigla": "SE",
      "sigla3": "SWE",
      "nome": {
        "en": "Sweden",
        "es": "Suecia",
        "pt": "Suécia"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "46"
    },
    {
      "tipo": "pais",
      "slug": "siria",
      "codigo": "760",
      "sigla": "SY",
      "sigla3": "SYR",
      "nome": {
        "en": "Syrian Arab Republic",
        "es": "República Árabe Siria",
        "pt": "Síria"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "963"
    },
    {
      "tipo": "pais",
      "slug": "suica",
      "codigo": "756",
      "sigla": "CH",
      "sigla3": "CHE",
      "nome": {
        "en": "Switzerland",
        "es": "Suiza",
        "pt": "Suíça"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "41"
    },
    {
      "tipo": "pais",
      "slug": "trinidad-e-tobago",
      "codigo": "780",
      "sigla": "TT",
      "sigla3": "TTO",
      "nome": {
        "en": "Trinidad and Tobago",
        "es": "Trinidad y Tabago",
        "pt": "Trinidad e Tobago"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-868"
    },
    {
      "tipo": "pais",
      "slug": "tailandia",
      "codigo": "764",
      "sigla": "TH",
      "sigla3": "THA",
      "nome": {
        "en": "Thailand",
        "es": "Tailandia",
        "pt": "Tailândia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "66"
    },
    {
      "tipo": "pais",
      "slug": "tajidquistao",
      "codigo": "762",
      "sigla": "TJ",
      "sigla3": "TJK",
      "nome": {
        "en": "Tajikistan",
        "es": "Tayikistán",
        "pt": "Tajidquistão"
      },
      "parent": "143",
      "parents": {
        "continente": "",
        "regiao": "142",
        "subregiao": "143"
      },
      "ddi": "992"
    },
    {
      "tipo": "pais",
      "slug": "timor-leste",
      "codigo": "626",
      "sigla": "TL",
      "sigla3": "TLS",
      "nome": {
        "en": "Timor-Leste",
        "es": "Timor-Leste",
        "pt": "Timor Leste"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "670"
    },
    {
      "tipo": "pais",
      "slug": "tonga",
      "codigo": "776",
      "sigla": "TO",
      "sigla3": "TON",
      "nome": {
        "en": "Tonga",
        "es": "Tonga",
        "pt": "Tonga"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "676"
    },
    {
      "tipo": "pais",
      "slug": "togo",
      "codigo": "768",
      "sigla": "TG",
      "sigla3": "TGO",
      "nome": {
        "en": "Togo",
        "es": "Togo",
        "pt": "Togo"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "228"
    },
    {
      "tipo": "pais",
      "slug": "sao-tome-e-principe",
      "codigo": "678",
      "sigla": "ST",
      "sigla3": "STP",
      "nome": {
        "en": "Sao Tome and Principe",
        "es": "Santo Tomé y Príncipe",
        "pt": "São Tomé e Príncipe"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "239"
    },
    {
      "tipo": "pais",
      "slug": "tunisia",
      "codigo": "788",
      "sigla": "TN",
      "sigla3": "TUN",
      "nome": {
        "en": "Tunisia",
        "es": "Túnez",
        "pt": "Tunísia"
      },
      "parent": "015",
      "parents": {
        "continente": "",
        "regiao": "002",
        "subregiao": "015"
      },
      "ddi": "216"
    },
    {
      "tipo": "pais",
      "slug": "turquia",
      "codigo": "792",
      "sigla": "TR",
      "sigla3": "TUR",
      "nome": {
        "en": "Turkey",
        "es": "Turquía",
        "pt": "Turquia"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "90"
    },
    {
      "tipo": "pais",
      "slug": "tuvalu",
      "codigo": "798",
      "sigla": "TV",
      "sigla3": "TUV",
      "nome": {
        "en": "Tuvalu",
        "es": "Tuvalu",
        "pt": "Tuvalu"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "688"
    },
    {
      "tipo": "pais",
      "slug": "turcomenistao",
      "codigo": "795",
      "sigla": "TM",
      "sigla3": "TKM",
      "nome": {
        "en": "Turkmenistan",
        "es": "Turkmenistán",
        "pt": "Turcomenistão"
      },
      "parent": "143",
      "parents": {
        "continente": "",
        "regiao": "142",
        "subregiao": "143"
      },
      "ddi": "993"
    },
    {
      "tipo": "pais",
      "slug": "tanzania",
      "codigo": "834",
      "sigla": "TZ",
      "sigla3": "TZA",
      "nome": {
        "en": "United Republic of Tanzania",
        "es": "República Unida de Tanzanía",
        "pt": "Tanzânia"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "255"
    },
    {
      "tipo": "pais",
      "slug": "uganda",
      "codigo": "800",
      "sigla": "UG",
      "sigla3": "UGA",
      "nome": {
        "en": "Uganda",
        "es": "Uganda",
        "pt": "Uganda"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "256"
    },
    {
      "tipo": "pais",
      "slug": "reino-unido",
      "codigo": "826",
      "sigla": "GB",
      "sigla3": "GBR",
      "nome": {
        "en": "United Kingdom of Great Britain and Northern Ireland",
        "es": "Reino Unido de Gran Bretaña e Irlanda del Norte",
        "pt": "Reino Unido"
      },
      "parent": "154",
      "parents": {
        "continente": "150",
        "regiao": "151",
        "subregiao": "154"
      },
      "ddi": "44"
    },
    {
      "tipo": "pais",
      "slug": "ucrania",
      "codigo": "804",
      "sigla": "UA",
      "sigla3": "UKR",
      "nome": {
        "en": "Ukraine",
        "es": "Ucrania",
        "pt": "Ucrânia"
      },
      "parent": "151",
      "parents": {
        "continente": "",
        "regiao": "150",
        "subregiao": "151"
      },
      "ddi": "380"
    },
    {
      "tipo": "pais",
      "slug": "estados-unidos",
      "codigo": "840",
      "sigla": "US",
      "sigla3": "USA",
      "nome": {
        "en": "United States of America",
        "es": "Estados Unidos de América",
        "pt": "Estados Unidos"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1"
    },
    {
      "tipo": "pais",
      "slug": "burkina-faso",
      "codigo": "854",
      "sigla": "BF",
      "sigla3": "BFA",
      "nome": {
        "en": "Burkina Faso",
        "es": "Burkina Faso",
        "pt": "Burkina Faso"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "226"
    },
    {
      "tipo": "pais",
      "slug": "uruguai",
      "codigo": "858",
      "sigla": "UY",
      "sigla3": "URY",
      "nome": {
        "en": "Uruguay",
        "es": "Uruguay",
        "pt": "Uruguai"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "598"
    },
    {
      "tipo": "pais",
      "slug": "uzbequistao",
      "codigo": "860",
      "sigla": "UZ",
      "sigla3": "UZB",
      "nome": {
        "en": "Uzbekistan",
        "es": "Uzbekistán",
        "pt": "Uzbequistão"
      },
      "parent": "143",
      "parents": {
        "continente": "",
        "regiao": "142",
        "subregiao": "143"
      },
      "ddi": "998"
    },
    {
      "tipo": "pais",
      "slug": "sao-vicente-e-granadinas",
      "codigo": "670",
      "sigla": "VC",
      "sigla3": "VCT",
      "nome": {
        "en": "Saint Vincent and the Grenadines",
        "es": "San Vicente y las Granadinas",
        "pt": "São Vicente e Granadinas"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "1-784"
    },
    {
      "tipo": "pais",
      "slug": "venezuela",
      "codigo": "862",
      "sigla": "VE",
      "sigla3": "VEN",
      "nome": {
        "en": "Venezuela (Bolivarian Republic of)",
        "es": "Venezuela (República Bolivariana de)",
        "pt": "Venezuela"
      },
      "parent": "029",
      "parents": {
        "continente": "019",
        "regiao": "419",
        "subregiao": "029"
      },
      "ddi": "58"
    },
    {
      "tipo": "pais",
      "slug": "vietna",
      "codigo": "704",
      "sigla": "VN",
      "sigla3": "VNM",
      "nome": {
        "en": "Viet Nam",
        "es": "Viet Nam",
        "pt": "Vietnã"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "84"
    },
    {
      "tipo": "pais",
      "slug": "namibia",
      "codigo": "516",
      "sigla": "NA",
      "sigla3": "NAM",
      "nome": {
        "en": "Namibia",
        "es": "Namibia",
        "pt": "Namíbia"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "264"
    },
    {
      "tipo": "pais",
      "slug": "samoa",
      "codigo": "882",
      "sigla": "WS",
      "sigla3": "WSM",
      "nome": {
        "en": "Samoa",
        "es": "Samoa",
        "pt": "Samoa"
      },
      "parent": "054",
      "parents": {
        "continente": "009",
        "regiao": "053",
        "subregiao": "054"
      },
      "ddi": "685"
    },
    {
      "tipo": "pais",
      "slug": "suazilandia",
      "codigo": "748",
      "sigla": "SZ",
      "sigla3": "SWZ",
      "nome": {
        "en": "Swaziland",
        "es": "Swazilandia",
        "pt": "Suazilândia"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "268"
    },
    {
      "tipo": "pais",
      "slug": "iemen",
      "codigo": "887",
      "sigla": "YE",
      "sigla3": "YEM",
      "nome": {
        "en": "Yemen",
        "es": "Yemen",
        "pt": "Iemen"
      },
      "parent": "030",
      "parents": {
        "continente": "142",
        "regiao": "143",
        "subregiao": "030"
      },
      "ddi": "967"
    },
    {
      "tipo": "pais",
      "slug": "zambia",
      "codigo": "894",
      "sigla": "ZM",
      "sigla3": "ZMB",
      "nome": {
        "en": "Zambia",
        "es": "Zambia",
        "pt": "Zâmbia"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "260"
    },
    {
      "tipo": "pais",
      "slug": "zimbabue",
      "codigo": "716",
      "sigla": "ZW",
      "sigla3": "ZWE",
      "nome": {
        "en": "Zimbabwe",
        "es": "Zimbabwe",
        "pt": "Zimbábue"
      },
      "parent": "202",
      "parents": {
        "continente": "002",
        "regiao": "015",
        "subregiao": "202"
      },
      "ddi": "263"
    }
  ]
};
