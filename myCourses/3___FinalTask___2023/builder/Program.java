package builder;

public class Program {

    public static void main(String[] args) {

        StringBuilder textBuilder = new StringBuilder("ПерваяСтрока");
        textBuilder.append("ВтораяСтрока");
        textBuilder.append("ТретьяСтрока");
        String fourthString = "ЧетвертаяСтрока";
        textBuilder.append(fourthString);
        textBuilder.append("ПятаяСтрока");
        textBuilder.append("ШестаяСтрока").append("СедьмаяСтрока").insert(2, "ВосьмаяСтрока").append("ДевятаяСтрока").append("ДесятаяСтрока");
        System.out.println(textBuilder.toString());

        OrderBuilder orderBuilder = new OrderBuilder()
                .setProductId(256)
                .setPrice(2000)
                .setQuantity(3)
                .setClientName("Клиент Клиентович")
                .setSign(true)
                .setProductName("Продукт Продуктович")
                .build();

    }

}
