let mymap = L.map('mapid').setView([34.0522, -118.2437], 4);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});
// Add our graymap tile layer
streets.addTo(mymap);

// Get data from cities.js
let cityData = cities; 

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    .bindPopup("<b>" + city.city + ", " + city.state + "</b><br><b>Population " + city.population.toLocaleString() + "</b>")
    .addTo(mymap).openPopup();
});