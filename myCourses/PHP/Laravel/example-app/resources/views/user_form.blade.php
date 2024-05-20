<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Добавить пользователя</title>
</head>
<body>
    <form action="/users" method="POST">
        @csrf
        <label for="name">Имя:</label>
        <input type="text" id="name" name="name" required maxlength="50">

        <label for="surname">Фамилия:</label>
        <input type="text" id="surname" name="surname" required maxlength="50">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">

        <button type="submit">Добавить</button>
    </form>
</body>
</html>
