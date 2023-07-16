/*
Задача:
	Разработать программу, имитирующую поведение коллекции HashSet. В программе содать метод "add" добавляющий элемент, метод "toString" возвращающий строку с элементами множества и метод, позволяющий читать элементы по индексу. Формат данных "Integer".
*/

import java.util.ArrayList;
import java.util.List;

class CustomHashSet {
    private List<Integer> elements;

    public CustomHashSet() {
        elements = new ArrayList<>();
    }

    public void add(int element) {
        if (!contains(element)) {
            elements.add(element);
        }
    }

    public boolean contains(int element) {
        return elements.contains(element);
    }

    public String toString() {
        return elements.toString();
    }

    public int get(int index) {
        if (index >= 0 && index < elements.size()) {
            return elements.get(index);
        }
        throw new IndexOutOfBoundsException("Индекс вне диапазона.");
    }
}

public class Main {
    public static void main(String[] args) {
        CustomHashSet customHashSet = new CustomHashSet();

        // Добавление элементов
        customHashSet.add(5);
        customHashSet.add(10);
        customHashSet.add(15);
        customHashSet.add(20);
        customHashSet.add(25);

        // Вывод элементов
        System.out.println("Элементы множества: " + customHashSet.toString());

        // Чтение элементов по индексу
        int index = 2;
        System.out.println("Элемент по индексу " + index + ": " + customHashSet.get(index));
    }
}
