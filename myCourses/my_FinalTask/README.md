![](https://github.com/DAYIAWAN/Course-at-GB/blob/main/myTemplates/dev/myIcon.png?raw=true "")
# <p style="text-align: center;">Репозиторий студента Дайяван'а (GB)</p>

## Задача:
### [Написать программу, которая из имеющегося массива строк формирует новый массив из строк, длина которых меньше, либо равна трём символам. Первоначальный массив можно ввести с клавиатуры, либо задать на старте выполнения алгоритма. При решении не рекомендуется пользоваться коллекциями, лучше обойтись исключительно массивами.](#myTag_one)

#### Примеры:
<pre>
* [“Hello”, “2”, “World”, “:-)”]      →     [“2”, “:-)”]
* [“1234”, “1567”, “-2”, “under”]     →     [“-2”]
* [“Russia”, “Denmark”, “Kazan”]      →     []
</pre>
## Решение:
1. Создан репозиторий "my_FinalTask" с тремя ветками: "main", "develop" и "design".
2. Работа над кодом велась в ветке "develop", работа над блок-схемой — в "design".
3. По завершению работы ветки "develop" и "design" слиты в главную через операцию "merge".
4. В файле "myTask.cs" находится код реализации решения, описанного в блок-схеме "myDiagram.png".
5. Ниже представлено описание алгоритма решения задачи:

* Выводим запрос на ввод количества элементов массива(size);
* Пользователь заполняет массив с клавиатуры;
* Задаём массив "arr1" размером "size";
* Задаём переменную "i" (или индекс элемента);
* Вводим переменную "count" (счётчик элементов подходящих под наше условие);
* Выводим на экран полученный массив "arr1";
* Вводим переменную "maxSymbols" (максимально допустимое количество символов в элементе). По условию "maxSymbols" = "3";
* Вводим элементы массива, начиная с первого "arr1[0]", до тех пор, пока индекс [i] меньше длины массива "size", прибавляя по одному;
* Каждый элемент массива проверяем <b>по условию</b>: длина элемента "arr[i] <= maxSymbols". Если условие соблюдено, увеличиваем "count" на единицу. Если нет - переходим к проверке следующего элемента массива "arr1[i+1]";
* Заполняем новый массив "arr2" в пределах цикла. Для этого повторно проводим проверку каждого элемента массива, чтобы длина элемента "arr1[i]" была больше/равна "maxSymbols". Если условие соблюдено, элементу "arr2[j]" присваиваем соответствующее значение элемента "arr1[i]". Записываем его в массив "arr2". Если нет - переходим к проверке следующего элемента "arr1[i+1]";
* Выводим полученный массив "arr2" на экран.

<!-- "GitHub" -->
![](https://github.com/DAYIAWAN/Course-at-GB/blob/main/myTemplates/Var_1/index_files/0.gif?raw=true "")
![](https://github.com/DAYIAWAN/Course-at-GB/blob/main/myTemplates/Var_1/index_files/0.gif?raw=true "")
![](https://github.com/DAYIAWAN/Course-at-GB/blob/main/myTemplates/Var_1/index_files/0.gif?raw=true "")

<!-- "Notion" -->
<p style="text-align: center;"><a href="https://esoter.notion.site/75e1e973a5584a2eb8294ffdc7ad8598" target="_blank">Моё учебное облако в <b>"<u>Notion</u>"</b></a></p>

![](https://github.com/DAYIAWAN/Course-at-GB/blob/main/myTemplates/Var_1/index_files/0.gif?raw=true "")