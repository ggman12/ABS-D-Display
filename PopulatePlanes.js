var outputData;

    
  

  function loadJSON(){
    fetch('./json/wvfc-aircraft.json')
    .then(function(response){
        return response.json();

    })
    .then(function(data){
        outputData = data
        data.forEach(element => {
            TextInput(element["Hex Code Mode S"], element["Tail Number"]);
        });
        console.log(data);

  })

}
