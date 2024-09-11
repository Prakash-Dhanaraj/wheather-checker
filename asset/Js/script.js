const apiKey = "d8ce6731b791f1919706c05737e765b7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);  
   
    const data = await response.json();
if(response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
} else {
    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "asset/images/clouds.png"; 
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "asset/images/clear.png";
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "asset/images/rain.png"; 
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "asset/images/drizzle.png"; 
    } else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "asset/images/mist.png"; 
    } document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

    console.log(data);
     // Details of DOM with weather data
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    // Update the icon based on the weather condition
if (data.weather[0].main == 'Clouds') {
    weatherIcon.src = "asset/images/clouds.png"; // Ensure this path is correct relative to your HTML file
} else if (data.weather[0].main == 'Clear') {
    weatherIcon.src = "asset/images/clear.png";
} else if (data.weather[0].main == 'Rain') {
    weatherIcon.src = "asset/images/rain.png"; 
} else if (data.weather[0].main == 'Drizzle') {
    weatherIcon.src = "asset/images/drizzle.png"; 
} else if (data.weather[0].main == 'Mist') {
    weatherIcon.src = "asset/images/mist.png"; 
} document.querySelector(".weather").style.display = "block";
    }
  searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();  
    // get the city name from the input field
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a valid city name");
    }
});