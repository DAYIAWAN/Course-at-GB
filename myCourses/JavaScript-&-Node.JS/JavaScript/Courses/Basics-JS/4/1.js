"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

console.log("Результат 1.js");

for (let index = 0; index < 11; index++) {
    if (index === 0) {
        console.log("0 – это ноль");
    } else {
        console.log(`${index} — ${index % 2 ? "нечетное" : "четное"} число`);
    }
}