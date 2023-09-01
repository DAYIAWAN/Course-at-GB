/*
Задача:
	Написать программу, которая запрашивает у пользователя два числа и выполняет их деление. Если второе число равно нулю, программа должна выбрасывать исключение "DivisionByZeroException" с сообщением "Деление на ноль недопустимо". В противном случае программа должна выводить результат деления.

	В задаче используются собственные исключения, которые наследуются от класса "Exception". Это позволяет нам определить специфическую причину ошибки и передать информацию об ошибке для последующей обработки.
*/

class DivisionByZeroException extends Exception {
    public DivisionByZeroException(String message) {
        super(message);
    }
}

public class DivisionCalculator {
    public static void main(String[] args) {
        try {
            double dividend = getUserInput("Введите делимое: ");
            double divisor = getUserInput("Введите делитель: ");

            double result = divideNumbers(dividend, divisor);
            System.out.println("Результат деления: " + result);
        } catch (DivisionByZeroException e) {
            System.out.println(e.getMessage());
        }
    }

    public static double getUserInput(String message) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.print(message);
        return scanner.nextDouble();
    }

    public static double divideNumbers(double dividend, double divisor) throws DivisionByZeroException {
        if (divisor == 0) {
            throw new DivisionByZeroException("Деление на ноль недопустимо");
        }
        return dividend / divisor;
    }
}
