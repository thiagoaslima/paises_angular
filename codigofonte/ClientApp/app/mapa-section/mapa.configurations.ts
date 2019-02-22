export const MAP_STYLES = {
    options: {
        zoom: 3,
        maxZoom: 5,
        minZoom: 3,
    },

    background: '#4F4F4F',

    polygons: {
        default: {
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1,
        },

        hover: {
            fillColor: '#a9a9a9',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1,
        },

        selected: {
            fillColor: '#A9A9A9',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1,
        },

        uninteractive: {
            fillColor: '#505050',
            weight: 0,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1,
            className: 'no-interaction',
        },
    },
};
