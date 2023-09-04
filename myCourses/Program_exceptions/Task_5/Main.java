/*
Задача:
	1) Создайте иерархию классов для интернет-магазина, как в примере.
	2) Реализуйте методы для обработки покупок и доступа к данным о продуктах.
	3) Добавьте исключения на каждый уровень абстракции для обработки возможных ошибок, например, если товар не найден.
	*Дополнительно: Вы можете добавить дополнительные уровни абстракции, такие как уровень оплаты и доставки, и реализовать обработку исключений и на этих уровнях.

import java.util.Scanner;

public class OnlineShopUI {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter product ID: ");
        int productId = scanner.nextInt();
        System.out.print("Enter quantity: ");
        int quantity = scanner.nextInt();

        double totalPrice = ShopManager.purchaseProduct(productId, quantity);
        System.out.println("Total price: $" + totalPrice);
    }
}
public class ShopManager {
    public static double purchaseProduct(int productId, int quantity) {
        Product product = ProductDatabase.getProduct(productId);
        double totalPrice = product.getPrice() * quantity;
        return totalPrice;
    }
}
public class ProductDatabase {
    public static Product getProduct(int productId) {
        // Подразумевается обращение к базе данных или хранилищу товаров
        // и получение информации о товаре по его ID
        // В данном примере мы используем заглушку
        if (productId == 1) {
            return new Product("Product 1", 10, 5.99);
        }
        return null;
    }
}
public class Product {
    private String name;
    private int availableQuantity;
    private double price;

    public Product(String name, int availableQuantity, double price) {
        this.name = name;
        this.availableQuantity = availableQuantity;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public int getAvailableQuantity() {
        return availableQuantity;
    }

    public double getPrice() {
        return price;
    }
}
*/

import java.util.Scanner;

public class OnlineShopUI {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter product ID: ");
        int productId = scanner.nextInt();
        System.out.print("Enter quantity: ");
        int quantity = scanner.nextInt();

        try {
            double totalPrice = ShopManager.purchaseProduct(productId, quantity);
            System.out.println("Total price: $" + totalPrice);
        } catch (ProductNotFoundException e) {
            System.out.println("Product not found: " + e.getMessage());
        } catch (InsufficientQuantityException e) {
            System.out.println("Insufficient quantity: " + e.getMessage());
        }
    }
}

class ShopManager {
    public static double purchaseProduct(int productId, int quantity)
            throws ProductNotFoundException, InsufficientQuantityException {
        Product product = ProductDatabase.getProduct(productId);

        if (product == null) {
            throw new ProductNotFoundException("Product not found with ID: " + productId);
        }

        if (quantity > product.getAvailableQuantity()) {
            throw new InsufficientQuantityException("Insufficient quantity available for product: " + product.getName());
        }

        double totalPrice = product.getPrice() * quantity;
        return totalPrice;
    }
}

class ProductDatabase {
    public static Product getProduct(int productId) {
        // Подразумевается обращение к базе данных или хранилищу товаров
        // и получение информации о товаре по его ID
        // В данном примере мы используем заглушку
        if (productId == 1) {
            return new Product("Product 1", 10, 5.99);
        }
        return null;
    }
}

class Product {
    private String name;
    private int availableQuantity;
    private double price;

    public Product(String name, int availableQuantity, double price) {
        this.name = name;
        this.availableQuantity = availableQuantity;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public int getAvailableQuantity() {
        return availableQuantity;
    }

    public double getPrice() {
        return price;
    }
}

class ProductNotFoundException extends Exception {
    public ProductNotFoundException(String message) {
        super(message);
    }
}

class InsufficientQuantityException extends Exception {
    public InsufficientQuantityException(String message) {
        super(message);
    }
}
