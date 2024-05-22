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
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'Пользователь не найден'], 404);
        }

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
