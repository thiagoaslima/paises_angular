const fs = require('fs');
const path = require('path');
const polylabel = require('polylabel');
const area = require('area-polygon')
const geoJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'metadados', 'topologies', 'ne_110m_admin_0_countries.geojson'), 'utf8'));

const locais = geoJSON.features.map(f => {

    let coord = f.geometry.coordinates;

    if (f.geometry.type === 'MultiPolygon') {
        coord = f.geometry.coordinates.reduce( (agg, polygon) => {
            let _area = area(polygon[0]);
            return _area < agg.a 
                ? agg
                : {p: polygon, a: _area}
        }, {p: null, a: 0})['p'];
    }

    let position1 = polylabel(coord, 1.0);
    let position01 = polylabel(coord, 0.1);
    let position001 = polylabel(coord, 0.01);
    let position0001 = polylabel(coord, 0.001);
    

    let sigla = f.properties['ADM0_A3']

    return {
        sigla: sigla,
        labelPosition: {
            precision1: position1, 
            precision01: position01, 
            precision001: position001, 
            precision0001: position0001 
        }
    }
}).reduce((agg, obj) => Object.assign(agg, {[obj.sigla]: obj}), Object.create(null));

fs.writeFileSync(path.resolve(__dirname, 'labelPosition.json'), JSON.stringify(locais, null, '\t'), {encoding: 'utf8'});