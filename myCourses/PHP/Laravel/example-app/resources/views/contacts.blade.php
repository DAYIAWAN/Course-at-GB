@extends('layouts.default')

@section('content')
    <h1>Контакты</h1>
    <p>Адрес: {{ $address }}</p>
    <p>Почтовый индекс: {{ $post_code }}</p>
    @if (!empty($email))
        <p>Электронная почта: {{ $email }}</p>
    @else
        <p>Адрес электронной почты не указан.</p>
    @endif
    <p>Телефон: {{ $phone }}</p>
@endsection
