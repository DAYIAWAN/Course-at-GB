"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых значение равно 3.
Пример: если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

console.log("-------------------------------------");
console.log("Результат 3.js");

const arrRandom = [];

for (let index = 0; index < 5; index++) {
    arrRandom[index] = randomNumber(0, 9);
}
console.log(arrRandom);
console.log(
    `Сумма элементов массива ${arrRandom.reduce(
        (partialSum, a) => partialSum + a,
        0
    )}`
);
console.log(`Минимальное значение в массиве ${Math.min(...arrRandom)}`);
const newArr = [];
for (let index = 0; index < arrRandom.length; index++) {
    if (arrRandom[index] === 3) {
        newArr.push(index);
    }
}
console.log(`Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3. 
${newArr}`);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
