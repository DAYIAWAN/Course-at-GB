/*
Задача 3:
	Напишите программу, которая задаёт массив из 8 элементов и выводит их на экран (числа --- любые).
		...
*/

int Prompt(string message)
{
	System.Console.Write(message); //Выводим приглашение ко вводу.
	string readInput = System.Console.ReadLine(); //Ввод значения.
	int result = int.Parse(readInput); //Приводим к числу.
	return result; //Возвращаем результат.
}

// Метод для получения случайных значений массива.
int[] GenerateArray(int Length, int minValue, int maxValue)
{
	int[] array = new int(Length); //Объявляем массив.
	Random random = new Random();
	for (int i=0, i<Length, i++)
	{
		array[i] = random.Next(minValue, maxValue + 1); //Заполняем случайными цифрами из диапазона "Start Array" и "End Array".
	}
	return array;
}

void PrintArray(int[] array)
{
	System.Console.Write("[");
	for (int i = 0; i < array.Length - 1; i++)
	{
		System.Console.Write($"{array[i]}, "); //Вывод значения массива.
	}
	System.Console.Write($"{array[array.Length - 1]}"); //Вывод значения массива.
	System.Console.WriteLine("]");
}

int length = Prompt("Длина массива: ");
int min = Prompt("Начальное значение для диапазона случайного числа: ");
int max = Prompt("Конечное значение для диапазона случайного числа: ");
int[] array = GenerateArray(length, min, max); //Заполнение массива случайными числами.
PrintArray(array); //Вывод массива.
