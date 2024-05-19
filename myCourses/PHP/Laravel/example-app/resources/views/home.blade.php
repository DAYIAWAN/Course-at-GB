@extends('layouts.default')

@section('content')
    <h1>Добро пожаловать, {{ $name }}!</h1>
    @if ($age > 18)
        <p>Ваш возраст: {{ $age }}</p>
    @else
        <p>Указанный человек слишком молод.</p>
    @endif
    <p>Позиция: {{ $position }}</p>
    <p>Адрес: {{ $address }}</p>
@endsection
