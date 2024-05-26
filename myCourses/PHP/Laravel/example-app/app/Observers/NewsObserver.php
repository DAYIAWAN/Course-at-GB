<?php

namespace App\Observers;

use App\Models\News;
use Illuminate\Support\Str;

class NewsObserver
{
    /**
     * Handle the News "creating" event.
     */
    public function creating(News $news): void
    {
        $news->slug = Str::slug($news->title);
    }

    /**
     * Handle the News "created" event.
     */
    public function created(News $news): void
    {
        //
    }

    /**
     * Handle the News "updated" event.
     */
    public function updated(News $news): void
    {
        //
    }

    /**
     * Handle the News "deleted" event.
     */
    public function deleted(News $news): void
    {
        //
    }

    /**
     * Handle the News "restored" event.
     */
    public function restored(News $news): void
    {
        //
    }

    /**
     * Handle the News "force deleted" event.
     */
    public function forceDeleted(News $news): void
    {
        //
    }
}
