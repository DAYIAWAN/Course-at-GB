<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Log;

class DataLogger
{
    private $start_time;

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next)
    {
        $this->start_time = microtime(true);

        return $next($request);
    }

    public function terminate($request, $response) // Функция, которая вызывается после того как был отправлен ответ пользователю
    {
        if (env('API_DATALOGGER', true)) { // Если в файле .env прописана опция API_DATALOGGER и она установлена в положение true
            if (env('API_DATALOGGER_DB', true)) { // Если в файле .env прописана опция API_DATALOGGER_DB и она установлена в положение true
                $end_time = microtime(true);
                $log = new Log;
                $log->time = date('Y-m-d H:i:s');
                $log->duration = number_format($end_time - $this->start_time, 3);
                $log->path = $request->path();
                $log->method = $request->method();
                $log->ip = $request->ip();
                $log->input = json_encode($request->all());
                $log->save(); // Сохраняем в базу данных
            } else {
                // Если сохранять в базу данных не нужно, то сохраняем в файл
            }
        }
    }
}
//
