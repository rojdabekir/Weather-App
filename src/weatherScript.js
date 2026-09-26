const apiKey = import.meta.env.VITE_API_KEY;

const weatherApp = document.querySelector(".weather-app");
const mainBox = document.querySelector(".main-box");
const additionalInfoBox = document.querySelector(".additional-info");

const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const errorMessage = document.getElementById("error-message");

const iconImg = document.createElement("img");
const degree = document.createElement("h1");
const cityCountry = document.createElement("h4");
const earthImg = document.createElement("img");

earthImg.src = `${import.meta.env.BASE_URL}images/planet-earth.png`;
earthImg.classList.add("earth");

additionalInfoBox.classList.add("hidden");
mainBox.appendChild(earthImg);

function searchWeather(){

    iconImg.classList.remove("hidden");
    iconImg.classList.add("icon");

    const cityName = searchBox.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("City not found");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        errorMessage.textContent = "";

        if (earthImg.parentElement) {
            mainBox.removeChild(earthImg);
        }

        if (!iconImg.parentElement) {
            mainBox.appendChild(iconImg);
            mainBox.appendChild(degree);
            mainBox.appendChild(cityCountry);
        }

        iconImg.classList.remove("hidden");
        cityCountry.classList.remove("hidden");
        degree.classList.remove("hidden");

        degree.textContent = `${Math.round(data.main.temp)}°C`;
        cityCountry.textContent =  `${data.name}, ${data.sys.country}`;
        feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind: ${data.wind.speed} km/h`;

        changeBackground(data.weather[0].main);
    })
    .catch(error => {
        errorMessage.textContent = "City not found";
        if (!earthImg.parentElement) {
            mainBox.appendChild(earthImg);
        }

        additionalInfoBox.classList.add("hidden");

        iconImg.classList.add("hidden");
        cityCountry.classList.add("hidden");
        degree.classList.add("hidden");
        weatherApp.classList.remove("sunny","cloudy","rainy","snowy");
    });
}

searchBtn.addEventListener("click", searchWeather);

searchBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});

function changeBackground(weather){
    weatherApp.classList.remove("sunny","cloudy","rainy","snowy");
    additionalInfoBox.classList.remove("hidden");
    if(weather==="Clear"){
        weatherApp.classList.add("sunny");
        iconImg.src = `${import.meta.env.BASE_URL}images/sun.png`;
    }
    else if (weather==="Clouds" || weather==="Mist" || weather==="Fog" || weather==="Haze"){
        weatherApp.classList.add("cloudy");
        iconImg.src = `${import.meta.env.BASE_URL}images/cloudy.png`;
    } 
    else if(weather==="Rain" || weather==="Drizzle" || weather==="Thunderstorm"){
        weatherApp.classList.add("rainy");
        iconImg.src = `${import.meta.env.BASE_URL}images/rain-drops.png1`;
    }
    else if(weather==="Snow"){
        weatherApp.classList.add("snowy");
        iconImg.src = `${import.meta.env.BASE_URL}images/snowy.png`;
    }
}