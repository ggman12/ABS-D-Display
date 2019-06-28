var planeIDs;
function Plane(id,tailNumber,name, marker) {
    this.id = id;
    this.tailNumber = tailNumber; 
    this.name = name;
    this.marker = marker;
  }
var Planes = [];




if(localStorage.getItem('planes') != null){
    Planes = JSON.parse(localStorage.getItem('planes'));
    if(document.getElementById("bootstrap_git_demo")!= null){
    populateTable();
    }
    //CreateRow();
    //PlaneListStartup(planeIDs);
}  else{
  loadJSON();
  populateTable();
}

function TextInput(hexcode, tailNumber) {
    
    var myPlane = new Plane(hexcode, tailNumber);
    
    Planes.push(myPlane);
    
    UpdateLocalPlane()

    if(document.getElementById("bootstrap_git_demo")!= null){
    CreateRow(hexcode, tailNumber);
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




