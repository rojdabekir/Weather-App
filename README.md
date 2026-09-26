# 🌤️ Weather App

A simple and interactive weather application built with HTML, CSS, and JavaScript.

The application uses the OpenWeather API to retrieve current weather information for a searched city and dynamically changes the interface based on the current weather conditions.

## 🎮 Live Demo: https://rojdabekir.github.io/Weather-App/

## ✨ Features

* Search for weather by city name
* Display current temperature
* Display "feels like" temperature
* Display humidity
* Display wind speed
* Display country code
* Dynamically change the background based on weather conditions
* Dynamically change the weather icon
* Handle invalid or unknown cities
* Responsive user interface

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript
* Vite
* REST API
* OpenWeather API

## 🌐 API

This project uses the [OpenWeather API](https://openweathermap.org/api) to retrieve current weather information.

The API key is stored in a `.env` file and is not included in the repository.

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_api_key_here
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd WeatherApp
```

### 3. Install dependencies

```bash
npm install
```
### 4. Create the .env file

Create a .env file in the root directory and add your OpenWeather API key:

    VITE_API_KEY=your_api_key_here

### 5. Start the development server

    npm run dev

Then open the local URL provided by Vite in your browser.

## 📁 Project Structure

    WeatherApp/
    ├── images/
    │   ├── cloudy.png
    │   ├── planet-earth.png
    │   ├── rain-drops.png
    │   ├── snowy.png
    │   └── sun.png
    ├── src/
    │   ├── weatherDesign.css
    │   └── weatherScript.js
    ├── .env
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── package-lock.json
    └── README.md

.env is included in the local project structure but is excluded from Git using .gitignore.

## 📌 How It Works
Enter the name of a city in the search field.
Click the search button or press Enter.
The application sends a request to the OpenWeather API.
The received weather data is displayed on the page.
The background and weather icon change according to the current weather condition.
If the city cannot be found, an error message is displayed.

## 🎯 Project Goal

This project was created as a practice project to improve JavaScript fundamentals, API integration, asynchronous programming, DOM manipulation, and working with environment variables using Vite.