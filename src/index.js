const mapboxgl = require('mapbox-gl');
const buildMarker = require('buildMarker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWRvbnR3YW50dG8iLCJhIjoiY2prazQyMzZ2NjI3bzNxbWxpMWt4anA1MCJ9.XELVWmy1OWCYj-_RKi9iKA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker("restaurant", [-87.641, 41.895]); // or [-87.6354, 41.8885]
marker.addTo(map);