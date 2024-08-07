<?php

namespace App\Service;

class UserStorage {
    private $filename = __DIR__ . '/../../users.txt';

    public function saveUser($name, $birthday) {
        $entry = "$name, $birthday\n";
        file_put_contents($this->filename, $entry, FILE_APPEND);
    }
}
