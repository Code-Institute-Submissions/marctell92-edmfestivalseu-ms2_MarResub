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
        { lat: 50.93116248896194, lng: 4.501878597680985 },
        { lat: 43.74640737373694, lng: 16.330730337367232 },
        { lat: 44.54130035252538, lng: 14.913352382051565 },
        { lat: 45.42865016720085, lng: 13.521971733632395 },
        { lat: 45.11672171490229, lng: 6.068744641804303 },
        { lat: 49.439351173543386, lng: 2.795722633835086 },
        { lat: 50.289039386376146, lng: 2.759965110665095 },
        { lat: 52.314554927020794, lng: 4.9419533689088 },
        { lat: 51.56881829276658, lng: 5.175245486062378 },
        { lat: 52.39470200646921, lng: 4.746484540077261 },
        { lat: 41.422161080852945, lng: 2.2337185403456115 },
        { lat: 41.523806631359086, lng: 0.12426678192717103 },
        { lat: 39.15422415182588, lng: -0.24342285864721622 }

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

