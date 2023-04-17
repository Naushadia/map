var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Shadab Hassan'
}).addTo(map);

var marker = L.marker([28.6357600, 77.2244500]).addTo(map);

var circle = L.circle([31.1471305, 75.34121789999995], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [30.68, 76.7221],
    [30.74, 76.79],
    [30.695202, 76.854172]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a india.").openPopup();
circle.bindPopup("I am a punjab.");
polygon.bindPopup("I am a tricity.");

var popup = L.popup()
    .setLatLng([31.1471305, 75.34121789999995])
    .setContent("I am a standalone popup.")
    .openOn(map);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    
    map.on('click', onMapClick);

    map.locate({setView: true, maxZoom: 16});

    function onLocationFound(e) {
        var radius = e.accuracy;
    
        L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();
    
        L.circle(e.latlng, radius).addTo(map);
    }
    
    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
        alert(e.message);
    }
    
    map.on('locationerror', onLocationError);

