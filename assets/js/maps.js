// BELGIUM MAP
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 49.23247309150677,
            lng: 13.28765404513377, 
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.09009918647197, lng: 4.382447618627929 },
        { lat: 50.40098687106428, lng: 3.7701500181234677 },
        { lat: 50.93116248896194, lng: 4.501878597680985 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

