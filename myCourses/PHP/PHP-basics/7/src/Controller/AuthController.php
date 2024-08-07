<?php

namespace App\Controller;

use App\Service\AuthService;

class AuthController extends AbstractController
{
    public function login()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $authService = new AuthService();
            $authService->login($_POST['username'], $_POST['password'], isset($_POST['remember_me']));
            header('Location: index.php');
        } else {
            $this->render('login.php');
        }
    }

    public function logout()
    {
        $authService = new AuthService();
        $authService->logout();
        header('Location: index.php');
    }
}
