var map;

function initMap() {
    var home = { lat: 42.888913, lng: 74.636338 };
    var center = { lat: 42.889276, lng: 74.609573 };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 14,
            center: center,
            disableDefaultUI: true,
            gestureHandling: 'cooperative',
            zoomControl: false,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#f2f2f2' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#f2f2f2' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#545454' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#80a971' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#6b9a76' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#ededed' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#ededed' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9ca5b3' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#ffffff' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#ffffff' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#b7b7b7' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#d6d6d6i' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#b8b8b8' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#86a77a' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#86a77a' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#ffffff' }]
                }
            ]
        });
    var image = '../img/icons/point.svg'
    var marker = new google.maps.Marker({
        position: home,
        map: map,
        icon: image
    });
}