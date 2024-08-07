<?php
// Здесь мы обрабатываем логику аутентификации через AuthController
require_once '../vendor/autoload.php';
use App\Controller\AuthController;

$authController = new AuthController();
$authController->login();
