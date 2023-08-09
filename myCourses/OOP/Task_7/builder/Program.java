package ru.geekbrains.lesson7.builder;

public class Program {

    public static void main(String[] args) {

        StringBuilder stringBuilder = new StringBuilder("AA");
        stringBuilder.append("BB");
        stringBuilder.append("СС");
        stringBuilder.append(12);
        stringBuilder.append("ВВ");
        stringBuilder.append("AAA").append("GGG").insert(2, "FFF").append("RRR").append("HHH");
        System.out.println(stringBuilder.toString());

        Order order = new OrderBuilder()
                .setProductId(55)
                .setPrice(2000)
                .setQnt(2)
                .setClientName("AAA BBBB")
                .setSign(true)
                .setProductName("FFFFFFFFF")
                .build();

    }

}
