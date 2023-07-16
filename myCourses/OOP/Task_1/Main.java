/*
Задача:
	1) Создать наследника реализованного класса "ГорячийНапиток" с дополнительным полем int температура.
	2) Создать класс "ГорячихНапитковАвтомат" реализующий интерфейс "ТорговыйАвтомат" и реализовать перегруженный метод getProduct(int name, int volume, int temperature), выдающий продукт соответствующий имени, объёму и температуре.
	3) В main проинициализировать несколько "ГорячихНапитков" и "ГорячихНапитковАвтомат" и воспроизвести логику, заложенную в программе.
	4) Всё вышеуказанное создать согласно принципам ООП, пройденным на семинаре.
*/

import java.util.Random;

interface VendingMachine {
    void getProduct(int name, int volume);
}

class HotBeverage {
    private String name;
    private int volume;
    private int temperature;

    public HotBeverage(String name, int volume, int temperature) {
        this.name = name;
        this.volume = volume;
        this.temperature = temperature;
    }

    public String getName() {
        return name;
    }

    public int getVolume() {
        return volume;
    }

    public int getTemperature() {
        return temperature;
    }

    public void display() {
        System.out.println("Напиток: " + name);
        System.out.println("Объем: " + volume + " мл");
        System.out.println("Температура: " + temperature + " °C");
    }
}

class HotBeverageMachine implements VendingMachine {
    private HotBeverage[] beverages;

    public HotBeverageMachine(HotBeverage[] beverages) {
        this.beverages = beverages;
    }

    public void getProduct(int name, int volume) {
        for (HotBeverage beverage : beverages) {
            if (beverage.getName().equals("Напиток " + name) && beverage.getVolume() == volume) {
                System.out.println("Выдан продукт:");
                beverage.display();
                return;
            }
        }
        System.out.println("Продукт не найден.");
    }
}

public class Main {
    public static void main(String[] args) {
        int k = 5;
        Random random = new Random();

        // Создание экземпляров класса HotBeverage
        HotBeverage coffee = new HotBeverage("Напиток 1", 250, 70);
        HotBeverage tea = new HotBeverage("Напиток 2", 200, 85);
        HotBeverage hotChocolate = new HotBeverage("Напиток 3", 300, 60);

        // Создание массива напитков
        HotBeverage[] beverages = {coffee, tea, hotChocolate};

        // Создание экземпляра класса HotBeverageMachine
        HotBeverageMachine beverageMachine = new HotBeverageMachine(beverages);

        // Воспроизведение логики программы
        int name = random.nextInt(k) + 1;
        int volume = random.nextInt(100) + 100;

        System.out.println("Выбран напиток " + name + " объемом " + volume + " мл");
        beverageMachine.getProduct(name, volume);
    }
}
