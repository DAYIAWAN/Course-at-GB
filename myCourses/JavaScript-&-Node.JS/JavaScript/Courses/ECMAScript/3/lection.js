"use strict";

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

// Листинг 4.
// Обращение к свойствам объекта.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Samba.isUVLampOn = true;
Samba.switchUVLamp();
// I am the method of DancingSeries
// 'UV lamp is not working.'
Samba.goCharge();
// I am the method of VacuumCleaner
// 'I am going to charge...'

// Листинг 5.
// Объект робот-пылесос.
const Djaiv = {
    // Обновляем свойства под конкретную модель.
    model: "Djaiv-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Переопределим метод startCleaning.
    startCleaning: function () {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log("I am the method of Djaiv");
        console.log(
            "I am Djaiv, and I am cleaning... I have been started: ",
            this.counterOfStarts,
            "times."
        );
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: DancingSeries,
};

// Листинг 6.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Объект Samba смотри в листинге 3.
// Объект Djaiv смотри в листинге 5.
// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Djaiv.startCleaning();
// I am the method of Djaiv
// I am Djaiv, and I am cleaning... I have been started: 1 times.

// Листинг 9.
// Получим прототип для объекта Djaiv.
const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series
const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); //vacuum cleaner
const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto); // [object Object]

// Листинг 10.
// Объект робот-пылесос.
const MusicSeries = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод.
    startWipe: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log("I am the method of MusicSeries");
        console.log("I am starting to wipe the floor...");
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};

// Листинг 11.
// Объект робот-пылесос.
const Blues = {
    // Обновляем свойства под конкретную модель.
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};
// Установим прототип для робота.
Object.setPrototypeOf(Blues, MusicSeries);

// Листинг 12.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Объект Djaiv смотри в листинге 5.
// Объявление MusicSeries смотри в листинге 10.
// Объект Blues смотри в листинге 11.
if (Object.getPrototypeOf(Djaiv).model === "dancing series") {
    Djaiv.startCleaning(); //
}
if (Object.getPrototypeOf(Blues).model === "music series") {
    Blues.startWipe(); //
}
// Если мы не будем проверять прототип и просто вызовем метод чужого прототипа мы, естественно, получим ошибку.
// Djaiv.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function

// Листинг 13.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос.
function SambaListing13(serialNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serialNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
    // Делаем ссылку на прототип от родителя.
    this.__proto__ = DancingSeries;
}
// Создадим экземпляр нового объекта.
const Samba1 = new SambaListing13(1014778);
console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning()); // I am the method of VacuumCleaner;
// I am cleaning... I have been started: 1 times.

// Листинг 14.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос Samba смотри в листинге 13.
// Создадим 10 роботов пылесосов Samba, как на конвейере.
const robots = [];
for (let index = 0; index < 10; index++) {
    // Создадим экземпляр нового объекта и добавляем его в массив наших роботов, каждый с уникальным серийным номером.
    robots.push(new SambaListing13(index));
}
console.log(robots[3].serialNumber); // 3
console.log(robots[7].serialNumber); // 7

// Листинг 15.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос.
function SambaListing15(serialNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serialNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
}
// Делаем ссылку на прототип от родителя.
SambaListing15.prototype = DancingSeries;

// Создадим экземпляр нового объекта.
const Samba1Listing15 = new SambaListing15(1014778);
console.log(Samba1Listing15.serialNumber); // 1014778
console.log(Samba1Listing15.startCleaning()); // I am the method of VacuumCleaner;
// I am cleaning... I have been started: 1 times.

// Листинг 16.

// Наша реализация оператора new через функцию createObject.
function createObject(constructor) {
    // Создаем новый объект.
    const obj = {};
    // Установим новому объекту прототипом прототип функции-конструктора
    Object.setPrototypeOf(obj, constructor.prototype);
    // Вызовем функцию-конструктор, передав ей как this созданный на шаге 1 объект, и передадим остальные аргументы, если они были переданы в createObject
    const argsArray = Array.prototype.slice.apply(arguments);
    const result = constructor.apply(obj, argsArray.slice(1));
    // Вернем новый объект, если конструктор вернул примитивное значение или undefined, иначе вернем то, что вернул конструктор.
    if (
        !result ||
        typeof result === "string" ||
        typeof result === "number" ||
        typeof result === "boolean"
    ) {
        return obj;
    } else {
        return result;
    }
}
// Создадим экземпляр нового объекта.
const Samba1Listing16 = createObject(Samba, 1014778);
// Проверим установку свойств в конструкторе.
console.log(Samba1Listing16.serialNumber); // 1014778
// Проверим, что прототип установился корректно, и мы можем вызывать методы из родительских объектов.
console.log(Samba1Listing16.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
console.log(Samba1Listing16.startCleaning()); // I am the method of VacuumCleaner
// I am cleaning... I have been started: 1 times.
// Проверим присвоение конструктора.
console.log(Samba1Listing16.constructor); // function Object() { [native code] }

// Конструктор объекта робот-пылесос.
function RoombaListing16(serailNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
}
// Делаем ссылку на прототип от родителя.
Samba.prototype = DancingSeries;
// Создадим экземпляр нового объекта.
const SomethingListing16 = new RoombaListing16(1014778);
// Посмотрим на свойства __proto__ и prototype
console.log(SomethingListing16.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
console.log(SomethingListing16.prototype); // undefined
console.log(SomethingListing16.__proto__ === Samba.prototype); // true
