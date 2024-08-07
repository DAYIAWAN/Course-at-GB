<?php

namespace App\Controller;

use App\Service\UserStorage;

class UserController {
    private $storage;

    public function __construct(UserStorage $storage) {
        $this->storage = $storage;
    }

    public function save() {
        if (isset($_GET['name']) && isset($_GET['birthday'])) {
            $name = htmlspecialchars($_GET['name']);
            $birthday = htmlspecialchars($_GET['birthday']);
            $this->storage->saveUser($name, $birthday);
            echo 'User saved successfully!';
        } else {
            echo 'Invalid input.';
        }
    }
}
