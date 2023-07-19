/*
Задача:
	Реализовать класс Market и все методы, которые он обязан реализовывать.
	Методы из интерфейса QueueBehaviour, имитируют работу очереди, MarketBehaviour – помещает и удаляет человека из очереди, метод update – обновляет состояние магазина (т.е. принимает и отдаёт заказы).
*/

import java.util.LinkedList;
import java.util.Queue;

interface QueueBehaviour<T> {
    boolean isEmpty();
    void enqueue(T element);
    T dequeue();
    int size();
}

interface MarketBehaviour<T> {
    void addPerson(T person);
    T servePerson();
}

class Market<T> implements QueueBehaviour<T>, MarketBehaviour<T> {
    private Queue<T> queue = new LinkedList<>();

    @Override
    public boolean isEmpty() {
        return queue.isEmpty();
    }

    @Override
    public void enqueue(T element) {
        queue.add(element);
    }

    @Override
    public T dequeue() {
        return queue.poll();
    }

    @Override
    public int size() {
        return queue.size();
    }

    @Override
    public void addPerson(T person) {
        enqueue(person);
    }

    @Override
    public T servePerson() {
        return dequeue();
    }

    public void update() {
        // В этом методе можно обновить состояние магазина (например, принять и отдать заказы)
        // Реализация будет зависеть от конкретных требований задачи
    }
}

public class Main {
    public static void main(String[] args) {
        Market<String> market = new Market<>();

        // Добавление и обслуживание клиентов
        market.addPerson("Клиент 1");
        market.addPerson("Клиент 2");
        market.addPerson("Клиент 3");

        System.out.println("Размер очереди: " + market.size());
        System.out.println("Обслуженный клиент: " + market.servePerson());
        System.out.println("Размер очереди после обслуживания: " + market.size());
    }
}
