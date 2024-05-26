<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\News; // Не забудьте импортировать этот класс
use App\Observers\NewsObserver; // Не забудьте импортировать этот класс

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        News::observe(NewsObserver::class);
    }
}
