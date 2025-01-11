# Продвинутое программирование на PHP — Laravel
## Домашняя работа №12

---

Цели практической работы:

Научиться:

— интегрировать отправку писем через почтовый клиент;
— настраивать отправку сообщений в мессенджер.

Что нужно сделать:

В этой практической работе вы реализуете уведомления через внешние сервисы.

### 1. Создайте новый проект Laravel или откройте уже существующий.

---

![new project](storage/app/private/img/1_0.png "new project")

---

### 2. Создайте новую ветку вашего репозитория от корневой (main или master).

---

![new branch](storage/app/private/img/2_0.png "new branch")
![new branch](storage/app/private/img/2_1.png "new branch")

---

### 3. Настройте регистрацию и аутентификацию пользователей.

---

![registration & autentification](storage/app/private/img/3_0.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_1.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_2.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_3.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_4.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_5.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_6.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_7.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_8.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_9.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_10.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_11.png "registration & autentification")
![registration & autentification](storage/app/private/img/3_12.png "registration & autentification")

---

### 4. Настройте почтовый клиент любого сервиса.

---

![postoffice client](storage/app/private/img/4_0.png "postoffice client")
![postoffice client](storage/app/private/img/4_1.png "postoffice client")

---

### 5. Впишите в файл .env нужные значения для почтового сервиса.

---

![.env](storage/app/private/img/5_0.png ".env")

---

### 6. Создайте письмо Welcome.php командой php artisan make:mail Welcome.

---

![Welcome.php](storage/app/private/img/6_0.png "Welcome.php")

---

### 7. В конструкторе класса присвойте свойству класса $user параметр конструктора класса.

```
public User $user;
public function __construct(User $user)
{
    $this->user = $user;
}
```

---

![constructor Welcome](storage/app/private/img/7_0.png "constructor Welcome")

---

### 8. Создайте шаблон мейлинга welcome.blade.php в директории resources/views/emails с кодом внутри

Добрый день, $user->name, спасибо за регистрацию.

---

![шаблон мейлинга welcome.blade.php](storage/app/private/img/8_0.png "шаблон мейлинга welcome.blade.php")

---

### 9. Добавьте код отправки вашего письма в функцию store класса RegisteredUserController.

---

![store класса RegisteredUserController](storage/app/private/img/9_0.png "store класса RegisteredUserController")

---

### 10. Подключите клиент мессенджера Telegram командой composer require irazasyed/telegram-bot-sdk

---

![клиент мессенджера Telegram](storage/app/private/img/10_0.png "клиент мессенджера Telegram")
![клиент мессенджера Telegram](storage/app/private/img/10_1.png "клиент мессенджера Telegram")

---

### 11. Создайте бота и канал, добавьте бота в телеграм-канал.

---

![бот](storage/app/private/img/11_0.png "бот")
![бот](storage/app/private/img/11_1.png "бот")

---

### 12. Укажите в файле .env значения, необходимые для работы бота.

---

![.env](storage/app/private/img/12_0.png ".env")
![.env](storage/app/private/img/12_1.png ".env")
![.env](storage/app/private/img/12_2.png ".env")

---

### 13. Проверьте работу бота с помощью тестового маршрута.

```
Route::get('test-telegram', function () {
    Telegram::sendMessage([
        'chat_id' => env('TELEGRAM_CHANNEL_ID', ''),
        'parse_mode' => 'html',
        'text' => 'Произошло тестовое событие'
    ]);
    return response()->json([
        'status' => 'success'
    ]);
});

```

---

![проверка работы бота](storage/app/private/img/13_0.png "проверка работы бота")
![проверка работы бота](storage/app/private/img/13_1.png "проверка работы бота")
![проверка работы бота](storage/app/private/img/13_2.png "проверка работы бота")

---

### 14. Добавьте код уведомления в мессенджер о новом пользователе вашей системы в функцию store класса RegisteredUserController.

---

![store класса RegisteredUserController](storage/app/private/img/14_0.png "store класса RegisteredUserController")

---

### 15. Зарегистрируйтесь на сайте.

---

![регистрация на сайте](storage/app/private/img/15_0.png "регистрация на сайте")
![регистрация на сайте](storage/app/private/img/15_1.png "регистрация на сайте")
![регистрация на сайте](storage/app/private/img/15_2.png "регистрация на сайте")

---

### 16. Проверьте, что сообщение отправлено на электронную почту (рекомендуется использовать для регистрации тот почтовый ящик, с которого отправляется сообщение, чтобы избежать блокировки адреса за спам).

---

![письмо на почту](storage/app/private/img/16_0.png "письмо на почту")

---

### 17. Проверьте, что в Telegram пришло уведомление о регистрации нового пользователя.

---

![сообщение в телеграм](storage/app/private/img/17_0.png "сообщение в телеграм")

---
