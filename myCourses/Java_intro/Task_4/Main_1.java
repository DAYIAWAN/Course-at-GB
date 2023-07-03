/*
Задача:
	Дано: произвольный список целых чисел.
	Необходимо: удалить из него чётные числа.
*/

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.Scanner;

public class Main_1 {
    public static void main(String[] args) throws Exception {
        System.out.print("Введите длину списка чисел N: ");
        try (Scanner iScanner = new Scanner(System.in)) {
            int N = iScanner.nextInt();
            ArrayList<Integer> ar = new ArrayList<Integer>();
            Random ran = new Random();
            for (int i = 0; i < N; i++) {
                int x = ran.nextInt(N);
                ar.add(x);
            }
            System.out.println("Произвольный список целых чисел: \n " + ar);

            for (int i = ar.size() - 1; i >= 0; i--) {
                int even = ar.get(i) % 2;
                if (even == 0) {
                    System.out.println("Чётное число:" + ar.get(i));
                    ar.remove(i);
                }
            }
            Collections.sort(ar);
            System.out.println("Список с удаленными чётными числами: \n " + ar);
        }
    }

}
