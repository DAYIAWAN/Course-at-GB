/*
Задача:
	1. Выбросить случайное целое число в диапазоне от 0 до 2000 и сохранить в i
	2. Посчитать и сохранить в n номер старшего значащего бита выпавшего числа
	3. Найти все кратные n числа в диапазоне от i до Short.MAX_VALUE сохранить в массив m1
	4. Найти все некратные n числа в диапазоне от Short.MIN_VALUE до i и сохранить в массив m2

		Пункты реализовать в методе main
		int i = new Random().nextInt(k); //кидалка случайных чисел.
*/

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int i = new Random().nextInt(2001); // Генерация случайного числа от 0 до 2000

        // Пункт 1: Вывод сгенерированного числа i
        System.out.println("Случайное число i: " + i);

        // Пункт 2: Находим номер старшего значащего бита числа i
        int n = Integer.SIZE - Integer.numberOfLeadingZeros(i);
        System.out.println("Номер старшего значащего бита: " + n);

        // Пункт 3: Находим все кратные n числа в диапазоне от i до Short.MAX_VALUE
        int[] m1 = new int[Short.MAX_VALUE - i];
        int index = 0;
        for (int j = i; j <= Short.MAX_VALUE; j++) {
            if (j % n == 0) {
                m1[index] = j;
                index++;
            }
        }

        // Пункт 4: Находим все некратные n числа в диапазоне от Short.MIN_VALUE до i
        int[] m2 = new int[i - Short.MIN_VALUE];
        index = 0;
        for (int j = Short.MIN_VALUE; j <= i; j++) {
            if (j % n != 0) {
                m2[index] = j;
                index++;
            }
        }

        // Выводим найденные массивы m1 и m2
        System.out.println("Массив m1 (числа, кратные n):");
        for (int num : m1) {
            System.out.print(num + " ");
        }
        System.out.println();

        System.out.println("Массив m2 (числа, некратные n):");
        for (int num : m2) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
