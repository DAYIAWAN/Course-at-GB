<?php

function updateRecord($filename, $searchTerm, $newData) {
    $file = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($file === false) {
        throw new Exception("Не удалось открыть файл для чтения.");
    }

    $found = false;
    $newFileContent = [];

    foreach ($file as $line) {
        if (strpos($line, $searchTerm) === false) {
            $newFileContent[] = $line;
        } else {
            $newFileContent[] = $newData;
            $found = true;
        }
    }

    if (!$found) {
        echo "Запись не найдена.\n";
        return;
    }

    file_put_contents($filename, implode("\n", $newFileContent));
    echo "Запись успешно обновлена.\n";
}

// Пример использования
try {
    $searchTerm = '05-06-1992'; // Или имя пользователя
    $newData = 'Новый Имя, 05-06-1993'; // Новый формат данных
    updateRecord('users.txt', $searchTerm, $newData);
} catch (Exception $e) {
    echo "Ошибка: " . $e->getMessage() . "\n";
}
?>
