function getPopupContentString(name, address) {
    return `Faculdade UniAmérica Descomplica<br/><br/>${name}<br/>${address}`
}

async function getLocations(callback) {
    fetch("./assets/locations.json")
        .then((response) => response.json())
        .then((data) => {
            callback(
                data.filter((item) => item.latitude != "" && item.longitude != "")
                    .map((item) => {
                        return {
                            "type": "Feature",
                            "properties": {
                                "name": item.name,
                                "popupContent": getPopupContentString(item.name, item.address)
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [item.longitude, item.latitude]
                            }
                        }
                    })
            )
        });
}
