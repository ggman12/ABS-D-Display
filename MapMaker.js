


CurrentLocation();
L.mapbox.accessToken = 'pk.eyJ1IjoiZ29vZGVqb25haGdtYWlsY29tIiwiYSI6ImNqd3pkejdzaTFmOW80OW50eGJ0Y2x2cHYifQ.57F313PTCf3RtS3ZfzwEsg'
var map = L.mapbox.map('map')
   .setView([42.3601, -71.0589], 8)
   .addLayer(L.mapbox.styleLayer('mapbox://styles/goodejonahgmailcom/cjx0oogokixj41cpburxs21kx'))

var turbopropIcon = L.icon({
    iconUrl: 'turboprop.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 16],
  
});


function CurrentLocation() {
   if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(CreateMarker)
   }
}
function CreateMarker(position){
   var home = L.marker([position.coords.latitude, position.coords.longitude], {title: 'Current Location'}).addTo(map);
   home.bindPopup("Current Location").openPopup();
}
