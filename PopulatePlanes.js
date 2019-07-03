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
 
function loadEastAeroJSON(){
  fetch('./json/East Aero Club.json')
  .then(function(response){
      return response.json();

  })
  .then(function(data){
      outputData = data
      data.forEach(element => {
          TextInput(element["ICAO24"], element["Tail Number"]);
      });
      console.log(data);

})

}