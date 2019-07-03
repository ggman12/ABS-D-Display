addMarkerToPlanes();
const proxyurl = "https://cors-anywhere.herokuapp.com/";

setInterval(setupPromises, 3000);
  function setupPromises(){
  for (var i = 0; i < Planes.length; i++) {
    let myPlane = Planes[i];
    if(myPlane.status == true){

    var url = "https://@opensky-network.org/api/states/all?icao24="+myPlane.id;
    getPlanePos(url).then(
      results => {
        console.log("sucess "+myPlane.id);
        updateMarker(myPlane.marker, results.latitude, results.longitude, results.angle)
        
      }).catch(function(e) {
         if(myPlane.status!= false){
           myPlane.status = false; 
         }
        //setInterval(updateStatus, 100000, myPlane)
        console.log("here error" + myPlane.id);
        console.log(e);
        //console.log(e); // "oh, no!"
      })

  }
  updateCount();

}
}

// async function getPlanePos(){ 
    
  
//     var url = "https://@opensky-network.org/api/states/all?icao24="+i.id;
    
//   const response = await fetch(
//       url,{
//         mode: 'no-cors'
//       }
//   );
//   data = await response.json();
  
//   if(data.states == null){
//   console.log("API Problem diden't get data response")
//   i.status = false;

// }
// else{
  
//   i.status = true;

//   states = data.states[0];
//   latitude = states[6];
//   longitude = states[5];
//   var angle = states[10];
  
  
//   i.marker.setLatLng([latitude,longitude]);
//   }
// }

async function getPlanePos(url){
  let response = await fetch(url);
  let data = await response.json();
  if(data.states[0] != null || data.states[0] != undefined){
  let states = data.states[0];
  return{
    latitude: states[6],
    longitude: states[5],
    angle: states[10]
  };
}else{
  console.log("no states " + url)
  return;
}
}

function updateMarker(Plane, latitude, longitude,angle){
  Plane.setLatLng([latitude,longitude]);
  Plane.setRotationAngle(angle);
  console.log("marker");
}


function updateStatus(Plane){
  if(Plane.status!= true){
  console.log("ran Update Status");
  Plane.status = true;
  updateCount();

}
}
