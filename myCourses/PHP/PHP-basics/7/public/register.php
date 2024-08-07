<?php
require_once '../vendor/autoload.php';

use App\Controller\UserController;

$controller = new UserController();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Если это POST запрос, обрабатываем регистрацию
    $controller->createUser();
} else {
    // Для GET запроса просто отображаем форму регистрации
    $controller->showUserForm();
}
