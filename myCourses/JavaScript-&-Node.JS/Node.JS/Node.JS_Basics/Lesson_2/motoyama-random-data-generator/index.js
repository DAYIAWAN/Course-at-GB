const names = ['Алексей', 'Борис', 'Владимир', 'Дарья', 'Екатерина', 'Елизавета'];
const surnames = ['Ивановских', 'Петровских', 'Сидоровских', 'Смирновских', 'Кузнецовских', 'Насенковских'];
const addresses = ['ул. Ленина, 1', 'ул. Пушкина, 2', 'ул. Садовая, 3', 'ул. Тверская, 4', 'ул. Невская, 5'];
const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];
const postalCodes = ['101000', '190000', '630000', '620000', '420000'];
const phoneNumbers = ['+7-495-123-4567', '+7-812-123-4567', '+7-085-123-4567', '+7-095-123-4567', '+7-000-123-4567'];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomName() {
    return getRandomElement(names);
}

function generateRandomSurname() {
    return getRandomElement(surnames);
}

function generateRandomAddress() {
    return getRandomElement(addresses);
}

function generateRandomCity() {
    return getRandomElement(cities);
}

function generateRandomPostalCode() {
    return getRandomElement(postalCodes);
}

function generateRandomPhoneNumber() {
    return getRandomElement(phoneNumbers);
}

function generateRandomDate(start = new Date(2000, 0, 1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    generateRandomName,
    generateRandomSurname,
    generateRandomAddress,
    generateRandomCity,
    generateRandomPostalCode,
    generateRandomPhoneNumber,
    generateRandomDate,
    generateRandomNumber
};
