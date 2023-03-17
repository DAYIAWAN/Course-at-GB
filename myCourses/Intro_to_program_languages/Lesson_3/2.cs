/*
Задача 2:
	Напишите программу, которая принимает на вход координаты двух точек и находит расстояние между ними в 3D пространстве.
		A (3,6,8); B (2,1,-7)		->	15.84
		A (7,-5, 0); B (1,-1,9)		->	11.53
*/

using System;

class Program
{
    static void Main()
    {
        Console.Write("Введите координаты первой точки (x1 y1 z1): ");
        string[] point1String = Console.ReadLine().Split(' ');
        double x1 = double.Parse(point1String[0]);
        double y1 = double.Parse(point1String[1]);
        double z1 = double.Parse(point1String[2]);

        Console.Write("Введите координаты второй точки (x2 y2 z2): ");
        string[] point2String = Console.ReadLine().Split(' ');
        double x2 = double.Parse(point2String[0]);
        double y2 = double.Parse(point2String[1]);
        double z2 = double.Parse(point2String[2]);

        double distance = Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2) + Math.Pow(z2 - z1, 2));

        Console.WriteLine($"Расстояние между точками: {distance:F2}");
    }
}
