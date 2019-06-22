var planeIDs;
var markers = {}; 
if(localStorage.getItem('planes') != null){
    planeIDs = JSON.parse(localStorage.getItem('planes'));
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
