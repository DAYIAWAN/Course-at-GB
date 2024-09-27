"use strict";

/*
1. Необходимо вывести в консоль массив продуктов, в котором есть хотя бы одна фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести в консоль отсортированный массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

console.log("-------------------4.js-------------------");
const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];

const photoArray = products.filter(
    (element) => element.photos != undefined && element.photos != ""
);
console.log(photoArray);

products.sort((a, b) => a.price - b.price);
console.log(products);
