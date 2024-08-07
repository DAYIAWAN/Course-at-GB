<?php

function deleteLine($filename, $searchTerm) {
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
            $found = true;
        }
    }

    if (!$found) {
        echo "Строка не найдена.\n";
        return;
    }

    file_put_contents($filename, implode("\n", $newFileContent));
    echo "Строка успешно удалена.\n";
}

// Пример использования
try {
    $searchTerm = '05-06-1992'; // Или имя пользователя
    deleteLine('users.txt', $searchTerm);
} catch (Exception $e) {
    echo "Ошибка: " . $e->getMessage() . "\n";
}
?>
