<?php

namespace App\Controller;

use App\Model\User;
use App\Model\UserRepository;

class UserController extends AbstractController
{
    public function createUser()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $user = new User($_POST['name'], $_POST['email']);
            $userRepository = new UserRepository();
            $userRepository->save($user);
            header('Location: user_list.php');
        } else {
            $this->render('user_form.php');
        }
    }

    public function updateUser()
    {
        $this->checkAdmin();  // Проверка прав администратора

        $userRepository = new UserRepository();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $user = $userRepository->find($_POST['id']);
            $user->name = $_POST['name'];
            $user->email = $_POST['email'];
            $userRepository->save($user);
            header('Location: user_list.php');
        } else {
            $user = $userRepository->find($_GET['id']);
            $this->render('user_form.php', ['user' => $user]);
        }
    }

    public function deleteUser()
    {
        $this->checkAdmin();  // Проверка прав администратора

        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
            $userRepository = new UserRepository();
            $userRepository->delete($_POST['id']);
            echo json_encode(['status' => 'success']);
            return;
        }

        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
    }

    private function checkAdmin()
    {
        // Предполагается, что $this->currentUser содержит текущего пользователя
        if ($this->currentUser->role !== 'admin') {
            header('HTTP/1.1 403 Forbidden');
            exit('Access denied');
        }
    }
}
