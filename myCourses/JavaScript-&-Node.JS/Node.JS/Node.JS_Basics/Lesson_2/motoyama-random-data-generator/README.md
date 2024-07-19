# Random Data Generator (Russian)

- Библиотека для генерации случайных данных, таких как: имена, адреса, даты, числа и т.д. Это может быть полезно для тестирования или создания заглушек данных.

## Installation

```bash
npm install motoyama-random-data-generator-ru
```

## Usage

```javascript
const { 
  generateRandomName, 
  generateRandomSurname, 
  generateRandomAddress, 
  generateRandomCity, 
  generateRandomPostalCode, 
  generateRandomPhoneNumber, 
  generateRandomDate, 
  generateRandomNumber 
} = require('random-data-generator-ru');

console.log(generateRandomName()); // Пример: "Алексей"
console.log(generateRandomSurname()); // Пример: "Ивановских"
console.log(generateRandomAddress()); // Пример: "ул. Ленина, 1"
console.log(generateRandomCity()); // Пример: "Москва"
console.log(generateRandomPostalCode()); // Пример: "101000"
console.log(generateRandomPhoneNumber()); // Пример: "+7-495-123-4567"
console.log(generateRandomDate()); // Пример: "2005-08-17T07:21:00.000Z"
console.log(generateRandomNumber(10, 50)); // Пример: 40
```

## Functions

```javascript
generateRandomName()
Returns a random name from a predefined list of Russian names.

generateRandomSurname()
Returns a random surname from a predefined list of Russian surnames.

generateRandomAddress()
Returns a random address from a predefined list of Russian addresses.

generateRandomCity()
Returns a random city from a predefined list of Russian cities.

generateRandomPostalCode()
Returns a random postal code from a predefined list of Russian postal codes.

generateRandomPhoneNumber()
Returns a random phone number from a predefined list of Russian phone numbers.

generateRandomDate(start, end)
Returns a random date between the start and end dates. Defaults to dates between January 1, 2000, and now.

generateRandomNumber(min, max)
Returns a random number between min and max. Defaults to numbers between 0 and 100.
```