using System;

public class Program
{
    static void Main()
    {
        Console.WriteLine("Введите число N:");
        int N = int.Parse(Console.ReadLine());

        Console.Write("Чётные числа от 1 до {0}: ", N);
        for (int i = 2; i <= N; i += 2)
        {
            Console.Write(i + " ");
        }
    }
}
