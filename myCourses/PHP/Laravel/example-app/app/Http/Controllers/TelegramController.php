<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TelegramController extends Controller
{
    /**
     * Handle incoming webhook requests from Telegram.
     */
    public function webhook(Request $request)
    {
        // Получаем данные из входящего вебхука
        $data = $request->all();

        // Дополнительная обработка данных вебхука

        // Возвращаем ответ Telegram для подтверждения получения вебхука
        return response()->json(['status' => 'ok']);
    }

    /**
     * Send a message to a Telegram chat.
     */
    public function sendMessage(Request $request)
    {
        // Получаем данные для отправки сообщения из запроса
        $chatId = $request->input('chat_id');
        $text = $request->input('text');

        // Указываем путь к сертификату
        $certificatePath = 'C:/Program Files/PHP/cert/cacert.pem';

        // Отключаем проверку SSL
        $response = Http::withOptions([
            'verify' => $certificatePath,
            'curl' => [CURLOPT_SSL_VERIFYPEER => false, CURLOPT_SSL_VERIFYHOST => false],
        ])->post('https://api.telegram.org/bot' . env('TELEGRAM_BOT_TOKEN') . '/sendMessage', [
            'chat_id' => $chatId,
            'text' => $text,
        ]);

        // Проверяем успешность запроса
        if ($response->successful()) {
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error', 'message' => 'Failed to send message to Telegram']);
        }
    }
}
