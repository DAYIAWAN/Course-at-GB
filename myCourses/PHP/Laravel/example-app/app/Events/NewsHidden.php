<?php

namespace App\Events;

use App\Models\News;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewsHidden
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $news;

    /**
     * Create a new event instance.
     *
     * @param  News  $news
     * @return void
     */
    public function __construct(News $news)
    {
        $this->news = $news;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
