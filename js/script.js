var map = L.map('map').setView([-11.52, -51.94], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var geojsonFeature = {
    "type": "FeatureCollection",
    "features": [{
            "type": "Feature",
            "properties": {
                "name": "Faculdade UniAmérica Descomplica",
                "popupContent": "Faculdade UniAmérica Descomplica<br><br>Polo Recife, Boa Viagem"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -34.89987909793854,
                    -8.127340405405453
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Faculdade UniAmérica Descomplica",
                "popupContent": "Faculdade UniAmérica Descomplica<br><br>Polo Fortaleza, Aldeota"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -38.492378890514374,
                    -3.7351359207312904
                ]
            }
        }
    ]
}
L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);