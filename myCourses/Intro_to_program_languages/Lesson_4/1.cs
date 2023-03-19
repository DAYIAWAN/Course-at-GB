/*
Задача 1:
	Напишите цикл, который принимает на вход два числа ("A" и "B") и возводит число "A" в натуральную степень "B".
	(задачи, решённые через "Math.Pow", не будут считаться правильными, так как задача состоит в том, чтобы написать именно цикл)
		3, 5	->	243 (3⁵)
		2, 4	->	16
*/

int Prompt(string message)
{
	System.Console.Write(message); //Выводим приглашение ко вводу.
	string readInput = System.Console.ReadLine(); //Ввод значения.
	int result = int.Parse(readInput); //Приводим к числу.
	return result; //Возвращаем результат.
}

int Power(int powerBase, int exponent)
{
	int Power = 1;
	for (int i = 0; i < exponent; i++)
	{
		power *= powerBase;
	}
	return power;
}

bool ValidateExponent(int exponent)
{
	if (exponent < 0)
	{
		System.Console.WriteLine("Показатель не должен быть меньше 0");
		return false;
	}
	return true;
}

int powerBase = Prompt("Введите основание: ");
int exponent = Prompt("Введите показатель: ");
if (ValidateExponent(exponent))
{
	System.Console.WriteLine($"Число {powerBase} в степени {exponent} равно {Power(powerBase, exponent)}");
}
