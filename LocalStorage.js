var planeIDs;
var markers = {}; 
var list = document.getElementById("PlaneUL");

if(localStorage.getItem('planes') != null){
    planeIDs = JSON.parse(localStorage.getItem('planes'));
    //PlaneListStartup(planeIDs);
    addPlane();
}

function TextInput() {
    var hexcode = document.getElementById("hexcode");
    if (planeIDs == null) {
     planeIDs = [{id: hexcode.value}];   
     
     localStorage.setItem('planes', JSON.stringify(planeIDs));
     
    }else{
        planeIDs.push({id: hexcode.value});
        localStorage.setItem('planes', JSON.stringify(planeIDs));
        
    } 
    
    

  addPlane();

}
function addPlane(){
 for (var i = 0; i < planeIDs.length; i++) {
     var plane = planeIDs[i];
    
 
     
     if(markers[plane.id] == null){
     markers[plane.id] = L.marker([0,0], {icon:turbopropIcon}).addTo(map);
     console.log(markers);
     
 }
 
}
}
function removePlane(){

}
function PlaneListStartup(planes){
    console.log(planes);
    for(var i =0; i<planes.length; i++){
        var newLI = document.createElement("li");
        list.appendChild(newLI);
        newLI.value = planes[0];
    }
}
