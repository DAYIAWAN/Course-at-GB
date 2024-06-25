const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Переменные для счетчиков просмотров
let indexCounter = 0;
let aboutCounter = 0;

// Настройка статической папки для CSS
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для главной страницы
app.get('/', (req, res) => {
  indexCounter++;
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Маршрут для страницы About
app.get('/about', (req, res) => {
  aboutCounter++;
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Обработка запроса для получения значений счетчиков
app.get('/counter', (req, res) => {
  const type = req.query.type;
  let counter;

  if (type === 'index') {
    counter = indexCounter;
  } else if (type === 'about') {
    counter = aboutCounter;
  } else {
    return res.status(400).send('Invalid counter type');
  }

  res.json({ counter });
});

// Обработка несуществующих маршрутов
app.use((req, res) => {
  res.status(404).send('<h1>404: Page Not Found</h1>');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
