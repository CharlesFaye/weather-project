# 🌦️ Weather App with OpenWeatherMap API

This is a simple and responsive weather application built with HTML, TailwindCSS, and JavaScript. It fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api) based on the city name entered by the user.

## Features

- Search weather by city name
- Real-time weather data using OpenWeatherMap API
- Displays:
  - City 
  - Temperature
  - Weather description
  - Humidity
  - Wind speed
  - Weather icon
- Responsive UI with TailwindCSS
- Error handling for invalid city names or network issues

## Demo

👉 [Live Demo](https://weather-project-self-beta.vercel.app/)  


## Installation

1. Clone the repository:

```bash
git clone https://github.com/CharlesFaye/weather-project.git


2. Navigate into the project folder:
cd weather-project

Technologies Used
. HTML5
. TailwindCSS
. JavaScript (Fetch API)
. OpenWeatherMap API

Project Structure
weather-app/
├── index.html         # App structure
├── main.js          # Fetching and displaying weather data
└── style.css          # Optional additional styling

How It Works
1. The user enters a city name and submits the form.
2. A request is sent to the OpenWeatherMap API.
3. The response is parsed and displayed:

    . Current temperature (°C or °F)
    . Weather description (e.g., "clear sky")
    . Icon representing the weather
    . Additional data like wind speed and humidity

Optional Improvements

. Add support for geolocation (detect user’s location automatically)
. Allow unit toggling (Celsius ↔ Fahrenheit)
. Show 5-day weather forecast
. Add dark mode or weather-based background changes
. Save recent searches

Author
Created by Charles Faye