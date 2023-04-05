/*
Задача 4:
	Напишите программу, которая заполнит спирально массив 10 на 10.
		Например, на выходе получается вот такой массив:
		01 02 03 04 05 06 07 08 09 10
		36 37 38 39 40 41 42 43 44 11
		35 64 65 66 67 68 69 70 45 12
		34 63 84 85 86 87 88 71 46 13
		33 62 83 96 00 00 89 72 47 14
		32 61 82 95 00 00 90 73 48 15
		31 60 81 94 93 92 91 74 49 16
		30 59 80 79 78 77 76 75 50 17
		29 58 57 56 55 54 53 52 51 18
		28 27 26 25 24 23 22 21 20 19
*/

int len = 10;
int[,] table = new int[len, len];
FillArraySpiral(table, len);
PrintArray(table);

//  Функция заполнения массива по спирали начиная с 1
void FillArraySpiral(int[,] array, int n)
{
    int i = 0, j = 0;
    int value = 1;
    for (int e = 0; e < n * n; e++)
    {
        int k = 0;
        do { array[i, j++] = value++; } while (++k < n - 1);
        for (k = 0; k < n - 1; k++) array[i++, j] = value++;
        for (k = 0; k < n - 1; k++) array[i, j--] = value++;
        for (k = 0; k < n - 1; k++) array[i--, j] = value++;
        ++i; ++j;
        n = n < 2 ? 0 : n - 2;
    }
}

//  Функция вывода двумерного массива в терминал
void PrintArray(int[,] array)
{
    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
            if (array[i, j] < 10)
            {
                Console.Write("0" + array[i, j]);
                Console.Write(" ");
            }
            else Console.Write(array[i, j] + " ");
        }
        Console.WriteLine();
    }
}
