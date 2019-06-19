var planeIDs = [{id :"a07721"}];

var markers = {}; 
addPlane();
setInterval(getPlanePos, 3000);


document.addEventListener('keydown', onKeyDown)
var hexcode = document.getElementById("hexcode");
function onKeyDown(e){
    if(e.keyCode == 72 && !hexcode.hidden){
        hexcode.hidden = true;
        document.getElementById("button").hidden = true;
        document.getElementsByTagName("h3")[0].hidden = true;
        hexcode.value = "";
        document.getElementById("map").style.position = "unset";
        
    }else if(e.keyCode == 72 && hexcode.hidden){
      document.getElementById("map").style.position = "absolute";
        hexcode.hidden = false;
        document.getElementById("button").hidden = false;
        document.getElementsByTagName("h3")[0].hidden = false;
    }
}

function TextInput() {
    planeIDs.push({id: hexcode.value});
    addPlane();

}
function addPlane(){
for (var i = 0; i < planeIDs.length; i++) {
    var plane = planeIDs[i];
   

    
    if(markers[plane.id] == null){
    markers[plane.id] = L.marker([0,0], {icon:turbopropIcon}).addTo(map);
}
}
  
  console.log(markers);
}
async function getPlanePos(){ 

for (var i = 0; i < planeIDs.length; i++) {
    var url = "https://opensky-network.org/api/states/all?icao24="+planeIDs[i].id;
    
  const response = await fetch(
      url
  );
  data = await response.json();
  
  if(data.states == null){
  console.log("API Problem diden't get data response")
  // console.log(url);
  // document.getElementById("feedback").textContent = "OpenSky diden't find plane";

}else{
  
    console.log("here")
  // document.getElementById("feedback").textContent = "OpenSky found plane";
  
  states = data.states[0];
  latitude = states[6];
  longitude = states[5];
  var angle = states[10];
  // console.log(states);
  // console.log(url);
  
  markers[planeIDs[i].id].setLatLng([latitude,longitude]);
  markers[planeIDs[i].id].setRotationAngle(angle);
  
}
}


}
