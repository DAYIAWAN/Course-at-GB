"use strict";

/*
Дан объект numbers.
Необходимо вывести в консоль все значения объекта, которые больше или равны 3.
*/

console.log("-------------------1.js-------------------");
const numbers = {
    key1: 12,
    key2: 2,
    key3: 4,
    key4: 1,
    key5: -244,
    key6: 0,
    key7: 7,
};

for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(key, numbers[key]);
    }
}
