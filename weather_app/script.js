const API_KEY = "f54ab98552596ec4de24ad829410eb8a";

const weatherData = document.getElementById("weather-data");

const cityInput = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInput.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network Response Error");
    }

    const data = await response.json();
    console.log(data);
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    weatherData.querySelector(".icon").innerHTML = `<img
            src="http://openweathermap.org/img/wn/${icon}.png"
            alt="Weather icon"
          />`;

    weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherData.querySelector(".description").textContent = description;

    weatherData.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherData.querySelector(".icon").innerHTML = ""

    weatherData.querySelector(".temperature").textContent = "";
    weatherData.querySelector(".description").textContent = "An error happend, please try again later";

    weatherData.querySelector(".details").innerHTML = ""
  }
}
