import { latLng } from "leaflet";

export const MAP_STYLES = {
    options: {
        zoom: 3,
        maxZoom: 5,
        minZoom: 3,
    },

    background: '#4F4F4F',

    polygons: {
        default: {
            fillColor: '#757575',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
    
        hover: {
            fillColor: '#909090',
            weight: 0,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },

        selected: {
            fillColor: '#DDDDDD',
            weight: 0,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },

        uninteractive: {
            fillColor: '#505050',
            weight: 0,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1,
            className: 'no-interaction'
        }
    }
};
