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
                "popupContent": "Faculdade UniAmérica Descomplica<br><br>Polo Boa Viagem, Recife"
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
                "popupContent": "Faculdade UniAmérica Descomplica<br><br>Polo Aldeota, Fortaleza"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -38.492378890514374,
                    -3.7351359207312904
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Faculdade UniAmérica Descomplica",
                "popupContent": "Faculdade UniAmérica Descomplica<br><br>Sede Barra da Tijuca, Rio de Janeiro"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.34820181131363,
                    -23.000873696075292
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Faculdade UniAmérica Descomplica",
                "popupContent": "Faculdade UniAmérica Descomplica<br><br>Polo Centro, Rio de Janeiro"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.17815646529198,
                    -22.90307080079857
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Faculdade UniAmérica Descomplica",
                "popupContent": "Faculdade UniAmérica Descomplica<br><br>Polo Campo Grande, Rio de Janeiro"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.56474459171295,
                    -22.89012959969439
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Faculdade UniAmérica Descomplica",
                "popupContent": "Faculdade UniAmérica Descomplica<br><br>Polo Madureira, Rio de Janeiro"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.33747297525406,
                    -22.87384725976096
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Faculdade UniAmérica Descomplica",
                "popupContent": "Faculdade UniAmérica Descomplica<br><br>Polo São Gonçalo, Rio de Janeiro"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.045770674943924,
                    -22.82380064457385
                ]
            }
        },
    ]
}
L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);