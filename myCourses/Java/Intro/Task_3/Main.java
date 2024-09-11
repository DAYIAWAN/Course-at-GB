/*
Задача:
	Дана json строка (можно сохранить в файл и читать из файла)
	[{"фамилия":"Иванов","оценка":"5","предмет":"Математика"},
	{"фамилия":"Петрова","оценка":"4","предмет":"Информатика"},
	{"фамилия":"Краснов","оценка":"5","предмет":"Физика"}]

	Написать метод(ы), который распарсит json и, используя StringBuilder, создаст строки вида: Студент [фамилия] получил [оценка] по предмету [предмет].

		Пример вывода:
			Студент Иванов получил 5 по предмету Математика.
			Студент Петрова получил 4 по предмету Информатика.
			Студент Краснов получил 5 по предмету Физика.
*/

public class Main {
    public static void main(String[] args) throws Exception {
        String [] arrayData =  lib.ReadLineFromFile("myData.txt");
        for(int i = 0; i < arrayData.length; i++) {
            System.out.println(PrintLine(arrayData[i]));
        }
        
    }
    public static StringBuilder PrintLine(String line) {
        String line1 = line.replace("{", "");
        String line2 = line1.replace("}", "");
        String line3 = line2.replaceAll("\"", "");
        String line4 = line3.replace("[", "");
        String line5 = line4.replace("]", "");
        StringBuilder result = new StringBuilder("");
        String [] arrayData = line5.split(",");
        String [] listName = {"Студент ", " получил ", " по предмету "};
        for (int i =0; i < arrayData.length; i++) {
            String[] arrData = arrayData[i].split(":");
            result.append(listName[i]);
            result.append(arrData[1]);
            }
        return result;
    }
}
