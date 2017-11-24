const fs = require('fs');
const path = require('path');
const topojson = require('topojson-server');
const polylabel = require('polylabel');

const orig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'metadados', 'topologies', 'mundo.topojson'), 'utf8'));
const PAISES = require('../metadados/paises.json');
const labelPosition = require('./labelPosition.json');

const DICT = PAISES.reduce((agg, pais) => Object.assign(agg, {[pais.sigla3]: pais}), Object.create(null));

const topo = {
    type: orig.type,
    arcs: orig.arcs,
    bbox: orig.bbox,
    objects: {
        countries: {
            type: orig.objects.countries.type,
            geometries: []
        }
    }
}

topo.objects.countries.geometries = orig.objects.countries.geometries.map(topo => {
    let sigla = topo.properties['ADM0_A3']
    let obj = {
        type: topo.type,
        arcs: topo.arcs
    }

    if (DICT[sigla]) {
        obj.properties = DICT[sigla];
        obj.properties.mostrar = true
        obj.properties.labelPosition = labelPosition[sigla].labelPosition
    } else {
        obj.properties = { mostrar: false }
    }

    return obj;
});

fs.writeFileSync(path.resolve(__dirname, '..', 'metadados', 'topologies', 'paises.topojson'), JSON.stringify(topo, null, '\t'), {encoding: 'utf8'});
