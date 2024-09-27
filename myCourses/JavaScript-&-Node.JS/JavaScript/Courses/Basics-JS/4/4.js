"use strict";

/*
Необязательное задание.
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

console.log("-------------------------------------");
console.log("Результат 4.js");

let mySymbol = "x";
for (let index = 0; index < 20; index++) {
    console.log(`${mySymbol.padEnd(25)} ${index + 1}`);
    mySymbol += "x";
}
