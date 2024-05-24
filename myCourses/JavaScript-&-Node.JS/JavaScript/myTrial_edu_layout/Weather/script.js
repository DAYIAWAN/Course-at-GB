import { fetchWeatherData } from './data.js';

document.addEventListener('DOMContentLoaded', async () => {
  const contentDiv = document.getElementById('content');
  const weatherData = await fetchWeatherData();

  if (weatherData) {
    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather');

    const weatherImage = document.createElement('img');
    weatherImage.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    weatherImage.alt = weatherData.weather[0].description;

    const weatherTitle = document.createElement('h2');
    weatherTitle.textContent = `Погода в ${weatherData.name}`;

    const weatherDescription = document.createElement('p');
    weatherDescription.textContent = `Температура: ${weatherData.main.temp}°C, ${weatherData.weather[0].description}`;

    weatherDiv.appendChild(weatherImage);
    weatherDiv.appendChild(weatherTitle);
    weatherDiv.appendChild(weatherDescription);

    contentDiv.appendChild(weatherDiv);
  } else {
    contentDiv.textContent = 'Не удалось загрузить данные о погоде.';
  }
});