<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Добавить книгу</title>
</head>
<body>
    <h1>Добавить новую книгу</h1>
    <form action="/store" method="POST">
        @csrf
        <label for="title">Название книги:</label>
        <input type="text" id="title" name="title" required>

        <label for="author">Имя автора:</label>
        <input type="text" id="author" name="author" required>

        <label for="genre">Жанр:</label>
        <select id="genre" name="genre">
            <option value="fiction">Фантастика</option>
            <option value="non-fiction">Нон-фикшн</option>
            <!-- другие опции -->
        </select>

        <button type="submit">Добавить книгу</button>
    </form>
</body>
</html>
