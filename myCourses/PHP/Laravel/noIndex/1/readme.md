# Продвинутое программирование на PHP — Laravel
## Домашняя работа №11

---

Цели практической работы

Научиться:

— интегрировать регистрацию и аутентификацию пользователей; \
— разрабатывать механизмы авторизации действий пользователей системы; \
— проектировать ролевую модель системы.


Что нужно сделать:

В этой практической работе вы реализуете проект, в котором будут использованы механизмы авторизации и аутентификации пользователей.

### 1. Создайте новый проект Laravel или откройте уже существующий.

---

![new project](storage/app/private/img/1_0.png "new project")

---

### 2. Создайте новую ветку вашего репозитория от корневой (main или master).

---
![HW11](storage/app/private/img/2_0.png "HW11")
![HW11](storage/app/private/img/2_1.png "HW11")
![HW11](storage/app/private/img/2_2.png "HW11")

---

### 3. Установите библиотеку Laravel Breeze composer require laravel/breeze.

---

![Laravel Breeze](storage/app/private/img/3_0.png "Laravel Breeze")

---

### 4. Установите файлы библиотеки php artisan breeze:install.

---

![php artisan breeze:install](storage/app/private/img/4_0.png "php artisan breeze:install")
![php artisan breeze:install](storage/app/private/img/4_1.png "php artisan breeze:install")
![php artisan breeze:install](storage/app/private/img/4_2.png "php artisan breeze:install")
![php artisan breeze:install](storage/app/private/img/4_3.png "php artisan breeze:install")
![php artisan breeze:install](storage/app/private/img/4_4.png "php artisan breeze:install")
![php artisan breeze:install](storage/app/private/img/4_5.png "php artisan breeze:install")
![php artisan breeze:install](storage/app/private/img/4_6.png "php artisan breeze:install")
![php artisan breeze:install](storage/app/private/img/4_7.png "php artisan breeze:install")

---

### 5. Соберите фронтенд проекта с помощью команд npm install && npm run dev.

---

![Сборка фронтенд проекта](storage/app/private/img/5_0.png "Сборка фронтенд проекта")

---

### 6. Перейдите на ваш сайт и проверьте работу механизмов регистрации и аутентификации.

---

![registering](storage/app/private/img/6_0.png "registering")
![registering](storage/app/private/img/6_1.png "registering")
![registering](storage/app/private/img/6_2.png "registering")
![registering](storage/app/private/img/6_3.png "registering")

---

### 7. Создайте контроллер UsersController командой php artisan make:controller UsersController.

---

![контроллер UsersController](storage/app/private/img/7_0.png "контроллер UsersController")

---

### 8. Создайте в классе UsersController функцию index, которая вернёт список всех пользователей системы.

---

![index контроллера UsersController](storage/app/private/img/8_0.png "index контроллера UsersController")

---

### 9. Напишите маршрут ‘/users’ в файле web.php.

---

![маршрут /users](storage/app/private/img/9_0.png "маршрут /users")
![маршрут /users](storage/app/private/img/9_1.png "маршрут /users")

---

### 10. Создайте миграцию, которая добавит поле is_admin типа boolean в таблицу users.

---

![миграция](storage/app/private/img/10_0.png "миграция")
![миграция](storage/app/private/img/10_1.png "миграция")

---

### 11. Создайте политику php artisan make:policy UserPolicy --model=User и напишите функцию.

```
public function viewAny(User $user)
{
return $user->is_admin;
}
```

---

![php artisan make:policy UserPolicy](storage/app/private/img/11_0.png "php artisan make:policy UserPolicy")

---

### 12. Зарегистрируйте политику в классе AuthServiceProvider.

```
protected $policies = [
User::class => UserPolicy::class,
];
```

---

![регистрация политики](storage/app/private/img/12_0.png "регистрация политики")
![регистрация политики](storage/app/private/img/12_1.png "регистрация политики")

---

### 13. Используйте авторизацию действий пользователя внутри контроллера UsersController в функции index.

```
    $this->authorize('view-any', User::class);
```    

---

![авторизация действий внутри контроллера](storage/app/private/img/13_0.png "авторизация действий внутри контроллера")
![авторизация действий внутри контроллера](storage/app/private/img/13_1.png "авторизация действий внутри контроллера")

---

### 14. Создайте двух пользователей, дайте одному из них роль администратора и попробуйте перейти на маршрут ‘/users’ вашего проекта сначала за неаутентифицированного пользователя, а далее за обычного пользователя и администратора системы.

---

![проверка](storage/app/private/img/14_0.png "проверка")
![проверка](storage/app/private/img/14_1.png "проверка")
![проверка](storage/app/private/img/14_2.png "проверка")
![проверка](storage/app/private/img/14_3.png "проверка")
![проверка](storage/app/private/img/14_4.png "проверка")
![проверка](storage/app/private/img/14_5.png "проверка")
![проверка](storage/app/private/img/14_6.png "проверка")
![проверка](storage/app/private/img/14_7.png "проверка")
![проверка](storage/app/private/img/14_8.png "проверка")

---
