## Курс по Node.JS [урок №1]

### Описание проекта

Это простой HTTP сервер, реализованный на **Node.JS** с использованием **Express**. Сервер обрабатывает три маршрута:
- `/` - Главная страница
- `/about` - Страница "О нас"
- Любой другой маршрут - страница 404

Каждая страница содержит счётчик просмотров, который увеличивается при каждом посещении.

### Установка и запуск

1. Склонируйте репозиторий:
   ```bash
   git clone <ссылка-на-репозиторий>
   ```
2. Запустите сервер из папки проекта:
   node server.js