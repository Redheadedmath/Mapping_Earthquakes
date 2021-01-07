let mymap = L.map('mapid').setView([34.0522, -118.2437], 14);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});
// Add our graymap tile layer
streets.addTo(mymap);

// Add a marker to set the map for LA, California
// let marker = L.marker([34.0522, -118.2437]).addTo(mymap);
// Changing the syntax to indicate LA with a circle
let circle_marker = L.circle([34.0522, -118.2437], {
    color: 'black',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    radius: 300
}).addTo(mymap);