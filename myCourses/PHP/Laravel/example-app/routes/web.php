<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormProcessor;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\BookController;
use App\Models\Employee;

// Роут для корневой страницы
Route::get('/', function () {
    return view('home', [
        'name' => 'Иван Иванов',
        'age' => 25,
        'position' => 'Разработчик',
        'address' => 'ул. Ленина, д. 1'
    ]);
});

// Роут для страницы контактов
Route::get('/contacts', function () {
    return view('contacts', [
        'address' => 'ул. Пушкина, дом 1',
        'post_code' => '123456',
        'email' => 'example@example.com',
        'phone' => '+7 (123) 456-78-90'
    ]);
});

// Существующие роуты
Route::get('/userform', [FormProcessor::class, 'index']);
Route::post('/store_form', [FormProcessor::class, 'store']);

Route::get('/test_database', function () {
    $employee = new Employee;
    $employee->surname = 'Иванов';
    $employee->name = 'Иван';
    $employee->patronymic = 'Иванович';
    $employee->birth_date = '1950-01-01';
    $employee->birth_place = 'Москва';
    $employee->work_place = 'ООО "Рога и Копыта"';
    $employee->phone = '+7 926 000-00-00';
    $employee->email = 'info@example.com';
    $employee->website = 'https://example.com';
    $employee->save();

    return "Employee created successfully!";
});

Route::get('/test_database_update', function () {
    $employee = Employee::find(1);

    if ($employee) {
        $employee->surname = 'Петров';
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
