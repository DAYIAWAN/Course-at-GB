<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormProcessor extends Controller
{
    public function index()
    {
        return view('form');
    }

    public function store(Request $request)
    {
        // Здесь вы можете обработать данные формы, полученные из $request

        // Например, вы можете просто вернуть все данные формы
        // return $request->all();

        // Или вы можете перенаправить пользователя обратно на форму
        // return redirect('/userform');
    }
}
