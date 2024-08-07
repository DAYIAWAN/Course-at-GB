<?php
require_once '../vendor/autoload.php';

use App\Controller\UserController;

$controller = new UserController();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Если POST запрос, значит, это создание или обновление пользователя
    if (isset($_POST['id'])) {
        $controller->updateUser();
    } else {
        $controller->createUser();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'delete') {
    // Если GET запрос с параметром 'action' и значением 'delete', то удаляем пользователя
    $controller->deleteUser();
} else {
    // Для других случаев, например, отображение формы
    $controller->showUserForm();
}
