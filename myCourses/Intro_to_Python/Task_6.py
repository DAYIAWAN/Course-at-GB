/*
Задача 1:
	Заполните массив элементами арифметической прогрессии. Её первый элемент, разность и количество элементов нужно ввести с клавиатуры. Формула для получения N-го члена прогрессии: an = a1 + (n-1) * d. Каждое число вводится с новой строки.
*/

a1= int(input("Введите значение 1-го элемента: "))
d=int(input("Введите разность элементов: "))
n=int(input("Введите количество элементов: "))
res = [a1 + (i - 1) * d for i in range(1, n + 1)]
print(*res)



/*
Задача 2:
	Определить индексы элементов массива (списка), значения которых принадлежат заданному диапазону (т.е. не меньше заданного минимума и не больше заданного максимума).
*/

import random

mas=[random.randint(-50, 50) for i in range(random.randint(10,20))]

print(*mas)

maxi=int(input("MAX= "))

mini=int(input("MIN= "))

masi=[]

if maxi>=mini:

   for i in range(len(mas)):

      if maxi>=mas[i] and mini<=mas[i]:

          masi.append(i)

   print("Количество: ",len(masi))

   print("Индексы: ",masi)