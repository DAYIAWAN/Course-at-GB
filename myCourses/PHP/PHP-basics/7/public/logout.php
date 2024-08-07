<?php
session_start();
require_once '../vendor/autoload.php';

use App\Service\AuthService;

$authService = new AuthService();
$authService->logout();
header('Location: index.php');
exit();
