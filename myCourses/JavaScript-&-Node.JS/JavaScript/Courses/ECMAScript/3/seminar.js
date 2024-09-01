"use strict";

// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

function getPrototypeChain(obj) {
    const probe = [];
    let currentObject = obj;
    while (currentObject !== null) {
        probe.push(currentObject);
        currentObject = Object.getPrototypeOf(currentObject);
    }
    return probe;
}

// Листинг 1.
// Объект робот-пылесос.
const VacuumCleaner = {
    model: "vacuum cleaner",
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    startCleaning: function () {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log("I am the method of VacuumCleaner");
        console.log(
            "I am cleaning... I have been started: ",
            this.counterOfStarts,
            "times."
        );
    },
    goCharge: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log("I am the method of VacuumCleaner");
        console.log("I am going to charge...");
        3;
    },
};

// Листинг 2.
// Объявление родительского объекта смотри в листинге 1.
// Объект робот-пылесос.
const DancingSeries = {
    // Объявляем новые свойства и переопределить свойство model.
    model: "dancing series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    isUVLampOn: false,
    // Добавляем новый метод.
    switchUVLamp: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log("I am the method of DancingSeries");
        this.isUVLampOn = !this.isUVLampOn;
        console.log(
            `UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`
        );
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};

// Листинг 3.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Объект робот-пылесос.
const Samba = {
    // Обновляем свойства под конкретную модель.
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Делаем ссылку на прототип от родителя.
    __proto__: DancingSeries,
};

console.log(Samba.model); // "Samba-1"

console.log(getPrototypeChain(Samba));

// Задание 2 (20минут)
// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Метод класса.
    introduce() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

// Задание 3 (call, apply 20 минут)
// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму, если на счету есть достаточно средств.
// Если средств недостаточно, выводится сообщение "Недостаточно
// средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета.
// Задание 3 (Пример )
// const account1 = new BankAccount("1234567890", 1000);
// console.log(account1.getBalance()); // Вывод: 1000
// account1.deposit(500);
// console.log(account1.getBalance()); // Вывод: 1500
// account1.withdraw(200);
// console.log(account1.getBalance()); // Вывод: 1300
// account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(
            `Баланс счета ${this.accountNumber} увеличен на ${amount} и составляет ${this.balance}`
        );
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостаточно средств на счете.");
        } else {
            console.log(
                `Баланс счета ${this.accountNumber} уменьшен на ${amount} и составляет ${this.balance}`
            );
        }
    }
    getBalance() {
        return `На счете ${this.accountNumber} средств: ${this.balance}`;
    }
}

const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} как бэ ЗВУК в консоль`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`${this.breed} ${this.name} принесла мяч.`);
    }
}

const someDog = new Dog("Баскервиль", "Собака");

someDog.speak();
someDog.fetch();

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
