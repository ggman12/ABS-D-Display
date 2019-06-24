var planeIDs;
function Plane(id, marker) {
    this.id = id;
    this.marker = marker;
  }
var Planes = [];
var list = document.getElementById("PlaneUL");
if(localStorage.getItem('planes') != null){
    Planes = JSON.parse(localStorage.getItem('planes'));
    ListChange();
    //PlaneListStartup(planeIDs);
}

function TextInput() {
    var hexcode = document.getElementById("hexcode").value;
    
    var myPlane = new Plane(hexcode, null);
    Planes.push(myPlane);
    ListChange();
    UpdateLocalPlane()
}

function removePlane(){

}

function UpdateLocalPlane(){
    var stringPlanes = JSON.stringify(Planes);
    localStorage.setItem('planes', stringPlanes);
}
function ListChange(){
    clearList(false);
    
    
    
    for(var i = 0; i < Planes.length; i++){
            
        var newli = document.createElement("li");
        //newLI.setAttribute("id", Planes[i].id);

            newli.appendChild(document.createTextNode(Planes[i].id));
            list.appendChild(newli);
        }
}
function clearList(clearStorage){
    while(list.firstChild){
        
        list.removeChild(list.firstChild);
        
    }
    if(clearStorage == true){
    Planes.length = 0;
    localStorage.removeItem("planes");
    }
}