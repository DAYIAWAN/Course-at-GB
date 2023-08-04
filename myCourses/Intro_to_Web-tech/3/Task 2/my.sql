-- Создать файл my.sql, в котором должна создаваться таблица с информацией об одногруппниках.
-- В таблице должно быть четыре поля: id, name, age, address.
-- Все поля в таблице обязательны для заполнения.
-- Необходимо добавить 5-10 одногрупп. в таблицу.
-- Необходимо написать запрос на получение имён всех одногруппников (только имён, без всего остального), которые живут в Москве и их возраст находится в диапазоне [18, 30] лет.



-- Создание таблицы
CREATE TABLE classmate (
  Id INTEGER PRIMARY KEY,
  name    TEXT NOT NULL,
  age     TEXT NOT NULL,
  address TEXT NOT NULL
);

-- Вставка данных
INSERT INTO classmate VALUES (1, 'Иван', '30', 'г. Москва, ул. Ленина 10');
INSERT INTO classmate VALUES (2, 'Пётр', '40', 'г. Владивосток, ул. Сталина 20');
INSERT INTO classmate VALUES (3, 'Хирам', '50', 'г. Владикавказ, ул. Центральная 30');
INSERT INTO classmate VALUES (4, 'Ариадна', '60', 'г. Красноярск, ул. Ежегодная 40');
INSERT INTO classmate VALUES (5, 'Эпифания', '70', 'г. Новосибирск, ул. Особая 50');



-- Выборка
SELECT name FROM classmate WHERE address like '%Москва%' and age >= 18 and age < 30;