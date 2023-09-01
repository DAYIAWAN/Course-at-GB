/*
Задача:
	Написать программу, которая запрашивает у пользователя три числа и выполняет следующие проверки:

	1) Если первое число больше 100, выбросить исключение "NumberOutOfRangeException" с сообщением "Первое число вне допустимого диапазона".
	2) Если второе число меньше 0, выбросить исключение "NumberOutOfRangeException" с сообщением "Второе число вне допустимого диапазона".
	3) Если сумма первого и второго чисел меньше 10, выбросить исключение "NumberSumException" с сообщением "Сумма первого и второго чисел слишком мала".
	4) Если третье число равно 0, выбросить исключение "DivisionByZeroException" с сообщением "Деление на ноль недопустимо".
	5) В противном случае, программа должна выводить сообщение "Проверка пройдена успешно".

	>>> Необходимо создать 3 класса (собственных) исключений.
*/

class NumberOutOfRangeException extends Exception {
    public NumberOutOfRangeException(String message) {
        super(message);
    }
}

class NumberSumException extends Exception {
    public NumberSumException(String message) {
        super(message);
    }
}

class DivisionByZeroException extends Exception {
    public DivisionByZeroException(String message) {
        super(message);
    }
}

public class NumberChecks {
    public static void main(String[] args) {
        try {
            double num1 = getUserInput("Введите первое число: ");
            double num2 = getUserInput("Введите второе число: ");
            double num3 = getUserInput("Введите третье число: ");

            checkNumberRange(num1, "Первое число");
            checkNumberRange(num2, "Второе число");
            checkNumberSum(num1, num2);
            checkDivisionByZero(num3);

            System.out.println("Проверка пройдена успешно");
        } catch (NumberOutOfRangeException | NumberSumException | DivisionByZeroException e) {
            System.out.println(e.getMessage());
        }
    }

    public static double getUserInput(String message) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.print(message);
        return scanner.nextDouble();
    }

    public static void checkNumberRange(double number, String numberDescription) throws NumberOutOfRangeException {
        if (number > 100) {
            throw new NumberOutOfRangeException(numberDescription + " вне допустимого диапазона");
        }
    }

    public static void checkNumberSum(double num1, double num2) throws NumberSumException {
        if (num1 + num2 < 10) {
            throw new NumberSumException("Сумма первого и второго чисел слишком мала");
        }
    }

    public static void checkDivisionByZero(double num3) throws DivisionByZeroException {
        if (num3 == 0) {
            throw new DivisionByZeroException("Деление на ноль недопустимо");
        }
    }
}
