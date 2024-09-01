const apiKey = 'a80321e7bf6a64ccfbefa49b82d17498';
const city = 'Moscow';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`;

async function fetchWeatherData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}

export { fetchWeatherData };