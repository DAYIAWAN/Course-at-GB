package ru.geekbrains.lesson7.adapter;

public class Main {

    public static void main(String[] args) {

            MS200 ms200 = new MS200(113);
            MeteoStore meteoStore = new MeteoStore();
            meteoStore.save(ms200);

            ST500 st500 = new ST500(1001);
            meteoStore.save(new AdapterST500(st500));

    }

}
