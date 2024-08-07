<?php

require_once 'Database.php';

class User
{
    private $pdo;

    public function __construct()
    {
        $this->pdo = (new Database())->getPdo();
    }

    public function update($id, $name)
    {
        $sql = 'UPDATE users SET name = :name WHERE id = :id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([':name' => $name, ':id' => $id]);
        return $stmt->rowCount() > 0;
    }

    public function delete($id)
    {
        $sql = 'DELETE FROM users WHERE id = :id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([':id' => $id]);
        return $stmt->rowCount() > 0;
    }
}
