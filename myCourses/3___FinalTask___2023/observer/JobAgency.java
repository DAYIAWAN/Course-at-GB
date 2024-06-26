package observer;

import java.util.ArrayList;
import java.util.List;

/*
 * Агенство занимается поиском сотрудников.
*/

public class JobAgency implements Publisher {

    List<Observer> observers = new ArrayList<>();

    @Override
    public void sendOffer(String offerText, int salary) { // Изменили параметр companyName на offerText
        for (Observer observer : observers) {
            observer.receiveOffer(offerText, salary);
        }
    }

    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }
}
