"use strict";

/*
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после выполнения метода forEach. Не нужно создавать новый массив.
*/

console.log("-------------------3.js-------------------");
const products3js = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products3js.forEach((element) => {
    element.price = element.price * 0.85;
});

console.log(products3js);
