
setInterval(getPlanePos, 1000);


async function getPlanePos(){ 
if(planeIDs!= undefined && planeIDs.length){
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


}
