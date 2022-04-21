var map = L.map('map').setView([-11.52, -51.94], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

(async function launchMap() {
    await getLocations((locations) => {
        var geojsonFeature = {
            "type": "FeatureCollection",
            "features": locations
        }

        L.geoJSON(geojsonFeature, {
            onEachFeature: onEachFeature
        }).addTo(map);
    });
})();
