/*
Задача 3:
	Задайте двумерный массив из целых чисел. Найдите среднее арифметическое элементов в каждом столбце.
		Например, задан массив:
		1 4 7 2
		5 9 2 3
		8 4 2 4

		Среднее арифметическое каждого столбца: 4,6; 5,6; 3,6; 3.
*/

Random random = new Random();
int[,] arr = new int[random.Next(1, 10), random.Next(1, 10)];
for (int i = 0; i < arr.GetLength(0); i++)
{
    for (int j = 0; j < arr.GetLength(1); j++)
    {
        arr[i, j] = random.Next(1, 10);
        Console.Write(arr[i, j] + " ");
    }
    Console.WriteLine();
}
Console.WriteLine("*************************");
Console.WriteLine(arr.GetLength(0));
for (int j = 0; j < arr.GetLength(1); j++)
{
    double sum = 0;
    for (int i = 0; i < arr.GetLength(0); i++)
    {
        sum += arr[i, j];
    }
    Console.Write($"{ sum / arr.GetLength(0)} ");
}
Console.ReadLine();
