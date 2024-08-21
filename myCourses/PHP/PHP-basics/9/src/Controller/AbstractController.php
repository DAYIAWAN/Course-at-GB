<?php

namespace App\Controller;

abstract class AbstractController
{
    protected function render($template, $data = [])
    {
        extract($data);
        include __DIR__ . '/../../templates/' . $template;
    }
}
