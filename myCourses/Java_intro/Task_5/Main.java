/*
Задача:
	1) Организовать ввод и хранение данных пользователей. ФИО, возраст, пол и выход из режима ввода информации.
	2) Вывод в формате: Фамилия И.О., возраст, пол.
	3) Добавить возможность выхода или вывода списка отсортированного по возрасту.
	4) Реализовать сортировку по возрасту с использованием индексов.
	5) Реализовать сортировку по возрасту и полу с использованием индексов.
*/

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

class User {
    private String fullName;
    private int age;
    private char gender;

    public User(String fullName, int age, char gender) {
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
    }

    public String getFullName() {
        return fullName;
    }

    public int getAge() {
        return age;
    }

    public char getGender() {
        return gender;
    }

    public String toString() {
        return fullName + ", возраст: " + age + ", пол: " + gender;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<User> users = new ArrayList<>();

        boolean inputMode = true;
        while (inputMode) {
            System.out.println("Введите ФИО (или 'exit' для выхода):");
            String fullName = scanner.nextLine();
            if (fullName.equalsIgnoreCase("exit")) {
                inputMode = false;
                break;
            }

            System.out.println("Введите возраст:");
            int age = scanner.nextInt();
            scanner.nextLine();

            System.out.println("Введите пол (M/F):");
            char gender = scanner.nextLine().charAt(0);

            User user = new User(fullName, age, gender);
            users.add(user);
        }

        boolean sortedByAge = false;
        while (true) {
            System.out.println("Выберите действие:");
            System.out.println("1. Вывести список пользователей");
            System.out.println("2. Сортировать по возрасту");
            System.out.println("3. Сортировать по возрасту и полу");
            System.out.println("4. Выйти");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    for (User user : users) {
                        System.out.println(user.toString());
                    }
                    break;
                case 2:
                    if (sortedByAge) {
                        users.sort(Comparator.comparingInt(User::getAge).reversed());
                    } else {
                        users.sort(Comparator.comparingInt(User::getAge));
                    }
                    sortedByAge = !sortedByAge;
                    break;
                case 3:
                    users.sort(Comparator.comparingInt(User::getAge).thenComparing(User::getGender));
                    sortedByAge = false;
                    break;
                case 4:
                    System.out.println("Программа завершена.");
                    return;
                default:
                    System.out.println("Некорректный выбор. Попробуйте снова.");
                    break;
            }
        }
    }
}
