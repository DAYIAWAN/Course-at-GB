<?php

function validateDate($date) {
    $dateArray = explode('-', $date);
    if (count($dateArray) !== 3) {
        return false;
    }

    list($day, $month, $year) = $dateArray;

    return checkdate((int)$month, (int)$day, (int)$year);
}

function writeToFile($filename, $data) {
    $file = fopen($filename, 'a');
    if (!$file) {
        throw new Exception("Не удалось открыть файл для записи.");
    }

    $date = $data['date'];
    if (!validateDate($date)) {
        throw new InvalidArgumentException("Некорректная дата: $date");
    }

    $name = $data['name'];
    if (empty($name)) {
        throw new InvalidArgumentException("Имя не может быть пустым.");
    }

    fwrite($file, "$name, $date\n");
    fclose($file);
}

// Пример использования
try {
    $data = [
        'name' => 'Василий Васильев',
        'date' => '05-06-1992'
    ];
    writeToFile('users.txt', $data);
    echo "Данные успешно записаны.\n";
} catch (Exception $e) {
    echo "Ошибка: " . $e->getMessage() . "\n";
}
?>
