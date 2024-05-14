<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/userform', 'FormProcessor@index');
Route::post('/store_form', 'FormProcessor@store');
