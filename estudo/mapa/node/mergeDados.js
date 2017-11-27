const fs = require('fs');
const path = require('path');
const topojson = require('topojson-server');
const polylabel = require('polylabel');

const orig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'metadados', 'topologies', 'countries.json'), 'utf8'));
const PAISES = require('../metadados/paises.json');
const labelPosition = require('./labelPosition.json');

const DICT = PAISES.reduce((agg, pais) => Object.assign(agg, {[pais.sigla3]: pais}), Object.create(null));
const prop = 'ne_110m_admin_0_countries';


const topo = {
    type: orig.type,
    bbox: [].concat(orig.bbox),
    arcs: orig.arcs,
    objects: {
        countries: {
            type: orig.objects[prop]['type'],
            geometries: []
        }
    },
    transform: Object.assign({}, orig.transform)
}

topo.objects.countries.geometries = orig.objects[prop].geometries.map(geometry => {

    let sigla = geometry.properties['ADM0_A3']
    let obj = {
        type: geometry.type,
        arcs: [].concat(geometry.arcs)
    }

    if (DICT[sigla]) {
        obj.properties = DICT[sigla];
        obj.properties.labelPosition = [].concat(labelPosition[sigla].labelPosition.precision0001)
        obj.properties.mostrar = true
    } else {
        obj.properties = { mostrar: false }
    }

    return obj;
});

fs.writeFileSync(path.resolve(__dirname, '..', 'metadados', 'topologies', 'paises.topojson'), JSON.stringify(topo), {encoding: 'utf8'});
