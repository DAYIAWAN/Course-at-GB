@extends('layouts.app')
@section('head')
    <link href="{{ asset('/themes/mytravel/dist/frontend/module/car/css/car.css?_ver='.config('app.version')) }}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset("/themes/mytravel/libs/ion_rangeslider/css/ion.rangeSlider.min.css") }}"/>
@endsection
@section('content')
    <div class="bravo_search_car">
        <div class="container">
            @include('Car::frontend.layouts.search.list-item')
        </div>
    </div>
@endsection

@section('footer')
    <script type="text/javascript" src="{{ asset("/themes/mytravel/libs/ion_rangeslider/js/ion.rangeSlider.min.js") }}"></script>
    <script type="text/javascript" src="{{ asset('/themes/mytravel/module/car/js/car.js?_ver='.config('app.version')) }}"></script>
@endsection
