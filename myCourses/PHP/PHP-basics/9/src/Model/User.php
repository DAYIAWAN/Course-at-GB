<?php

namespace App\Model;

class User
{
    public $id;
    public $name;
    public $email;
    public $password;

    public function __construct($name, $email, $password = null)
    {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
    }
}
