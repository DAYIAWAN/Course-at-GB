<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use PDF;

class PdfGeneratorController extends Controller
{
    public function generatePdf($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'Пользователь не найден'], 404);
        }

        $pdf = PDF::loadView('user_pdf', compact('user'));
        return $pdf->download('user_'.$user->id.'.pdf');
    }
}
