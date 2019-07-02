var planeIDs;
function Plane(id,tailNumber,name, marker, status, promise) {
    this.id = id;
    this.tailNumber = tailNumber; 
    this.name = name;
    this.marker = marker;
    this.status = status;
  }
var Planes = [];
// loadJSON();



if(localStorage.getItem('planes') != null){
    Planes = JSON.parse(localStorage.getItem('planes'));
    if(document.getElementById("bootstrap_git_demo")!= null){
    populateTable();
    }
    //CreateRow();
    //PlaneListStartup(planeIDs);
}  else{
    // loadJSON();
   populateTable();
}

function TextInput(hexcode, tailNumber) {
    let spaceRemovedHexcode = hexcode.replace(/\s/g, '');
    var myPlane = new Plane(spaceRemovedHexcode, tailNumber);
    myPlane.status = true;
    Planes.push(myPlane);
    
    UpdateLocalPlane()

    if(document.getElementById("bootstrap_git_demo")!= null){
    CreateRow(spaceRemovedHexcode, tailNumber);
    }
}

function removePlane(id){
    if(Planes != undefined && Planes.length>0){
        for (var i = 0; i < Planes.length; i++) {
          if(Planes[i].id == id){
              Planes.splice(i,1);
              UpdateLocalPlane();
              return;
          }
            
        }
}
}

function UpdateLocalPlane(){
    var stringPlanes = JSON.stringify(Planes);
    localStorage.setItem('planes', stringPlanes);
}


 function populateTable(){
    if(Planes != undefined && Planes.length>0){
        for (var i = 0; i < Planes.length; i++) {
          CreateRow(Planes[i].id, Planes[i].name);
            
        }
}
}

function addMarkerToPlanes(){
  for (var i = 0; i < Planes.length; i++) {
    if(Planes[i].marker == null){
      Planes[i].marker = L.marker([0,0], {icon: turbopropIcon}).addTo(map);
      
    }
    
  }

}


