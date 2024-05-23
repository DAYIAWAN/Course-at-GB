<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class FormProcessor extends Controller
{
    public function index()
    {
        // Возвращает представление формы
        return view('form');
    }

    public function store(Request $request, $id) // Добавлен параметр $id
    {
        // Валидация данных
        $validatedData = $request->validate([
            'name' => 'required|max:50',
            'surname' => 'required|max:50',
            'email' => 'required|email',
            'password' => 'required', // Добавлена валидация пароля
        ]);

        // Создание нового пользователя
        $user = User::find($id); // Изменено на поиск пользователя по id
        if ($user) {
            $user->fill($validatedData);
            $user->password = bcrypt($request->password); // Добавлено хеширование пароля
            $user->save();

            // Перенаправление на страницу с PDF
            return redirect()->route('users.pdf', ['id' => $user->id]);
        } else {
            return "Пользователь не найден!";
        }
    }
}
