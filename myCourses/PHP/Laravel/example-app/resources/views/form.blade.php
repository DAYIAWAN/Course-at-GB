<!DOCTYPE html>
<html>
<head>
    <title>Форма</title>
</head>
<body>
    <form method="POST" action="">
        @csrf
        <label for="name">Имя:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="surname">Фамилия:</label><br>
        <input type="text" id="surname" name="surname"><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        <input type="submit" value="Отправить">
    </form>
</body>
</html>
