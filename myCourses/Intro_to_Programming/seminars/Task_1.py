numbers = [2, 5, 13, 7, 6, 4]
size = 6
sum = 0
avg = 0
index = 0
while index < size 
    sum = sum + numbers[index]
    index = index + 1
avg = sum/size
print(avg)

<!-- Данный код находит количество максимальных элементов в заданном массиве "numbers". Он проходит по всем элементам массива и сравнивает каждый элемент с текущим максимальным значением. Если текущий элемент больше максимального, то максимальным становится текущий элемент, а счётчик максимальных элементов сбрасывается на "1". Если текущий элемент равен максимальному, то счётчик увеличивается на "1". После того как весь массив пройден, программа выводит количество максимальных элементов, которые были найдены в результате цикла. -->