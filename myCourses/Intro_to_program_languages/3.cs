using System;

public class Program
{
    static void Main()
    {
        Console.WriteLine("Введите число:");
        int number = int.Parse(Console.ReadLine());

        if (number % 2 == 0)
        {
            Console.WriteLine("Число является четным.");
        }
        else
        {
            Console.WriteLine("Число не является четным.");
        }
    }
}
