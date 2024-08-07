<?php

require_once 'Database.php';
require_once 'Render.php';
require_once 'User.php';

class Application
{
    public function run()
    {
        $action = $_GET['action'] ?? null;
        $id = $_GET['id'] ?? null;
        $name = $_GET['name'] ?? null;

        if ($action === 'update' && $id && $name) {
            return $this->updateUser($id, $name);
        } elseif ($action === 'delete' && $id) {
            return $this->deleteUser($id);
        } else {
            throw new Exception('Invalid action or parameters.');
        }
    }

    private function updateUser($id, $name)
    {
        $user = new User();
        $result = $user->update($id, $name);

        if ($result) {
            return "User updated successfully.";
        } else {
            throw new Exception('User not found.');
        }
    }

    private function deleteUser($id)
    {
        $user = new User();
        $result = $user->delete($id);

        if ($result) {
            return "User deleted successfully.";
        } else {
            throw new Exception('User not found.');
        }
    }
}
