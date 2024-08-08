<?php

namespace App\Model;

class UserRepository
{
    // Assuming a PDO instance is available through dependency injection

    public function save(User $user)
    {
        // Implement saving logic here
    }

    public function find($id)
    {
        // Implement find logic here
    }

    public function delete($id)
    {
        // Implement delete logic here
    }

    public function storeToken($userId, $token)
    {
        // Implement token storage logic here
    }

    public function findByUsername($username)
    {
        // Implement find user by username logic here
    }
}
