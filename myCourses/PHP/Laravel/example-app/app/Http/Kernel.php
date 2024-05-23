<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $middleware = [
        // \App\Http\Middleware\TrustHosts::class,
        \App\Http\Middleware\TrustProxies::class,
        \Illuminate\Http\Middleware\HandleCors::class,
        \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
        \App\Http\Middleware\DataLogger::class,
    ];

    protected $middlewareGroups = [
        'web' => [
            // Здесь перечисляются middleware для web-группы
        ],

        'api' => [
            // Здесь перечисляются middleware для api-группы
        ],
    ];

    protected $routeMiddleware = [
        // Здесь перечисляются ваши route middleware
    ];
}
