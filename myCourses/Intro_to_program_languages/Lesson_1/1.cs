using System;

public class Program
{
    static void Main()
    {
        Console.WriteLine("Введите два числа:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());

        if (a > b)
        {
            Console.WriteLine("Максимальное число: " + a);
            Console.WriteLine("Минимальное число: " + b);
        }
        else
        {
            Console.WriteLine("Максимальное число: " + b);
            Console.WriteLine("Минимальное число: " + a);
        }
    }
}
