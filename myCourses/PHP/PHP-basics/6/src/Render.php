<?php

class Render
{
    public static function renderExceptionPage(Exception $e)
    {
        ob_start();
        include __DIR__ . '/../templates/exception.php';
        $content = ob_get_clean();
        return $content;
    }
}
