<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormProcessor;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PdfGeneratorController;
use App\Http\Controllers\ProfileController;
use App\Models\Employee;
use App\Models\News;
use App\Events\NewsHidden;

// Роут для корневой страницы
Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'CheckRole'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Роут для страницы контактов
Route::get('/contacts', function () {
    return view('contacts', [
        'address' => 'ул. Мясницкая, дом 26',
        'post_code' => '101000',
        'email' => 'example@example.com',
        'phone' => '+7 (000) 000-00-00'
    ]);
});

// Существующие роуты
Route::get('/userform', [UserController::class, 'form']); // Добавленный роут
Route::post('/users', [UserController::class, 'store']); // Измененный роут

Route::get('/test_database', function () {
    $employee = new Employee;
    $employee->surname = 'Мотояма';
    $employee->name = 'Дайяван';
    $employee->patronymic = 'Харутонарджима';
    $employee->birth_date = '1985-09-09';
    $employee->birth_place = 'Москва';
    $employee->work_place = 'ООО "Рога и Копыта"';
    $employee->phone = '+7 (000) 000-00-00';
    $employee->email = 'info@example.com';
    $employee->website = 'https://example.com';
    $employee->save();

    return "Employee created successfully!";
});

Route::get('/test_database_update', function () {
    $employee = Employee::find(1);

    if ($employee) {
        $employee->surname = 'Проверка_user_ID_1';
        $employee->save();

        return "Employee updated successfully!";
    } else {
        return "Employee not found!";
    }
});

// Маршруты для EmployeeController
Route::get('/employee', [EmployeeController::class, 'index']);
Route::post('/employee', [EmployeeController::class, 'store']);
Route::get('/employee/{id}', [EmployeeController::class, 'show']);
Route::get('/employee/path', [EmployeeController::class, 'getPath']);
Route::get('/employee/url', [EmployeeController::class, 'getUrl']);

// Маршруты для BookController
Route::get('/index', [BookController::class, 'index']);
Route::post('/store', [BookController::class, 'store']);
Route::get('/show/{id}', [BookController::class, 'show']);
Route::get('/path', [BookController::class, 'getPath']);
Route::get('/url', [BookController::class, 'getUrl']);

// Новые маршруты для UserController и PdfGeneratorController
Route::get('/users', [UserController::class, 'index'])->middleware('CheckRole'); // Получение всех пользователей
Route::get('/users/{id}', [UserController::class, 'show'])->middleware('CheckRole'); // Получение одного пользователя по id
Route::post('/users', [UserController::class, 'store'])->middleware('CheckRole'); // Создание нового пользователя
Route::post('/users/{id}/pdf', [UserController::class, 'generatePdf'])->middleware('CheckRole'); // Получение данных о пользователе в виде PDF-файла

// Добавленный роут для логов
Route::get('/logs', function() {
    $logs = App\Models\Log::all();
    return view('logs', ['logs' => $logs]);
});

// Добавленные маршруты для создания и скрытия новостей
Route::get('news/create-test', function () {
    $news = new News();

    $news->title = 'Test news title';
    $news->body = 'Test news body';

    $news->save();

    return view('news.create', ['data' => $news]);
});

Route::get('news/{id}/hide', function ($id) {
    $news = News::findOrFail($id);
    $news->hidden = true;
    $news->save();

    NewsHidden::dispatch($news);

    return 'News hidden';
});

require __DIR__.'/auth.php';
