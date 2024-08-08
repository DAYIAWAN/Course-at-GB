<?php
session_start();
require_once '../vendor/autoload.php';

use App\Controller\AuthController;
use App\Controller\UserController;

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

switch ($uri) {
    case '/login.php':
        (new AuthController())->login();
        break;

    case '/logout.php':
        (new AuthController())->logout();
        break;

    case '/register.php':
        (new UserController())->createUser();
        break;

    case '/user.php':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (isset($_POST['id'])) {
                (new UserController())->updateUser();
            } else {
                (new UserController())->createUser();
            }
        } else {
            (new UserController())->showUserForm();
        }
        break;

    default:
        // Default route
        echo 'Page not found!';
        break;
}
