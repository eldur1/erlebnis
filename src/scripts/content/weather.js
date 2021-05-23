

function weather() {
  navigator.geolocation.getCurrentPosition(success, error, options);

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;

    var closestPlace = []
    var woeid = []

    let rounded = Math.round(crd.latitude*100000)/100000

    var target = "https://thingproxy.freeboard.io/fetch/https://www.metaweather.com/api/location/search/?lattlong="+ rounded + "," + crd.longitude
    fetch(target)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      var closestPlace = data[0]
      var woeid = data[0].woeid

      var target = "https://thingproxy.freeboard.io/fetch/https://www.metaweather.com/api/location/"+ woeid
      fetch(target)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.consolidated_weather[0]);
        
      })


    })




  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);


}

  




export { weather }
