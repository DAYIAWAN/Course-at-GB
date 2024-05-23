<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use PDF;
use Dompdf\Dompdf;

class PdfGeneratorController extends Controller
{
    public function generatePdf($id)
    {
        // Находим пользователя по ID
        $user = User::find($id);
        // Если пользователь не найден, возвращаем ошибку
        if (!$user) {
            return response()->json(['message' => 'Пользователь не найден'], 404);
        }

        // Генерируем PDF из представления 'user_pdf' и данных пользователя
        $pdf = PDF::loadView('user_pdf', compact('user'));

        // Создаем экземпляр Dompdf и устанавливаем опцию
        $dompdf = new Dompdf();
        $dompdf->set_option('isHtml5ParserEnabled', true);

        // Загружаем HTML из сгенерированного PDF
        $dompdf->loadHtml($pdf->output());

        // Рендерим PDF и возвращаем его
        $dompdf->render();
        return $dompdf->stream('user_'.$user->id.'.pdf');
    }
}
