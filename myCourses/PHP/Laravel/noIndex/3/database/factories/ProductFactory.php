<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'sku' => $this->faker->unique()->ean8(),
            'name' => $this->faker->words(rand(1, 3), true),
            'price' => $this->faker->numberBetween(1000, 999999)

        ];
    }
}
