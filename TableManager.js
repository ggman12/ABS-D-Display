var table = document.getElementById("tbodyMain");
var tableRow = document.getElementById("planeRow");

clearList();
populateTable();



    function trashClick(button){
        var deletedTr = button.parentNode.parentNode;
        console.log(deletedTr);
        removePlane(deletedTr.cells[0].innerHTML);
        deletedTr.remove();
    }
    function CreateRow(hexcode, name){
        var clone = tableRow.cloneNode(true);
        table.appendChild(clone);  
        clone.cells[0].innerHTML = hexcode;
        clone.cells[1].innerHTML = name;

 
     

    }


    function deleteFromTable(){

    }

    function clearList(clearStorage){
         while(table.rows.length>0){
            
            table.deleteRow(0);
            
         }
        if(clearStorage == true){
        Planes.length = 0;
        localStorage.removeItem("planes");
        }
    }

   
