<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

// Настройка Twig
$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader);

try {
    // Определение текущей страницы
    $page = $_GET['page'] ?? 'home';
    
    // Проверка наличия файла шаблона
    if (!file_exists(__DIR__ . "/../templates/$page.html.twig")) {
        throw new Exception('Page not found');
    }
    
    // Рендеринг основной страницы
    echo $twig->render("$page.html.twig", [
        'current_time' => date('H:i:s')
    ]);
} catch (Exception $e) {
    // Рендеринг страницы ошибки
    header('HTTP/1.0 404 Not Found');
    echo $twig->render('error.html.twig');
}
