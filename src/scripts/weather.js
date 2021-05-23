function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

function weather() {
    //getLocation()

    

    var target = "https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02"
    fetch(target)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        var test = Object.keys(data)
        console.log(test);
    })
}
export { weather }
