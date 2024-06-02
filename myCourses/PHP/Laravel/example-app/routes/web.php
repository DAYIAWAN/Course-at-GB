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
use Telegram\Bot\Laravel\Facades\Telegram;

// Route for the home page
Route::get('/', function () {
    return view('welcome');
});

// Dashboard route
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Routes with authentication and role checking middleware
Route::middleware(['auth', 'CheckRole'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route for the contacts page
Route::get('/contacts', function () {
    return view('contacts', [
        'address' => 'ул. Мясницкая, дом 26',
        'post_code' => '101000',
        'email' => 'example@example.com',
        'phone' => '+7 (000) 000-00-00'
    ]);
});

// Existing routes
Route::get('/userform', [UserController::class, 'form']); // Added route
Route::post('/users', [UserController::class, 'store']); // Modified route

// Route for testing database insertion
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

// Route for testing database update
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

// Routes for EmployeeController
Route::get('/employee', [EmployeeController::class, 'index']);
Route::post('/employee', [EmployeeController::class, 'store']);
Route::get('/employee/{id}', [EmployeeController::class, 'show']);
Route::get('/employee/path', [EmployeeController::class, 'getPath']);
Route::get('/employee/url', [EmployeeController::class, 'getUrl']);

// Routes for BookController
Route::get('/index', [BookController::class, 'index']);
Route::post('/store', [BookController::class, 'store']);
Route::get('/show/{id}', [BookController::class, 'show']);
Route::get('/path', [BookController::class, 'getPath']);
Route::get('/url', [BookController::class, 'getUrl']);

// New routes for UserController and PdfGeneratorController
Route::get('/users', [UserController::class, 'index'])->middleware('CheckRole'); // Get all users
Route::get('/users/{id}', [UserController::class, 'show'])->middleware('CheckRole'); // Get one user by id
Route::post('/users', [UserController::class, 'store'])->middleware('CheckRole'); // Create a new user
Route::post('/users/{id}/pdf', [UserController::class, 'generatePdf'])->middleware('CheckRole'); // Get user data as PDF

// Added route for logs
Route::get('/logs', function () {
    $logs = App\Models\Log::all();
    return view('logs', ['logs' => $logs]);
});

// Added routes for creating and hiding news
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

// Test route for Telegram
Route::get('test-telegram', function () {
    Telegram::sendMessage([
        'chat_id' => env('7251660834:AAGqonJPfIpn8EM1RtDyZt02RwPqp2ClVkM', ''),
        'parse_mode' => 'html',
        'text' => 'Произошло тестовое событие'
    ]);
    return response()->json(['status' => 'success']);
});

require __DIR__.'/auth.php';
