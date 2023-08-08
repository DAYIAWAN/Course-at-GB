/*
	Задание 2
*/

import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // Создание объектов для обработки заказа
        ConsoleInputProvider inputProvider = new ConsoleInputProvider();
        JsonOrderSaver orderSaver = new JsonOrderSaver();
        OrderProcessor orderProcessor = new OrderProcessor(inputProvider, orderSaver);

        System.out.println("Введите заказ:");
        // Обработка заказа с вводом данных от пользователя
        orderProcessor.processOrder();
    }
}

// Интерфейс для сохранения заказа
interface OrderSaver {
    void saveOrder(Order order);
}

// Класс для сохранения заказа в формате JSON
class JsonOrderSaver implements OrderSaver {
    @Override
    public void saveOrder(Order order) {
        String fileName = "order.json";
        try (FileWriter writer = new FileWriter(fileName, false)) {
            // Создание JSON-структуры вручную и запись в файл
            writer.write("{\n");
            writer.write("\"clientName\":\""+ order.getClientName() + "\",\n");
            writer.write("\"product\":\""+order.getProduct()+"\",\n");
            writer.write("\"qnt\":"+order.getQnt()+",\n");
            writer.write("\"price\":"+order.getPrice()+"\n");
            writer.write("}\n");
            writer.flush();
            System.out.println("Заказ сохранен в файл " + fileName);
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
    }
}

// Класс для получения ввода данных от пользователя через консоль
class ConsoleInputProvider {
    private Scanner in = new Scanner(System.in);

    String prompt(String message) {
        System.out.print(message);
        return in.nextLine();
    }
}

// Класс для представления заказа
class Order {
    private String clientName;
    private String product;
    private int qnt;
    private int price;

    public Order(String clientName, String product, int qnt, int price) {
        this.clientName = clientName;
        this.product = product;
        this.qnt = qnt;
        this.price = price;
    }

    // Геттеры для доступа к данным заказа
    public String getClientName() {
        return clientName;
    }

    public String getProduct() {
        return product;
    }

    public int getQnt() {
        return qnt;
    }

    public int getPrice() {
        return price;
    }
}

// Класс для обработки заказа
class OrderProcessor {
    private ConsoleInputProvider inputProvider;
    private JsonOrderSaver orderSaver;

    public OrderProcessor(ConsoleInputProvider inputProvider, JsonOrderSaver orderSaver) {
        this.inputProvider = inputProvider;
        this.orderSaver = orderSaver;
    }

    // Метод для обработки заказа
    public void processOrder() {
        String clientName = inputProvider.prompt("Client name: ");
        String product = inputProvider.prompt("Product: ");
        int qnt = Integer.parseInt(inputProvider.prompt("Quantity: "));
        int price = Integer.parseInt(inputProvider.prompt("Price: "));

        // Создание объекта заказа и сохранение в JSON-файл
        Order order = new Order(clientName, product, qnt, price);
        orderSaver.saveOrder(order);
    }
}
