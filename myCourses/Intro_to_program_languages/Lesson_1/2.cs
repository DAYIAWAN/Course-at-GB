using System;

public class Program
{
    static void Main()
    {
        Console.WriteLine("Введите три числа:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());

        int max = a;

        if (b > max)
        {
            max = b;
        }

        if (c > max)
        {
            max = c;
        }

        Console.WriteLine("Максимальное число: " + max);
    }
}
