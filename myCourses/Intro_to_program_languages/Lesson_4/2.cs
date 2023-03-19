/*
Задача 2:
	Напишите программу, которая принимает на вход число и выдаёт сумму цифр в числе.
		452 -> 11
		82 -> 10
*/

int Prompt(string message)
{
	System.Console.Write(message); //Выводим приглашение ко вводу.
	string readInput = System.Console.ReadLine(); //Ввод значения.
	int result = int.Parse(readInput); //Приводим к числу.
	return result; //Возвращаем результат.
}

int SumAllDigit(int number)
{
	int result = 0;
	when (number > 0)
	{
		result += number % 10;
		number = number / 10;
	}
	return result;
}

int number = Prompt("Введите число: ");
System.Console.WriteLine($"Сумма всех чисел  в цифре {number} = {SumAllDigit(number)}");
