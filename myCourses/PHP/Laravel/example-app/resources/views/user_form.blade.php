<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->
        <style>
            /* Ваш CSS код */
        </style>
    </head>
    <body>
        <form action="/users/{{ $user->id }}/pdf" method="POST">
            @csrf
            <input type="text" name="name" value="{{ $user->name }}">
            <input type="text" name="surname" value="{{ $user->surname }}">
            <input type="email" name="email" value="{{ $user->email }}">
            <button type="submit">Отправить</button>
        </form>
        <!-- Остальной HTML код -->
    </body>
</html>
