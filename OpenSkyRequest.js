var Planes = JSON.parse(localStorage.getItem('planes'));
setInterval(getPlanePos, 1000);


async function getPlanePos(){ 
if(Planes != undefined && Planes.length>0){
for (var i = 0; i < Planes.length; i++) {
  
    if(Planes[i].marker == null){
      Planes[i].marker = L.marker([0,0], {icon: turbopropIcon}).addTo(map);
  
    }
  
    var url = "https://opensky-network.org/api/states/all?icao24="+ Planes[i].id;
    
  const response = await fetch(
      url
  );
  data = await response.json();
  
  if(data.states == null){
  console.log("API Problem diden't get data response")
  // console.log(url);
  // document.getElementById("feedback").textContent = "OpenSky diden't find plane";

}
else{
  
  // document.getElementById("feedback").textContent = "OpenSky found plane";
  
  states = data.states[0];
  latitude = states[6];
  longitude = states[5];
  var angle = states[10];
  // console.log(states);
  // console.log(url);
  
  
  Planes[i].marker.setLatLng([latitude,longitude]);
  Planes[i].marker.setRotationAngle(angle);
  //Planes[i].marker.addTo(map);
  }
}
}
}



