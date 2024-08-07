<?php

function searchBirthdays($filename, $searchDate) {
    $file = fopen($filename, 'r');
    if (!$file) {
        throw new Exception("Не удалось открыть файл для чтения.");
    }

    while (($line = fgets($file)) !== false) {
        $line = trim($line);
        list($name, $date) = explode(',', $line);
        $date = trim($date);

        if ($date === $searchDate) {
            echo "Поздравляем: $name\n";
        }
    }

    fclose($file);
}

// Пример использования
try {
    $searchDate = date('d-m-Y');
    searchBirthdays('users.txt', $searchDate);
} catch (Exception $e) {
    echo "Ошибка: " . $e->getMessage() . "\n";
}
?>
