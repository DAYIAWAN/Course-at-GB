## Курс по Node.JS [урок №3]

### Описание проекта

Это простой HTTP сервер, реализованный на **Node.JS** с использованием **Express**. Сервер обрабатывает следующие маршруты:
- `/` - Главная страница
- `/about` - Страница "О нас"
- `/counter` - Эндпоинт для получения значений счетчиков
- Любой другой маршрут - страница 404

Каждая страница (`index.html` и `about.html`) содержит счётчик просмотров, который увеличивается при каждом посещении. Значение счетчика сохраняется в файл `counters.json`, и при запуске сервера счетчики загружаются из этого файла. Это позволяет сохранить значения счетчиков между перезапусками сервера.

### Установка и запуск

1. Склонируйте репозиторий:
   ```bash
   git clone <ссылка-на-репозиторий>
   ```
2. Запустите сервер из папки проекта:
   node server.js