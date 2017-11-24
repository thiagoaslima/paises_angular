const fs = require('fs');
const path = require('path');
const polylabel = require('polylabel');
const area = require('area-polygon')
const geoJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'metadados', 'topologies', 'ne_10m_admin_0_countries.geojson'), 'utf8'));

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

    let position02 = polylabel(coord, 0.2);
    let position04 = polylabel(coord, 0.4);
    let position06 = polylabel(coord, 0.6);
    let position08 = polylabel(coord, 0.8);
    let position10 = polylabel(coord, 1.0);

    let sigla = f.properties['ADM0_A3']

    return {
        sigla: sigla,
        labelPosition: {
            precision02: position02, 
            precision04: position04, 
            precision06: position06, 
            precision08: position08, 
            precision10: position10
        }
    }
}).reduce((agg, obj) => Object.assign(agg, {[obj.sigla]: obj}), Object.create(null));

fs.writeFileSync(path.resolve(__dirname, 'labelPosition.json'), JSON.stringify(locais, null, '\t'), {encoding: 'utf8'});