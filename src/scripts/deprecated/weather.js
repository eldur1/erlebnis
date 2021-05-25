//import { response } from "express";
import { gradient } from '../style/gradient';
import { paths } from '../content/lang'
var closestPlace = []
function weather_id() {
  navigator.geolocation.getCurrentPosition(success, error, options);

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;

    let rounded = Math.round(crd.latitude*100000)/100000

    var target = "https://thingproxy.freeboard.io/fetch/https://www.metaweather.com/api/location/search/?lattlong="+ rounded + "," + crd.longitude
    fetch(target)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      var closestPlace = data[0]
      var woeid = data[0].woeid
      var target_woeid = "https://thingproxy.freeboard.io/fetch/https://www.metaweather.com/api/location/"+ woeid
      fetch(target_woeid)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        var weatherJSON = data.consolidated_weather[0];
        var wS = weatherJSON.weather_state_abbr
        gradient()
        let i = 0;
        switch(wS) {
          case 'sn' : i = 0; break
          case 'sl' : i = 1; break
          case 'h' : i = 2; break
          case 't' : i = 3; break
          case 'hr' : i = 4; break
          case 'lr' : i = 5; break
          case 's' : i = 6; break
          case 'hc' : i = 7; break
          case 'lc' : i = 8; break
          case 'c' : i = 9; break
        }
        let weather_DOM = document.querySelector('.weather')
        let weather_src = paths[2]
        fetch(weather_src)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let sentence = data.sentences[i]
          weather_DOM.textContent = sentence
        })
      })

    })
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
}




export { weather_id }
