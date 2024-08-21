<?php

require 'vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection([
    'driver' => 'mysql',
    'host' => '127.0.0.1',
    'database' => 'your_database',
    'username' => 'your_username',
    'password' => 'your_password',
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => '',
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();

require 'src/migrations/2024_08_21_add_role_to_users_table.php';

$migration = new AddRoleToUsersTable();
$migration->up();

echo "Migration completed!";
