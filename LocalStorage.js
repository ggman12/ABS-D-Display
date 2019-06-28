var planeIDs;
function Plane(id, marker, name, tailNumber) {
    this.id = id;
    this.marker = marker;
    this.name = name;
    this.tailNumber = tailNumber; 
  }
var Planes = [];




if(localStorage.getItem('planes') != null){
    Planes = JSON.parse(localStorage.getItem('planes'));
    //CreateRow();
    //PlaneListStartup(planeIDs);
}

function TextInput() {
    var hexcode = document.getElementById("hexcode").value;
    var name = document.getElementById("name").value;
    var myPlane = new Plane(hexcode, null, name);
    Planes.push(myPlane);
    CreateRow(hexcode, name);
    UpdateLocalPlane()
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




