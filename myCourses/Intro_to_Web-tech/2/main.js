// 1) Создаем функцию "greeting", которая принимает в качестве параметра имя человека и выводит приветствие в консоль.
function greeting(name) {
    console.log("Hello, " + name + "!");
}

// 2) Запрашиваем у пользователя его имя и вызываем функцию "greeting", передав туда полученное значение.
var userName = prompt("Please, enter your name:");
greeting(userName);
