<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    /**
     * Метод для отображения формы добавления книги.
     */
    public function index()
    {
        return view('book_form');
    }

    /**
     * Метод для обработки данных формы и сохранения книги.
     */
    public function store(Request $request)
    {
        // Валидация данных формы
        $validatedData = $request->validate([
            'title' => 'required|unique:books|max:255',
            'author' => 'required|max:100',
            'genre' => 'required',
        ]);

        // Создание новой книги и сохранение данных
        $book = new Book();
        $book->title = $validatedData['title'];
        $book->author = $validatedData['author'];
        $book->genre = $validatedData['genre'];
        $book->save();

        // Перенаправление с сообщением об успехе
        return redirect('/index')->with('success', 'Книга успешно добавлена!');
    }
}
