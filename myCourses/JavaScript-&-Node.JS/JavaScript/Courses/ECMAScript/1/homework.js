// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора найти минимальное число в массиве (решение должно состоять из одной строки).
// 2) Напишите функцию createCounter, которая создаёт счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счётчика на 1, а метод decrement должен уменьшать значение счётчика на 1. Значение счётчика должно быть доступно только через методы объекта, а не напрямую.
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример:
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

console.log("--------- 1 ---------");

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

console.log("--------- 2 ---------");
const createCounter = (initialValue) => {
    let value = initialValue;
    return {
        increment() {
            ++value;
        },
        decrement() {
            --value;
        },
        getValue() {
            return value;
        },
    };
};

const counter = createCounter(10);
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());

console.log("--------- 3 ---------");
function findElementByClass(element, className) {
    if (element.classList.contains(className)) {
        return element;
    } else {
        for (let child of element.children) {
            const result = findElementByClass(child, className);
            if (result) {
                return result;
            }
        }
    }
    return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
