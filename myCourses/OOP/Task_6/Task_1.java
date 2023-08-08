/*
	Задание 1
*/

import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

interface OrderSaver {
    void saveOrder(Order order);
}

class JsonOrderSaver implements OrderSaver {
    @Override
    public void saveOrder(Order order) {
        String fileName = "order.json";
        try (FileWriter writer = new FileWriter(fileName, false)) {
            writer.write("{\n");
            writer.write("\"clientName\":\"" + order.getClientName() + "\",\n");
            writer.write("\"product\":\"" + order.getProduct() + "\",\n");
            writer.write("\"qnt\":" + order.getQnt() + ",\n");
            writer.write("\"price\":" + order.getPrice() + "\n");
            writer.write("}\n");
            writer.flush();
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
    }
}

class ConsoleInputProvider {
    private Scanner in = new Scanner(System.in);

    String prompt(String message) {
        System.out.print(message);
        return in.nextLine();
    }
}

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

    public String getClientName() {
        return clientName;
    }

    public String getProduct() {
        return product;
    }

    public int getQnt() {
        return qnt;
    }

    public double getPrice() {
        return price;
    }

    public void inputOrderData(ConsoleInputProvider inputProvider) {
        clientName = inputProvider.prompt("Client name: ");
        product = inputProvider.prompt("Product: ");
        qnt = Integer.parseInt(inputProvider.prompt("Quantity: "));
        price = Integer.parseInt(inputProvider.prompt("Price: "));
    }

    public void saveOrder(OrderSaver orderSaver) {
        orderSaver.saveOrder(this);
    }
}

public class Main {
    public static void main(String[] args) {
        ConsoleInputProvider inputProvider = new ConsoleInputProvider();
        System.out.println("Введите заказ:");

        Order order = new Order("", "", 0, 0);
        order.inputOrderData(inputProvider);

        OrderSaver orderSaver = new JsonOrderSaver();
        order.saveOrder(orderSaver);
    }
}
