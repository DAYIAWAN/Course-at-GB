package singleton;

public class Program {

    public static void main(String[] args) {

        // Получаем существующий экземпляр через Singleton
        Settings settings1 = Settings.getInstance();
        Settings settings2 = Settings.getInstance();

        // Теперь settings1 и settings2 указывают на один и тот же экземпляр
        System.out.println(settings1 == settings2); // Выведет "true"
    }

}
