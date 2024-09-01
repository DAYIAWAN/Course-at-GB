"use strict";

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/

// Массив списка названий чисел (трипплетов)
// Есть возможность закомментировать значения снизу вверх,
// или дополнить список — расскомментировать "миллиардов"
// и дописать "триллионов"
const numArray = [
    "единиц",
    "десятков",
    "сотен",
    "тысяч",
    "миллионов",
    // "миллиардов",
];

const myNumber = parseInt(inputCycle("Введите число"));
// Следующая строка — для проверки больших чисел
// const myNumber = 1_234_567_890_123;

if (myNumber < 1) {
    console.log("Число меньше единицы");
} else {
    console.log(namedNumbers(myNumber, numArray));
}

function namedNumbers(myNumber, numArray) {
    // Первые три позиции массива numArray, если есть
    const FIRSTSIGNS = 3;

    let firstArrayLenght =
        numArray.length >= FIRSTSIGNS ? FIRSTSIGNS : numArray.length;

    // Срез в новый массив из numArray от его начала: 3 элемента,
    // или столько, сколько есть, если их менее 3
    const firstSignsArray = numArray.slice(0, firstArrayLenght);

    // Срез в другой новый массив элементов numArray,
    // не вошедших в первый
    const namedBigSigns = numArray.slice(firstArrayLenght, numArray.length);

    // Здесь будет компоноваться строка вывода
    let myStringArray = [];

    // Число знаков, которые могут быть именованы из массива numArray
    const maxSigns = namedBigSigns.length * 3 + firstSignsArray.length;

    // Разделитель для получения фразы вида "тысяч : "
    const splitter = ": ";

    // Количество знаков во введенном числе
    const signsOfMyNumber = parseInt(Math.log10(myNumber)) + 1;

    // У кого тоньше. Количество итераций цикла:
    // если мы можем поименовать больше разрядов числа,
    // чем в нем есть — именуем столько разрядов, сколько есть в числе,
    // в противном случае — все разряды, на которые расчитан массив
    // numArray (так, если последний его значащий элемент — "тысяч", —
    // будет именовано шесть разрядов, включая фразу "сотен тысяч")
    const currentMin = Math.min(maxSigns, signsOfMyNumber);

    // Копия числа, чтобы резать последний знак
    let shiftNumber = myNumber;

    // Его же копия — в строку
    let stringShiftNumber = String(shiftNumber);

    // Счетчик следующего триплета: "тысяч", "миллионов", …
    let counter = 0;

    for (let index = 0; index < currentMin; index++) {
        // Именование трех младших знаков числа
        if (index < FIRSTSIGNS) {
            myStringArray[index] =
                numArray[index] +
                splitter +
                stringShiftNumber[stringShiftNumber.length - index - 1];
        }
        // Именование старших знаков числа (от "тысяч" и далее)
        if (index >= FIRSTSIGNS) {
            const myTriplet = index % FIRSTSIGNS;
            // Дополнение для старших знаков числа
            // ("единиц чего-то", "десятков чего-то", "сотен чего-то",)
            let smallSign = firstSignsArray[myTriplet] + " ";
            // Запрет использования фразы "единиц чего-то".
            // Во выводную фразу пойдут только "десятков чего-то"
            // и "сотен чего-то"
            // Выбор следующего триплета
            if (myTriplet === 0) {
                smallSign = "";
                counter++;
            }
            myStringArray[index] =
                smallSign +
                namedBigSigns[counter - 1] +
                splitter +
                stringShiftNumber[stringShiftNumber.length - index - 1];
        }
    }
    // Разворот полученного выше массива именнованых знаков числа,
    // добавление разделителя ", ", и головной части строки
    return `В числе ${myNumber} количество ${myStringArray
        .reverse()
        .join(", ")}`;
}

function inputNumber(text) {
    return prompt(text, "").replace(",", ".");
}

function inputCycle(text) {
    while (true) {
        let num = inputNumber(text);
        if (!isNaN(num)) {
            // …превратить в числа.
            return +num;
        }
        console.log("Введено не число. Попробуйте еще раз.");
    }
}
