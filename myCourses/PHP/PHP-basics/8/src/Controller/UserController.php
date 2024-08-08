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
        $userRepository = new UserRepository();
        $userRepository->delete($_GET['id']);
        header('Location: user_list.php');
    }
}
