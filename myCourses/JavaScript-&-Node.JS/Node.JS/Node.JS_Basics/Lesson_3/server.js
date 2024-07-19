const express = require('express');
const path = require('path');
const fs = require('fs-extra'); // Используем fs-extra для работы с файловой системой
const app = express();
const port = 3000;

const countersFilePath = path.join(__dirname, 'counters.json');

// Переменные для счетчиков просмотров
let counters = {
  index: 0,
  about: 0
};

// Функция для загрузки счетчиков из файла
const loadCounters = async () => {
  try {
    if (await fs.pathExists(countersFilePath)) {
      const data = await fs.readJson(countersFilePath);
      counters = data;
    }
  } catch (error) {
    console.error('Error loading counters:', error);
  }
};

// Функция для сохранения счетчиков в файл
const saveCounters = async () => {
  try {
    await fs.writeJson(countersFilePath, counters);
  } catch (error) {
    console.error('Error saving counters:', error);
  }
};

// Загрузка счетчиков при старте сервера
loadCounters();

// Настройка статической папки для CSS
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для главной страницы
app.get('/', async (req, res) => {
  counters.index = (counters.index || 0) + 1;
  await saveCounters();
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Маршрут для страницы About
app.get('/about', async (req, res) => {
  counters.about = (counters.about || 0) + 1;
  await saveCounters();
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Обработка запроса для получения значений счетчиков
app.get('/counter', (req, res) => {
  const type = req.query.type;
  let counter;

  if (type === 'index') {
    counter = counters.index;
  } else if (type === 'about') {
    counter = counters.about;
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
