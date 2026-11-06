/*Leaflet is a JavaScript library for interactive maps on our website */

//Step 1: Creating the map and setting its initial coordinates and zoom level
var map = L.map('map').setView([-26.2041, 28.0473], 16); // Johannesburg coordinates for Next Level Gaming & Esports Arena

//Step 2: Adding the OpenStreetMap tile layer background to the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap Contributors',
}).addTo(map);

//Step 3: Add location marker for the area
var marker = L.marker([-26.2041, 28.0473]).addTo(map);

//Step 4: Add a popup message and open it automatically when the marker is clicked
marker.bindPopup("<b>Next Level Gaming &amp; Esports Arena</b><br>" +
    "Johannesburg, South Africa<br>" +
    "Established 2023").openPopup();