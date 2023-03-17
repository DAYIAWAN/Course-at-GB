/*
Задача 1:
	Напишите программу, которая принимает на вход пятизначное число и проверяет, является ли оно палиндромом.
		14212	->	нет
		12821	->	да
		23432	->	да
*/

using System;

class Program {
    static void Main(string[] args) {
        Console.Write("Введите пятизначное число: ");
        int number = int.Parse(Console.ReadLine());

        int[] digits = new int[5];
        for (int i = 0; i < 5; i++) {
            digits[i] = number % 10;
            number /= 10;
        }

        bool isPalindrome = true;
        for (int i = 0; i < 2; i++) {
            if (digits[i] != digits[4 - i]) {
                isPalindrome = false;
                break;
            }
        }

        if (isPalindrome) {
            Console.WriteLine("Да, это число является палиндромом");
        } else {
            Console.WriteLine("Нет, это число не является палиндромом");
        }
    }
}
