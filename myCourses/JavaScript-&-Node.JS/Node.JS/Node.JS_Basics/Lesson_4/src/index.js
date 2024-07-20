const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const filePath = path.join(__dirname, '../data/users.json');

// Считывание пользователей из файла
function readUsers() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Ошибка при чтении файла:', error);
    return [];
  }
}

// Запись пользователей в файл
function writeUsers(users) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Ошибка при записи файла:', error);
  }
}

// Получение всех пользователей
app.get('/users', (req, res) => {
  try {
    const users = readUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при чтении файла' });
  }
});

// Получение пользователя по ID
app.get('/users/:id', (req, res) => {
  try {
    const users = readUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при чтении файла' });
  }
});

// Создание нового пользователя
app.post('/users', (req, res) => {
  try {
    const users = readUsers();
    const newUser = req.body;
    newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push(newUser);
    writeUsers(users);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при записи в файл' });
  }
});

// Обновление пользователя по ID
app.put('/users/:id', (req, res) => {
  try {
    const users = readUsers();
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...req.body };
      writeUsers(users);
      res.json(users[userIndex]);
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при записи в файл' });
  }
});

// Удаление пользователя по ID
app.delete('/users/:id', (req, res) => {
  try {
    const users = readUsers();
    const newUsers = users.filter(u => u.id !== parseInt(req.params.id));
    if (newUsers.length < users.length) {
      writeUsers(newUsers);
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при записи в файл' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
