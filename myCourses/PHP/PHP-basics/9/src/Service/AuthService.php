<?php

namespace App\Service;

use App\Model\User;
use App\Model\UserRepository;

class AuthService
{
    public function login($username, $password, $rememberMe)
    {
        $userRepository = new UserRepository();
        $user = $userRepository->findByUsername($username);
        
        if ($user && password_verify($password, $user->password)) {
            $_SESSION['user'] = $user;

            if ($rememberMe) {
                $token = bin2hex(random_bytes(16));
                setcookie('auth_token', $token, time() + (86400 * 30), "/");
                $userRepository->storeToken($user->id, $token);
            }

            return true;
        }
        return false;
    }

    public function logout()
    {
        setcookie('auth_token', '', time() - 3600, "/");
        session_unset();
        session_destroy();
    }
}
