/*
Задача:
	Написать программу, которая запрашивает у пользователя число и проверяет, является ли оно положительным. Если число отрицательное или равно нулю, программа должна выбрасывать исключение "InvalidNumberException" с сообщением "Некорректное число". В противном случае программа должна выводить сообщение "Число корректно".

	В задаче используются собственные исключения, которые наследуются от класса "Exception". Это позволяет нам определить специфическую причину ошибки и передать информацию об ошибке для последующей обработки.
*/

class InvalidNumberException extends Exception {
    public InvalidNumberException(String message) {
        super(message);
    }
}

public class PositiveNumberChecker {
    public static void main(String[] args) {
        try {
            int number = getUserInput();
            checkPositiveNumber(number);
            System.out.println("Число корректно");
        } catch (InvalidNumberException e) {
            System.out.println(e.getMessage());
        }
    }

    public static int getUserInput() {
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.print("Введите число: ");
        return scanner.nextInt();
    }

    public static void checkPositiveNumber(int number) throws InvalidNumberException {
        if (number <= 0) {
            throw new InvalidNumberException("Некорректное число");
        }
    }
}
