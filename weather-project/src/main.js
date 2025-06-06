const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const dateTime = document.getElementById('date-time');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const submitBtn = document.querySelector('button');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');
const forecastCards = document.getElementById('forecast-cards');
const errorMessage = document.getElementById('error-message');
const weatherIcon = document.getElementById('weather-icon');
const searchForm = document.getElementById('search-form');



/**
 * Fetches current weather data for the city specified in the `cityInput` element,
 * updates the UI with weather information, and handles errors.
 *
 * Makes an asynchronous request to the OpenWeatherMap API using the city name,
 * then updates DOM elements such as weather icon, city name, temperature,
 * weather description, humidity, and wind speed. Displays error messages if the
 * fetch fails or the response is not OK.
 *
 * @async
 * @function fetchData
 * @returns {Promise<void>} Resolves when the weather data has been fetched and the UI updated.
 */
async function fetchData() {

  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value.trim()}&appid=e49ffddf9caaf69a774e2305822f703e&units=metric&lang=fr
`);
        if (!response.ok) {
          errorMessage.classList.remove('hidden');
          currentWeather.classList.add('hidden');
        }
        const data = await response.json();
        weatherIcon.src = "images/weather.jpg"
        weatherIcon.classList.add('object-cover')
        cityName.textContent = `Ville : ${data.name}`
        dateTime.textContent = `Timezone : ${data.timezone}`;
        temperature.textContent = `${Math.floor(data.main.temp)}  ° C`;
        description.textContent = `Description météo : ${data.weather[0].description}`;
        humidity.textContent = `💧 Humidité : ${data.main.humidity}  %`;
        wind.textContent  = `💨 Vent : ${data.wind.speed}  km/h`;
        currentWeather.append(cityName, dateTime, temperature, description, humidity, wind);
        currentWeather.classList.remove('hidden');
        errorMessage.classList.add('hidden');

  } catch (error) {
    console.error("Erreur" + error)
  }
 
}


submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  fetchData().then(msg => console.log(msg)).catch(err => console.error(err));
  cityInput.value = ""
});




