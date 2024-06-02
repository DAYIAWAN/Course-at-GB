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

        // Создание нового cURL ресурса
        $ch = curl_init();

        // Установка URL и других необходимых параметров
        curl_setopt($ch, CURLOPT_URL, 'https://api.telegram.org/bot' . env('TELEGRAM_BOT_TOKEN') . '/sendMessage');
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, [
            'chat_id' => $chatId,
            'text' => $text,
        ]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CAINFO, 'C:/Program Files/PHP/cert/cacert.pem'); // Указание пути к файлу сертификата
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Отключение проверки SSL
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // Отключение проверки хоста

        // Выполнение запроса
        $result = curl_exec($ch);

        // Закрытие cURL ресурса
        curl_close($ch);

        return response()->json(['status' => 'success']);
    }
}
