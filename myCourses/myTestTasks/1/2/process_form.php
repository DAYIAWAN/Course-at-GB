<?php
require_once 'vendor/autoload.php';

use AmoCRM\Client\AmoCRMApiClient;
use AmoCRM\Exceptions\AmoCRMApiException;
use AmoCRM\Helpers\EntityTypesInterface;
use AmoCRM\Models\LeadModel;

// Данные для авторизации в amoCRM
$login = 'olgaglagol@rambler.ru';
$password = 'IZbpUmMp';
$domain = 'olgaglagol';

$api = new AmoCRMApiClient($login, $password, $domain);

try {
    $api->auth();
} catch (AmoCRMApiException $e) {
    die('Error: ' . $e->getMessage());
}

// Обработка данных из формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Создание лида в amoCRM
    $lead = new LeadModel();
    $lead->setName('Запрос с формы обратной связи');
    $lead->setResponsibleUserId(1); // ID ответственного пользователя в amoCRM

    // Добавление контактной информации
    $contact = $lead->createContact();
    $contact->setName($name);
    $contact->addCustomField('Email', $email);

    // Добавление сообщения в примечание к лиду
    $lead->addNote(
        'Сообщение из формы обратной связи:',
        $message,
        EntityTypesInterface::LEADS
    );

    // Сохранение лида
    try {
        $api->leads()->addOne($lead);
        $success = true;
    } catch (AmoCRMApiException $e) {
        $success = false;
    }

    echo json_encode(['success' => $success]);
} else {
    echo json_encode(['success' => false]);
}
?>