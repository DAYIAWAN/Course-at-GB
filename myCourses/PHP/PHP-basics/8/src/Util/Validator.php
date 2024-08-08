<?php

namespace App\Util;

class Validator
{
    public static function validateRequestData($data)
    {
        // Проверка на наличие HTML-тегов
        return !preg_match('/<[^>]*>/', $data);
    }
}
