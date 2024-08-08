<?php

namespace App\Service;

use App\Model\User;
use App\Model\UserRepository;

class UserService
{
    private $userRepository;

    public function __construct()
    {
        $this->userRepository = new UserRepository();
    }

    public function createUser($name, $email, $password)
    {
        if ($this->isEmailTaken($email)) {
            throw new \Exception('Email is already taken.');
        }

        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $user = new User($name, $email, $hashedPassword);
        $this->userRepository->save($user);
    }

    public function updateUser($id, $name, $email, $password = null)
    {
        $user = $this->userRepository->find($id);

        if (!$user) {
            throw new \Exception('User not found.');
        }

        if ($this->isEmailTaken($email, $id)) {
            throw new \Exception('Email is already taken.');
        }

        $user->name = $name;
        $user->email = $email;

        if ($password) {
            $user->password = password_hash($password, PASSWORD_BCRYPT);
        }

        $this->userRepository->save($user);
    }

    public function deleteUser($id)
    {
        $this->userRepository->delete($id);
    }

    private function isEmailTaken($email, $excludeId = null)
    {
        $existingUser = $this->userRepository->findByEmail($email);
        return $existingUser && $existingUser->id !== $excludeId;
    }
}
