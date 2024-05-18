<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormProcessor;
use App\Models\Employee;

Route::get('/', function () {
    return view('welcome');
});

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
