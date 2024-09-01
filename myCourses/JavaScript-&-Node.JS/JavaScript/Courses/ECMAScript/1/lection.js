const arrFirst = [1, 2, 3];
const arrSecond = [4, 5, 6];

const mergeArrays = (a, b) => [...a, ...b];

const arrNew = mergeArrays(arrFirst, arrSecond);
console.log(arrNew);

const arrDouble = [1, 2, 3, 2, 4, 1, 5];

function removeDuplicates(...args) {
    return [...args].filter((item, index) => [...args].indexOf(item) === index);
}

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

const getEvenNumbers = (arr) => arr.filter((item) => item % 2 === 0);

console.log(getEvenNumbers(arrDouble));

const calculateAverage = (arr) =>
    arr.reduce((acc, number) => acc + number, 0) / arr.length;

console.log(calculateAverage(arrDouble));

const capitalizeFirstLetter = (str) =>
    str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

const myLine = "я приближался к месту моего назначения";
console.log(capitalizeFirstLetter(myLine));

const createCalculator = (initialValue) => {
    let value = initialValue;
    return {
        add(num) {
            value += num;
        },
        subtract(num) {
            value -= num;
        },
        getValue() {
            return value;
        },
    };
};

const calc = createCalculator(10);
calc.add(5);
calc.subtract(16);
console.log(calc.getValue());

const createGreetings = (name) =>
    function () {
        return `Hello ${name}`;
    };
const greeting = createGreetings("John");
console.log(greeting());

const createPasswordChecker = (symbols) =>
    function (password) {
        return password.length >= symbols ? true : false;
    };

const probe = createPasswordChecker(3);
console.log(probe("qwe"));

const sumDigit = (number) => {
    function requre(number) {}
};

function recursion(number) {
    let result = 0;
    while (number > 0) {
        result = result + (number % 10);
        number = Math.floor(number / 10);
        recursion(number);
    }
    return result;
}

console.log(recursion(54321));
