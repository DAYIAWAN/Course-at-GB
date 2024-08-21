// Определение поваров и их специализаций
const chefs = {
    Viktor: "Pizza",
    Olga: "Sushi",
    Dmitry: "Desserts"
};

// Определение блюд и их поваров
const dishes = new Map([
    ["Margherita", "Viktor"],
    ["Pepperoni", "Viktor"],
    ["Philadelphia", "Olga"],
    ["California", "Olga"],
    ["Tiramisu", "Dmitry"],
    ["Cheesecake", "Dmitry"]
]);

// Определение заказов клиентов
const orders = new Map([
    [{ name: "Alexey" }, ["Pepperoni", "Tiramisu"]],
    [{ name: "Maria" }, ["California", "Margherita"]],
    [{ name: "Irina" }, ["Cheesecake"]]
]);

// Функция для получения информации о поваре по блюду
function getChefForDish(dish) {
    return dishes.get(dish);
}

// Функция для получения заказов клиентов
function getOrders() {
    return Array.from(orders.entries()).map(([client, dishes]) => ({
        client: client.name,
        dishes: dishes.map(dish => ({
            name: dish,
            chef: getChefForDish(dish)
        }))
    }));
}

// Экспортируем функции для использования в других файлах
export { getOrders };
