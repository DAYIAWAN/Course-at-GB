<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormProcessor;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PdfGeneratorController;
use App\Models\Employee;

// Роут для корневой страницы
Route::get('/', function () {
    return view('home', [
        'name' => 'Мотояма Д.Х.',
        'age' => 38,
        'position' => 'Разработчик',
        'address' => 'ул. Мясницкая, дом 26'
    ]);
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
Route::post('/users/{id}/pdf', [FormProcessor::class, 'store']); // Измененный роут

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
Route::get('/users', [UserController::class, 'index']); // Получение всех пользователей
Route::get('/users/{id}', [UserController::class, 'show']); // Получение одного пользователя по id
Route::post('/users', [UserController::class, 'store']); // Создание нового пользователя
Route::get('/users/{id}/pdf', [PdfGeneratorController::class, 'generatePdf']); // Получение данных о пользователе в виде PDF-файла
