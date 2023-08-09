package ru.geekbrains.lesson7.factory;

import java.util.ArrayList;
import java.util.Random;

public class Program {

    static Random random = new Random();


    static Employee generateEmployee(EmployeeType employeeType){
        String[] names = new String[] { "Анатолий", "Глеб", "Клим", "Мартин", "Лазарь", "Владлен", "Клим", "Панкратий", "Рубен", "Герман" };
        String[] surnames = new String[] { "Григорьев", "Фокин", "Шестаков", "Хохлов", "Шубин", "Бирюков", "Копылов", "Горбунов", "Лыткин", "Соколов" };
        int typeIndex = random.nextInt(2);
        int salary = random.nextInt(200, 500);
        int index = random.nextInt(100, 150);
        switch (employeeType)
        {
            case Freelancer:
                return new Freelancer(names[random.nextInt(10)], surnames[random.nextInt(10)], salary);
            case Worker:
                return new Worker(names[random.nextInt(10)], surnames[random.nextInt(10)], salary * index);
        }
        return null;
    }

    static Employee generateEmployee(){
       int typeIndex = random.nextInt(2);
        switch (typeIndex)
        {
            case 0:
                return generateEmployee(EmployeeType.Freelancer);
            case 1:
                return generateEmployee(EmployeeType.Worker);
        }
        return null;
    }

    static ArrayList<Employee> generateEmployees(int count){
        ArrayList<Employee> employees = new ArrayList<>();
        for (int i = 0; i < count; i++){
            employees.add(generateEmployee());
        }
        return employees;
    }

    public static void main(String[] args) {

        for (Employee e : generateEmployees(20)){
            System.out.println(e);
        }



    }

}
