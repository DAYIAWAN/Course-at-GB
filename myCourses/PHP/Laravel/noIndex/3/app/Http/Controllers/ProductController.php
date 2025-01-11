<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Product::paginate(15);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = Product::create([
            'sku' => $request->get('sku'),
            'name' => $request->get('name'),
            'price' => $request->get('price'),
        ]);
        return response()->json($product, 201);
//        return $product;
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product) {return $product;}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return response()->json($product, 202);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json([], 204);
    }
}
