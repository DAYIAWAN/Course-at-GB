/*
Задача:
	Создание многопоточной программы для обработки банковских транзакций с использованием пользовательских классов исключений.

	Описание задачи:
		Вы разрабатываете многопоточную программу для обработки банковских транзакций. Вам необходимо реализовать класс "BankAccount", который представляет счёт в банке и содержит баланс пользователя. Класс "BankAccount" должен поддерживать две операции: пополнение счёта и снятие денег. Однако, у каждого счёта есть ограничение по максимальному балансу, и попытка пополнения или снятия средств, превышающих это ограничение, должна вызывать соответствующее исключение.

	Вам также необходимо реализовать класс "Bank" для управления счетами и обработки транзакций. Класс "Bank" должен содержать методы для создания новых счетов, пополнения и снятия денег с счетов.

	Для обработки ошибок исключений, вы должны создать два пользовательских класса исключений:

	>>> "InsufficientFundsException"	- выбрасывается при попытке снятия средств, превышающих доступный баланс на счёте.
	>>> "MaxBalanceExceededException"	- выбрасывается при попытке пополнения счёта, превышающего максимальное допустимое значение баланса.

	Класс "Bank" должен использовать многопоточность, чтобы обрабатывать транзакции с разных счетов параллельно.
*/

class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

class MaxBalanceExceededException extends Exception {
    public MaxBalanceExceededException(String message) {
        super(message);
    }
}

class BankAccount {
    private int accountNumber;
    private int balance;
    private int maxBalance;

    public BankAccount(int accountNumber, int initialBalance, int maxBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.maxBalance = maxBalance;
    }

    public synchronized void deposit(int amount) throws MaxBalanceExceededException {
        if (balance + amount > maxBalance) {
            throw new MaxBalanceExceededException("Превышение максимального баланса на счете " + accountNumber);
        }
        balance += amount;
        System.out.println("Счет " + accountNumber + ": Пополнение на " + amount + ", баланс: " + balance);
    }

    public synchronized void withdraw(int amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("Недостаточно средств на счете " + accountNumber);
        }
        balance -= amount;
        System.out.println("Счет " + accountNumber + ": Снятие " + amount + ", баланс: " + balance);
    }
}

class Bank {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount(1, 1000, 5000);
        BankAccount account2 = new BankAccount(2, 1500, 5000);

        Thread thread1 = new Thread(() -> {
            try {
                account1.deposit(500);
                account1.withdraw(200);
            } catch (MaxBalanceExceededException | InsufficientFundsException e) {
                System.out.println("Ошибка: " + e.getMessage());
            }
        });

        Thread thread2 = new Thread(() -> {
            try {
                account2.deposit(800);
                account2.withdraw(1200);
            } catch (MaxBalanceExceededException | InsufficientFundsException e) {
                System.out.println("Ошибка: " + e.getMessage());
            }
        });

        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}


/*
	Данное решение создаёт два счёта и два потока, которые выполняют операции пополнения и снятия денег с этих счетов. Каждый метод "deposit" и "withdraw" объекта "BankAccount" синхронизирован для предотвращения возможных гонок (т.е. при одновременных доступах из разных потоков).
*/