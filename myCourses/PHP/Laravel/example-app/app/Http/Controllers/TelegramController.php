<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

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

        // Создаем экземпляр Guzzle HTTP-клиента с отключенной проверкой SSL
        $client = new Client(['verify' => false]);

        // Отправляем сообщение в указанный чат
        $response = $client->post('https://api.telegram.org/bot' . env('TELEGRAM_BOT_TOKEN') . '/sendMessage', [
            RequestOptions::JSON => [
                'chat_id' => $chatId,
                'text' => $text,
            ]
        ]);

        // Проверяем успешность запроса
        if ($response->getStatusCode() == 200) {
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error', 'message' => 'Failed to send message to Telegram']);
        }
    }
}
