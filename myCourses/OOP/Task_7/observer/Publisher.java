package ru.geekbrains.lesson7.observer;


/**
 * Интерфейс рассылки вакансий.
 *
 */
public interface Publisher {

    void sendOffer(String companyName, int salary);

    void registerObserver(Observer observer);

    void removeObserver(Observer observer);


}
