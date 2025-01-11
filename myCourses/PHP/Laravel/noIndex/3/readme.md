# Продвинутое программирование на PHP — Laravel
## Домашняя работа №13

---

Цели практической работы

Научиться:

— создавать класс-фабрику и класс-наполнитель и использовать их; \
— создавать контроллер и тестировать его с помощью Postman; \
— писать feature-тесты для проверки работы методов контроллера.

Что нужно сделать:

В этой практической работе вы реализуете уведомления через внешние сервисы.

### 1. Создайте новый проект Laravel или откройте уже существующий.

---

![new project](storage/app/private/img/1_0.png "new project")

---

### 2. Создайте новую ветку вашего репозитория от корневой (main или master).

---

![git](storage/app/private/img/2_0.png "git")
![git](storage/app/private/img/2_1.png "git")

---

### 3. Создайте сущность Product (модель, миграцию и контроллер) командой php artisan make:model Product -mc.

---

![Product](storage/app/private/img/3_0.png "Product")

---

### 4. Опишите миграцию для таблицы products c типами полей:

```
$table->string('sku');
$table->string('name');
$table->decimal('price', 9, 3);
```

---

![Migration prepare](storage/app/private/img/4_0.png "Migration prepare")

---

### 5. Выполните миграцию командой php artisan migrate.

---

![Migration](storage/app/private/img/5_0.png "Migration")

---

### 6. Добавьте в файл api.php маршруты:

``
Route::apiResource('products', \App\Http\Controllers\ProductController::class);
``

---

![routes in api.php](storage/app/private/img/6_0.png "routes in api.php")
![routes in api.php](storage/app/private/img/6_1.png "routes in api.php")
![routes in api.php](storage/app/private/img/6_2.png "routes in api.php")

---

### 7. Создайте класс-фабрику для сущности Product c помощью команды php artisan make:factory ProductFactory.

---

![php artisan make:factory ProductFactory](storage/app/private/img/7_0.png "php artisan make:factory ProductFactory")

---

### 8. Создайте класс-наполнитель для сущности Product c помощью команды php artisan make:seeder ProductsSeeder.

---

![php artisan make:seeder ProductsSeeder](storage/app/private/img/8_0.png "php artisan make:seeder ProductsSeeder")

---

### 9. Выполните команду php artisan migrate –-seed для наполнения базы данных сгенерированными данными.

---

![php artisan migrate –-seed](storage/app/private/img/9_0.png "php artisan migrate –-seed")
![php artisan migrate –-seed](storage/app/private/img/9_1.png "php artisan migrate –-seed")

---

### 10. В классе ProductController реализуйте методы index, show, store, update, destroy.

---

![методы ProductController](storage/app/private/img/10_0.png "методы ProductController")

---

### 11. Протестируйте каждый из маршрутов контроллера ProductController с помощью Postman и приложите скриншоты ответа на запросы в папку postman-screenshots (названия файлов должны соответствовать формату index.jpeg, show.jpeg, store.jpeg, update.jpeg, destroy.jpeg для каждого метода, соответственно).

---

![тестирование Postman-ом](storage/app/private/img/11_0.png "тестирование Postman-ом")
![тестирование Postman-ом](storage/app/private/img/11_index_0.png "тестирование Postman-ом")
![тестирование Postman-ом](storage/app/private/img/11_index_1.png "тестирование Postman-ом")
![тестирование Postman-ом](storage/app/private/img/11_show_0.png "тестирование Postman-ом")
![тестирование Postman-ом](storage/app/private/img/11_delete_0.png "тестирование Postman-ом")
![тестирование Postman-ом](storage/app/private/img/11_delete_1.png "тестирование Postman-ом")
![тестирование Postman-ом](storage/app/private/img/11_store_0.png "тестирование Postman-ом")
![тестирование Postman-ом](storage/app/private/img/11_store_1.png "тестирование Postman-ом")

---

### 12. Создайте тест c помощью команды php artisan make:test Products/ProductTest.

---

![ProductTest](storage/app/private/img/12_0.png "ProductTest")

---

### 13. Опишите функции:

```
test_products_can_be_indexed,
test_product_can_be_shown,
test_product_can_be_stored,
test_product_can_be_updated,
test_product_can_be_destroyed.
```

---

![функции тестирования](storage/app/private/img/13_0.png "функции тестирования")
![функции тестирования](storage/app/private/img/13_1.png "функции тестирования")

---

### 14. Запустите выполнение тестов командой php artisan test.

---

![Результаты тестов](storage/app/private/img/14_0.png "Результаты тестов")

---
