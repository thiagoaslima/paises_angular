const fs = require('fs');
const path = require('path');
const polylabel = require('polylabel');
const area = require('@mapbox/geojson-area');
const topojson = require('topojson');
const topojsonC = require('topojson-client');
const orig = require('./paises2.topojson.ts');

const geojson = topojsonC.feature(orig, orig.objects.countries);

const topo = {
    type: orig.type,
    bbox: [].concat(orig.bbox),
    arcs: orig.arcs,
    objects: {
        countries: {
            type: orig.objects.countries['type'],
            geometries: []
        }
    },
    transform: Object.assign({}, orig.transform)
}

topo.objects.countries.geometries = orig.objects.countries.geometries.map((geometry, idx) => {

    let obj = {
        type: geometry.type,
        arcs: [].concat(geometry.arcs),
        properties: { 
            sigla: geometry.properties['ISO_A3'],
            // labelPosition: calculateLabelPosition(geojson.features[idx])
        }
    }

    console.log(obj);

    return obj;
}).filter(Boolean);
fs.writeFileSync(path.resolve(__dirname, 'paises3.topojson'), JSON.stringify(topo), {encoding: 'utf8'});

function calculateLabelPosition(geo) {

    const areas = geo.geometry.coordinates.map(obj => ({
        polygon: obj,
        area: area.geometry({type: 'Polygon', coordinates: obj})
    }));

    const maxPolygon = areas.reduce((agg, obj) => obj.area > agg.area ? obj : agg).polygon;

    return {
        position1: polylabel(maxPolygon, 1.0),
        position01: polylabel(maxPolygon, 0.1),
        position001: polylabel(maxPolygon, 0.01),
        position0001: polylabel(maxPolygon, 0.001),
    };
    
}