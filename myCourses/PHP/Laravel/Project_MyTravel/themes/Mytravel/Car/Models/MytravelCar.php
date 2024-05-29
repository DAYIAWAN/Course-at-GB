<?php
namespace Themes\Mytravel\Car\Models;
class MytravelCar extends \Modules\Car\Models\Car
{
    protected $casts = [
        'faqs'  => 'array',
        'extra_price'  => 'array',
        'service_fee'  => 'array',
        'price'=>'float',
        'sale_price'=>'float',
        'specifications' => 'array',
    ];
}
