## PHP Homework: Conditions, Arrays, Loops, Functions

### Описание

Этот проект включает выполнение различных задач с использованием PHP: арифметические операции, функции, работа с массивами, транслитерация строк, рекурсия и форматирование времени.

### Файлы

- `functions.php`: Реализация основных арифметических операций и функции `mathOperation`.
- `cities.php`: Массив областей и городов с выводом значений.
- `transliteration.php`: Функция транслитерации строк.
- `recursion.php`: Функция возведения числа в степень с использованием рекурсии.
- `time.php`: Функция для форматирования времени с правильными склонениями.

### Инструкции по выполнению

#### 1. Арифметические операции

Функции для выполнения основных арифметических операций находятся в файле `functions.php`. Эти функции принимают два числа и возвращают результат выполнения соответствующей операции. Пример использования:

```php
include 'functions.php';
echo add(5, 3); // Вывод: 8
