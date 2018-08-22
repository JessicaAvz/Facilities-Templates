function initMap() {
    // The location of Andares
    var andares = {lat: 20.7102782, lng: -103.4143375};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: andares});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: andares, map: map});
}