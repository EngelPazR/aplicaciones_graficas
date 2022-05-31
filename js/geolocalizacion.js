function geolocalizacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geo_success,error);
    } else {
        alert("Geolocalización no soportada en su navegador");
    }
}

function geo_success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var accuracy = position.coords.accuracy;

    var mymap = document.getElementById("map");
    mymap.style.height = "30rem";
    mapa(lon, lat, accuracy);
}

function error(){
    alert("No se pudo obtener la ubicación");
}

function mapa(longitude, latitude, accuracy) {

    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a>contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

}
