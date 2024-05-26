<!DOCTYPE html>
<html>
<head>
    <title>Создание новости</title>
    <style>
        body { font-family: Arial, sans-serif; }
        h1 { color: #333; }
        p { margin: 0 0 10px; }
    </style>
</head>
<body>
    <h1>Новость успешно создана!</h1>
    <p><strong>Заголовок:</strong> {{ $data['title'] }}</p>
    <p><strong>Текст:</strong> {{ $data['body'] }}</p>
    <p><strong>Slug:</strong> {{ $data['slug'] }}</p>
    <p><strong>Обновлено:</strong> {{ $data['updated_at'] }}</p>
    <p><strong>Создано:</strong> {{ $data['created_at'] }}</p>
    <p><strong>ID:</strong> {{ $data['id'] }}</p>
</body>
</html>
