<?php
include 'A.php'; // Содержит класс A
$a1 = new A();
$a2 = new A();
$a1->foo();
$a2->foo();
$a1->foo();
$a2->foo();
?>
