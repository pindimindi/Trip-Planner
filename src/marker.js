const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};


const buildMarker = (type, coords) => {
    if(type === 'hotel') {
        const hotelMarker = document.createElement('div');
        hotelMarker.style.width = '32px';
        hotelMarker.style.height = '39px';
        hotelMarker.style.backgroundImage = "http://i.imgur.com/D9574Cu.png";

        new mapboxgl.Marker(hotelMarker).setLngLat(coords).addTo(map);
    } else if (type === 'restaurant') {
        const restaurantMarker = document.createElement('div');
        restaurantMarker.style.width = '32px';
        restaurantMarker.style.height = '39px';
        restaurantMarker.style.backgroundImage = "http://i.imgur.com/cqR6pUI.png";

        new mapboxgl.Marker(restaurantMarker).setLngLat(coords).addTo(map);

    } else {
        const marker = document.createElement('div');
        marker.style.width = '32px';
        marker.style.height = '39px';
        marker.style.backgroundImage = "http://i.imgur.com/WbMOfMl.png";

        new mapboxgl.Marker(marker).setLngLat(coords).addTo(map);
    }
};

module.exports = buildMarker;