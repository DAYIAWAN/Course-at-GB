<!DOCTYPE html>
<html>
<head>
    <title>Форма</title>
</head>
<body>
    <form action="/users/{{ $user->id }}/pdf" method="POST">
        @csrf
        <input type="text" name="name" value="{{ $user->name }}">
        <input type="text" name="surname" value="{{ $user->surname }}">
        <input type="email" name="email" value="{{ $user->email }}">
        <button type="submit">Отправить</button>
    </form>
</body>
</html>
