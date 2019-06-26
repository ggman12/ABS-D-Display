var table = document.getElementById("tbodyMain");
var tableRow = document.getElementById("planeRow");

clearList();
populateTable();

$(window).load(function(){
    
    $(function () {
        $("table#bootstrap_git_demo").on("click", ".remove", function () {
            var deletedTr = $(this).closest('tr')
            removePlane(deletedTr[0].cells[0].innerHTML);
            deletedTr.remove();

        });
    });
    $(function () {
        $(".show_tip").tooltip({
            container: 'body'
        });
    });
    $(document).click(function () {
        $('.tooltip').remove();
        $('[title]').tooltip();
    });
    });

    function CreateRow(hexcode, name){
        var clone = tableRow.cloneNode(true);
        table.appendChild(clone);  
        clone.cells[0].innerHTML = hexcode;
        clone.cells[1].innerHTML = name;

 
        //clone.rows[0] = hexcode;

    }
// 

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

   
