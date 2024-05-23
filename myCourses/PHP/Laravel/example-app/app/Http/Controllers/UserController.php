<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function store(Request $request)
    {
        // Валидация данных
        $request->validate([
            'name' => 'required|max:50',
            'surname' => 'required|max:50',
            'email' => 'required|email|regex:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i',
        ]);

        // Сохранение данных в базу
        $user = new User();
        $user->name = $request->input('name');
        $user->surname = $request->input('surname');
        $user->email = $request->input('email');
        $user->save();

        return redirect('/users');
    }

    // Функция для получения всех пользователей
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    // Функция для получения одного пользователя по id
    public function show($id)
    {
        $user = User::find($id);
        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['message' => 'Пользователь не найден'], 404);
        }
    }

    // Функция для отображения формы
    public function form()
    {
        $user = User::first(); // или любой другой способ получения пользователя

        if ($user) {
            return view('form', compact('user'));
        } else {
            return response()->json(['message' => 'Пользователь не найден'], 404);
        }
    }
}
