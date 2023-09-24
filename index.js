// Get api
const apiKey = "7b9fb568b544b12a9af05076ca1f83f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
            
// Button & search box
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icons");

// Function 
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "icons/clouds.png";
        } 
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "icons/clear.png";
        } 
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "icons/rain.png";
        } 
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "icons/drizzle.png";
        } 
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "icons/mist.png";
        } 
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "icons/snow.png";
        } 
        console.log(data)
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
            