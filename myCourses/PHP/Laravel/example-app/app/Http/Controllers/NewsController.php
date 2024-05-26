<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News; // Убедитесь, что вы используете правильное пространство имен для вашей модели News

class NewsController extends Controller
{
    public function createTest()
    {
        $news = News::create([
            'title' => 'Test news title',
            'body' => 'Test news body',
            // slug будет автоматически создан в NewsObserver
        ]);

        $data = [
            "title" => $news->title,
            "body" => $news->body,
            "slug" => $news->slug,
            "updated_at" => $news->updated_at,
            "created_at" => $news->created_at,
            "id" => $news->id
        ];

        return view('news.create', ['data' => $data]); // предполагается, что у вас есть представление 'news.create'
    }
}
