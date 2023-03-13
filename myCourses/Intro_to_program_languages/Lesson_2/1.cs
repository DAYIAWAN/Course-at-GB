using System;

int Promt(string message)
{
    System.Console.Write(message);
    string value = Console.ReadLine();
    int result = Convert.ToInt32(value);
    return result;
}

int number = Promt("Введите трёхзначное число > ");
if (number < 100 || number >= 1000)
{
    Console.WriteLine("Вы ввели не трёхзначное число - пожалуйста, повторите ввод.");
    return;
}

Console.WriteLine($"Введённое число '{number}'");
int secondRank = number / 10 % 10;
Console.WriteLine($"Втора цифра '{secondRank}'");
