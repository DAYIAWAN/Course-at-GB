/*
Задача:
	Написать программу, которая из имеющегося массива строк формирует новый массив из строк, длина которых меньше/равна 3 символам. Первоначальный массив можно ввести с клавиатуры, либо задать на старте выполнения алгоритма. При решении не рекомендуется пользоваться коллекциями, лучше обойтись исключительно массивами.

		Примеры:
			[“Hello”, “2”, “World”, “:-)”]			→		[“2”, “:-)”]
			[“1234”, “2580”, “-2”, “under”]			→		[“-2”]
			[“Russia”, “Denmark”, “Kazan”]			→		[]
*/

using System;

Console.WriteLine("Введите количество элементов массива: ");
int size  = int.Parse(Console.ReadLine());

string[] arr1 = new string[size];

for (int i = 0; i < size; i++){
	Console.Write("Введите элемент массива: ");
    string result = Console.ReadLine();
	arr1[i] = result;  
}
Console.WriteLine();
Console.Write("Введённый массив: [");
Console.Write(string.Join(",", arr1));
Console.Write("]");

int count = 0;
int maxSymbols = 3;

for (int i = 0; i < arr1.Length; i++){
	if(arr1[i].Length <= maxSymbols){
		count++;
	}   
}
Console.WriteLine();
Console.Write("Итоговый массив: [");
string[] arr2 = new string[count];
int j = 0;
for (int i = 0; i < arr1.Length; i++){
    if(arr1[i].Length <= maxSymbols){
        arr2[j] = arr1[i];
        Console.Write(arr2[j] + ",");
        j++;
    }
}
Console.Write("]");
