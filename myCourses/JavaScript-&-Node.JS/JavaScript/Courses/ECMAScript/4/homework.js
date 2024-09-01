"use strict";

console.log("---------------- Task 01 ----------------");
/* Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.*/

async function getUserData(userId) {
    let response = null;
    try {
        response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (response.status !== 200) {
            throw Error(response.status);
        }
        return await response.json();
    } catch (err) {
        throw Error(`User with ID: ${userId} not found`);
    }
}

async function main() {
    const userId = 1; // Заменить на нужный ID
    try {
        const result = await getUserData(userId);
        console.log(`Successfully fetched user data: `, result);
    } catch (err) {
        console.error(`Failed to fetch user data: ${err.message}`);
    }
}

main();

console.log("---------------- Task 02 ----------------");
/* Реализуйте функцию saveUserData, которая принимает объект с данными о
пользователе в качестве аргумента и использует fetch для отправки этих данных
на удаленный сервер для сохранения. Функция должна возвращать промис,
который разрешается, если данные успешно отправлены, или отклоняется в случае
ошибки. */

const user = {
    name: "John Smith",
    age: 30,
    email: "john@example.com",
};

async function saveUserData(user) {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => {
            console.log("User data saved successfully");
            response.json();
        })

        .catch((error) => {
            console.log(error.message);
        });
}

saveUserData(user);

console.log("---------------- Task 03 ----------------");

/* Напишите функцию changeStyleDelayed, которая принимает идентификатор
элемента и время задержки (в миллисекундах) в качестве аргументов. Функция
должна изменить стиль элемента через указанное время.
Подсказка
// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет
стиль элемента с id 'myElement' */

function changeStyleDelayed(element, time, color = "green") {
    const myElement = document.getElementById(element);
    setTimeout(() => changeStyle(myElement, color), time);
}

function changeStyle(element, color) {
    element.style.backgroundColor = color;
}

changeStyleDelayed("myElement", 2000);
