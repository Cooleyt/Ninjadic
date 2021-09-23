console.log('hey its me')

async function fetchWeather(){
    var response = await fetch("https://www.metaweather.com/api/location/search/?query=london");
    var data = await response .json();
    console.log(data);
}