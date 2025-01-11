<?php

namespace Tests\Feature\Products;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductTest extends TestCase
{

    use RefreshDatabase; // очистка базы перед тестированием

    public function setUp(): void // Настройка тестов
    {
        parent::setUp();
        $this->artisan('db:seed'); // Наполнение базы данных перед тестами
    }

    public function test_products_can_be_indexed()
    {
        $response = $this->get('/api/products');
        $response->assertStatus(200);
    }

    public function test_product_can_be_shown()
    {
        $product = Product::factory()->create();
        $response = $this->get('/api/products/' . $product->getKey());
        $response->assertStatus(200);
    }

    public function test_product_can_be_stored()
    {
        $attributes = [
            'sku' => '987654321',
            'name' => 'Created product',
            'price' => '55555',
        ];
        $response = $this->post('/api/products', $attributes);
        $response->assertStatus(201);
        $this->assertDatabaseHas('products', $attributes);
    }

    public function test_product_can_be_updated()
    {
        $product = Product::factory()->create();
        $attributes = [
            'sku' => '917151310',
            'name' => 'Updated product',
            'price' => '76543',
        ];
        $response = $this->patch('/api/products/' . $product->getKey(), $attributes);
        $response->assertStatus(202);
        $this->assertDatabaseHas('products', array_merge(['id' => $product->getKey()], $attributes));
    }

    public function test_product_can_be_destroyed()
    {
        $product = Product::factory()->create();
        $response = $this->delete('/api/products/' . $product->getKey());
        $response->assertStatus(204);
        $this->assertDatabaseMissing('products', ['id' => $product->getKey()]);
    }

}
