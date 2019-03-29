var map;

function initMap() {
    var home = { lat: 42.888913, lng: 74.636338 };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 18,
            center: home,
            disableDefaultUI: true
        });
    var image = '../img/icons/map_marker.svg'
    var marker = new google.maps.Marker({
        position: home,
        map: map,
        icon: image
    });
}