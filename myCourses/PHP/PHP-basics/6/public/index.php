<?php

require_once '../src/Application.php';
require_once '../src/Render.php';

try {
    $app = new Application();
    echo $app->run();
} catch (Exception $e) {
    echo Render::renderExceptionPage($e);
}
