const fs = require('fs');
const path = require('path');
const orig = require('./original/mapshaper/ne_50m_admin_0_map_units.json');

const topo = {
    type: orig.type,
    bbox: [].concat(orig.bbox),
    arcs: orig.arcs,
    objects: {
        countries: {
            type: orig.objects["ne_50m_admin_0_map_units"]['type'],
            geometries: []
        }
    },
    transform: Object.assign({}, orig.transform)
}

const customize = {
    "SDS": {sigla: "SSD"},
    "SRS": {sigla: "SRB"},
    "PRX": {sigla: "PRT"},
    "PNX": {sigla: "PNG"},
    "NSV": {sigla: "SJM"},
    "SAH": {sigla: "ESH"},
    "FXX": {sigla: "FRA"},
    "ALD": {sigla: "ALA"},
    "BIS": {sigla: "SRB"},
    "BHF": {sigla: "BIH"},
    "ACA": {sigla: "ATG"},
    "ACB": {sigla: "ATG"},
    "BWR": {sigla: "BEL"},
    "BFR": {sigla: "BEL"},
    "ENG": {
        sigla: "GBR",
        nota: {
            pt: "Inglaterra"
        }
    },
    "SCT": {
        sigla: "GBR",
        nota: {
            pt: "Escócia"
        }
    },
    "WLS": {
        sigla: "GBR",
        nota: {
            pt: "País de Gales"
        }
    },
    "NIR": {
        sigla: "GBR",
        nota: {
            pt: "Irlanda do Norte"
        }
    },

}

const nullNotes = { en: "", es: "", pt: "" };



topo.objects.countries.geometries = orig.objects["ne_50m_admin_0_map_units"].geometries.map((geometry, idx) => {

      let obj = {
        type: geometry.type,
        arcs: [].concat(geometry.arcs),
        properties: { 
            sovereignt: geometry.properties.SOVEREIGNT,
            sigla_sov: geometry.properties.SOV_A3,
            nome: geometry.properties.NAME_PT,
            sigla: customize[geometry.properties.SU_A3] ? customize[geometry.properties.SU_A3].sigla : geometry.properties.SU_A3,
        }
    }

    if (
        customize[geometry.properties.SU_A3] && 
        customize[geometry.properties.SU_A3].nota
    ) {
        obj.properties.nota = customize[geometry.properties.SU_A3].nota;
    }

    return obj;
}).filter(Boolean);

fs.writeFileSync(path.resolve(__dirname, 'paises3.topojson.ts'), "export const topojson = " + JSON.stringify(topo), {encoding: 'utf8'});

