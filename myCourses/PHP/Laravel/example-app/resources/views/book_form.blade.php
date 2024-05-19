<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Добавить книгу</title>
</head>
<body>
    <h1>Добавить новую книгу</h1>

    <!-- Отображение ошибок валидации -->
    @if ($errors->any())
        <div>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="/store" method="POST">
        @csrf
        <label for="title">Название книги:</label>
        <input type="text" id="title" name="title" value="{{ old('title') }}" required>

        <label for="author">Имя автора:</label>
        <input type="text" id="author" name="author" value="{{ old('author') }}" required>

        <label for="genre">Жанр:</label>
        <select id="genre" name="genre">
            <option value="fiction" {{ old('genre') == 'fiction' ? 'selected' : '' }}>Фантастика</option>
            <option value="non-fiction" {{ old('genre') == 'non-fiction' ? 'selected' : '' }}>Нон-фикшн</option>
            <!-- другие опции -->
        </select>

        <button type="submit">Добавить книгу</button>
    </form>
</body>
</html>
