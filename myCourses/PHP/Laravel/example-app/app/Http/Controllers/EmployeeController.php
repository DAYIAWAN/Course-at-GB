<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        return view('employee');
    }

    public function store(Request $request)
    {
        $firstName = $request->input('first_name');
        $lastName = $request->input('last_name');
        $position = $request->input('position');
        $address = $request->input('address');
        $additionalInfo = json_decode($request->input('additional_info'), true);

        // Пример обработки данных
        // Сохранение данных в базу данных или выполнение других действий

        return response()->json([
            'first_name' => $firstName,
            'last_name' => $lastName,
            'position' => $position,
            'address' => $address,
            'additional_info' => $additionalInfo
        ]);
    }

    public function show($id)
    {
        // Получение данных о работнике по id
        // Пример:
        // $employee = Employee::find($id);

        return response()->json([
            'id' => $id,
            // 'employee' => $employee
        ]);
    }

    public function getPath(Request $request)
    {
        return $request->path();
    }

    public function getUrl(Request $request)
    {
        return $request->url();
    }

    public function update(Request $request, $id)
    {
        $firstName = $request->input('first_name');
        $lastName = $request->input('last_name');
        $position = $request->input('position');
        $address = $request->input('address');
        $additionalInfo = json_decode($request->input('additional_info'), true);

        // Пример обновления данных
        // $employee = Employee::find($id);
        // $employee->update([...]);

        return response()->json([
            'id' => $id,
            'first_name' => $firstName,
            'last_name' => $lastName,
            'position' => $position,
            'address' => $address,
            'additional_info' => $additionalInfo
        ]);
    }
}
