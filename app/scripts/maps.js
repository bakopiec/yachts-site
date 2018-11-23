function initMap() {
    var uluru = {lat: 49.940444, lng: 21.916389};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}