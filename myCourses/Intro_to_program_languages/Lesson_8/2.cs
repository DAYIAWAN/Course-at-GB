/*
Задача 2:
	Составить частотный словарь элементов двумерного массива. Частотный словарь содержит информацию о том, сколько раз встречается элемент входных данных.
	1, 2, 3
	4, 6, 1
	2, 1, 6
		1 встречается 3 раза
		2 встречается 2 раз
		3 встречается 1 раз
		4 встречается 1 раз
		6 встречается 2 раза
*/

class Program
{
    /*   public struct FrequencyCollection
      {
        int Value = 0;
        int Amount =0;  
      } */
    public static int GetExistedElementNumber(int[,] arrayToSeek, int arrayLength, int element)
    {
        int elementNumber = 0;
        for (elementNumber = 0; elementNumber < arrayLength; elementNumber++)
        {
            if (arrayToSeek[elementNumber, 0] == element)
            {
                return elementNumber;
            }
        }
        return -1;
    }
    public static void Reset2DArray(int[,] arrayToReset)
    {
        for (int i = 0; i < arrayToReset.GetLength(0); i++)
        {
            for (int j = 0; j < arrayToReset.GetLength(1); j++)
            {
                arrayToReset[i, j] = 0;
            }
        }
    }
    public static int[,] GetFreqCollection(int[,] arrayToSeek)
    {
        int[,] collection = new int[arrayToSeek.GetLength(0) * arrayToSeek.GetLength(1), 2];
        Reset2DArray(collection);
        int collectionLength = 1;
        int existedElementNum = -2;
        collection[0, 0] = arrayToSeek[0, 0];
        for (int i = 0; i < arrayToSeek.GetLength(0); i++)
        {
            for (int j = 0; j < arrayToSeek.GetLength(1); j++)
            {
                existedElementNum = GetExistedElementNumber(collection, collectionLength, arrayToSeek[i, j]);
                if (existedElementNum == -1)
                {
                    collection[collectionLength, 0] = arrayToSeek[i, j];
                    collection[collectionLength, 1] += 1;
                    collectionLength++;
                }
                else if (existedElementNum >= 0)
                {
                    collection[existedElementNum, 1] += 1;
                }
                // existedElementNum = -2;
            }
        }
        return collection;
    }
    public static void PrintCollection(int[,] collectionToPrint)
    {
        Console.WriteLine();
        for (int i = 0; i < collectionToPrint.GetLength(0); i++)
        {
            if (collectionToPrint[i, 1] > 0)
            {
                if (collectionToPrint[i, 1] >= 2 && collectionToPrint[i, 1] <= 4)
                {
                    Console.WriteLine("Число {0} встречается {1} раза.", collectionToPrint[i, 0], collectionToPrint[i, 1]);
                }
                else
                {
                    Console.WriteLine("Число {0} встречается {1} раз.", collectionToPrint[i, 0], collectionToPrint[i, 1]);
                }
            }
        }
    }
    public static (int, int) GetArraySize()
    {
        int rowSize = 0;
        int colSize = 0;
        string enteredSymbol = string.Empty;
        do
        {
            Console.Clear();
            Console.Write("Создать случайный 2D массив? Нажмите 'Y' либо 'N': ");
            enteredSymbol = Console.ReadLine();
            if (enteredSymbol == "Y")
            {
                rowSize = new Random().Next(2, 10);
                colSize = new Random().Next(2, 10);
                Console.WriteLine("Значение m: {0}", rowSize);
                Console.WriteLine("Значение n: {0}", colSize);
                Console.WriteLine();
                break;
            }
            else if (enteredSymbol == "N")
            {
                Console.Write("Введите значение m:");
                rowSize = Convert.ToInt32(Console.ReadLine());
                Console.Write("Введите значение n:");
                colSize = Convert.ToInt32(Console.ReadLine());
                break;
            }
        } while (true);

        return (rowSize, colSize);
    }
    public static void Fill2DArray(int[,] ArrayToFill, int deviation = 10)
    {
        for (int i = 0; i < ArrayToFill.GetLength(0); i++)
        {
            for (int j = 0; j < ArrayToFill.GetLength(1); j++)
            {
                ArrayToFill[i, j] = new Random().Next(-deviation, deviation + 1);
            }
        }
    }
    public static void Print2DArray(int[,] ArrayToPrint, int coloredRow = -1)
    {
        Console.Write("[X]\t");
        for (int i = 0; i < ArrayToPrint.GetLength(1); i++)
        {
            Console.Write($"[{i}]\t", i);
        }
        Console.WriteLine();
        for (int i = 0; i < ArrayToPrint.GetLength(0); i++)
        {
            if (i == coloredRow)
            {
                Console.BackgroundColor = ConsoleColor.DarkBlue;
            }
            Console.Write($"[{i}]\t", i);
            for (int j = 0; j < ArrayToPrint.GetLength(1); j++)
            {
                if (ArrayToPrint[i, j] < 0)
                {
                    Console.ForegroundColor = ConsoleColor.DarkRed;
                }
                Console.Write(ArrayToPrint[i, j] + "\t");
                Console.ForegroundColor = ConsoleColor.White;
            }
            Console.ResetColor();
            Console.WriteLine();
        }
    }
    public static void Main(string[] args)
    {
        var (rowSize, colSize) = GetArraySize();
        int[,] arrayToOperate = new int[rowSize, colSize];
        Fill2DArray(arrayToOperate, deviation: 999);
        Console.WriteLine("В сгенерированном массиве:");
        Print2DArray(arrayToOperate);
        int[,] freqCollection = new int[rowSize * colSize, 2];
        Reset2DArray(freqCollection);
        Console.WriteLine();
        freqCollection = GetFreqCollection(arrayToOperate);
        PrintCollection(freqCollection);
    }

}
