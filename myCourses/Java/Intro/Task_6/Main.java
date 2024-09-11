/*
Задача:
	Реализуйте структуру телефонной книги с помощью HashMap.
	Программа также должна учитывать то, что во входной структуре будут повторяющиеся имена с разными номерами телефонов — их необходимо считать, как одного человека с разными телефонами. Вывод должен быть отсортирован по убыванию числа телефонов.
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Создание и заполнение телефонной книги
        Map<String, List<String>> phoneBook = new HashMap<>();
        phoneBook.put("Иванов", Arrays.asList("123456789", "987654321"));
        phoneBook.put("Петров", Arrays.asList("111222333"));
        phoneBook.put("Сидоров", Arrays.asList("444555666", "777888999", "000000000"));
        phoneBook.put("Иванова", Arrays.asList("555555555"));

        // Создание списка записей телефонной книги
        List<Map.Entry<String, List<String>>> entries = new ArrayList<>(phoneBook.entrySet());

        // Сортировка записей по убыванию числа телефонов
        entries.sort(Comparator.comparingInt(e -> e.getValue().size()));
        Collections.reverse(entries);

        // Вывод отсортированных записей телефонной книги
        for (Map.Entry<String, List<String>> entry : entries) {
            String name = entry.getKey();
            List<String> phones = entry.getValue();
            System.out.println("Имя: " + name);
            System.out.println("Телефоны: " + phones.toString());
        }
    }
}
