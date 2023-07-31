/*
Задача:
	-A) Даны классы Fruit, Apple extends Fruit, Orange extends Fruit;

	-B) Класс Box, в который можно складывать фрукты. Коробки условно сортируются по типу фрукта, поэтому в одну коробку нельзя сложить и яблоки, и апельсины;

	-С) Для хранения фруктов внутри коробки можно использовать ArrayList;

	-D) Сделать метод getWeight(), который высчитывает вес коробки, зная вес одного фрукта и их количество: вес яблока – 1.0f, апельсина – 1.5f (единицы измерения не важны);

	-E) Внутри класса Box сделать метод compare(), который позволяет сравнить текущую коробку с той, которую подадут в compare() в качестве параметра. true – если их массы равны, false – в противоположном случае. Можно сравнивать коробки с яблоками и апельсинами;

	-F) Написать метод, который позволяет пересыпать фрукты из текущей коробки в другую. Помним про сортировку фруктов: нельзя яблоки высыпать в коробку с апельсинами. Соответственно, в текущей коробке фруктов не остается, а в другую перекидываются объекты, которые были в первой;

	-G) Не забываем про метод добавления фрукта в коробку.
*/

import java.util.ArrayList;

// Класс Фрукт (абстрактный)
abstract class Fruit {
    // Вес фрукта (единицы измерения не важны, здесь у нас float)
    public abstract float getWeight();
}

// Класс Яблоко, наследуется от Фрукта
class Apple extends Fruit {
    // Вес яблока
    @Override
    public float getWeight() {
        return 1.0f;
    }
}

// Класс Апельсин, наследуется от Фрукта
class Orange extends Fruit {
    // Вес апельсина
    @Override
    public float getWeight() {
        return 1.5f;
    }
}

// Класс Коробка для хранения фруктов
class Box<T extends Fruit> {
    private ArrayList<T> fruits; // Список фруктов в коробке

    public Box() {
        fruits = new ArrayList<>();
    }

    // Метод для получения веса коробки
    public float getWeight() {
        float weight = 0.0f;
        for (T fruit : fruits) {
            weight += fruit.getWeight();
        }
        return weight;
    }

    // Метод для сравнения текущей коробки с другой по весу
    public boolean compare(Box<?> anotherBox) {
        return Math.abs(this.getWeight() - anotherBox.getWeight()) < 0.0001;
    }

    // Метод для добавления фрукта в коробку
    public void addFruit(T fruit) {
        fruits.add(fruit);
    }

    // Метод для пересыпания фруктов из текущей коробки в другую
    public void transferFruitsTo(Box<T> anotherBox) {
        anotherBox.fruits.addAll(this.fruits);
        this.fruits.clear();
    }
}

public class Main {
    public static void main(String[] args) {
        // Создание фруктовых коробок и добавление фруктов в них
        Box<Apple> appleBox1 = new Box<>();
        appleBox1.addFruit(new Apple());
        appleBox1.addFruit(new Apple());

        Box<Orange> orangeBox1 = new Box<>();
        orangeBox1.addFruit(new Orange());
        orangeBox1.addFruit(new Orange());
        orangeBox1.addFruit(new Orange());

        Box<Apple> appleBox2 = new Box<>();
        appleBox2.addFruit(new Apple());
        appleBox2.addFruit(new Apple());
        appleBox2.addFruit(new Apple());

        // Вывод веса каждой коробки
        System.out.println("Вес яблочной коробки 1: " + appleBox1.getWeight());
        System.out.println("Вес апельсиновой коробки 1: " + orangeBox1.getWeight());
        System.out.println("Вес яблочной коробки 2: " + appleBox2.getWeight());

        // Сравнение коробок по весу и вывод результата
        System.out.println("Сравнение яблочной коробки 1 и апельсиновой коробки 1: " + appleBox1.compare(orangeBox1));
        System.out.println("Сравнение яблочной коробки 1 и яблочной коробки 2: " + appleBox1.compare(appleBox2));

        // Пересыпание фруктов из одной коробки в другую
        appleBox1.transferFruitsTo(appleBox2);

        // Вывод веса коробок после пересыпания
        System.out.println("Вес яблочной коробки 1 после пересыпания: " + appleBox1.getWeight());
        System.out.println("Вес яблочной коробки 2 после пересыпания: " + appleBox2.getWeight());
    }
}
