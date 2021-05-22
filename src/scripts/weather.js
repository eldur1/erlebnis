function weather() {
    contry_code = google.loader.ClientLocation.address.country_code
    city = google.loader.ClientLocation.address.city
    region = google.loader.ClientLocation.address.region
    
    console.log(city);
}
export { weather }
