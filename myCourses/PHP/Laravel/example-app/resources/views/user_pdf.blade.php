<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Информация о пользователе</title>
</head>
<body>
    <h1>Информация о пользователе</h1>
    <p><strong>Имя:</strong> {{ $user->name }}</p>
    <p><strong>Фамилия:</strong> {{ $user->surname }}</p>
    <p><strong>Email:</strong> {{ $user->email }}</p>
</body>
</html>
