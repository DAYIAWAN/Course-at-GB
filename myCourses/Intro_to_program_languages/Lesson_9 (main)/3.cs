/*
Задача 3:
	Выполнить с помощью рекурсии. Напишите программу вычисления функции Аккермана с помощью рекурсии. Даны два неотрицательных числа "M" и "N".
		M = 2, N = 3 -> A(M,N) = 9
		M = 3, N = 2 -> A(M,N) = 29
*/

int m = InputNumbers("Введите M: ");
int n = InputNumbers("Введите N: ");

int functionAckerman = Ack(m, n);

Console.Write($"Функция Аккермана = {functionAckerman} ");

int Ack(int m, int n)
{
    if (m == 0) return n + 1;
    else if (n == 0) return Ack(m - 1, 1);
    else return Ack(m - 1, Ack(m, n - 1));
}

int InputNumbers(string input)
{
    Console.Write(input);
    int output = Convert.ToInt32(Console.ReadLine());
    return output;
}
