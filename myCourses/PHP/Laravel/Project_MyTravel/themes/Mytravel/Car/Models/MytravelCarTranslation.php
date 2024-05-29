<?php
namespace Themes\Mytravel\Car\Models;
class MytravelCarTranslation extends \Modules\Car\Models\CarTranslation
{
    protected $casts = [
        'faqs'  => 'array',
        'specifications' => 'array',
    ];
}
