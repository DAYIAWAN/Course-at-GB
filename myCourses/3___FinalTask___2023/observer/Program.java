package observer;

public class Program {

    public static void main(String[] args) {
        Publisher jobAgency = new JobAgency(); // Создание издателя (рассылки вакансий)
        
        // Создание компаний с указанием издателя и других параметров
        Company google = new Company(jobAgency, "Google", 120000);
        Company yandex = new Company(jobAgency, "Yandex", 95000);
        Company geekBrains = new Company(jobAgency, "GeekBrains", 90000);
        
        // Создание различных типов соискателей
        Student petrov = new Student("Petrov");
        Master ivanov = new Master("Ivanov");
        Master sidorov = new Master("Sidorov");

        // Регистрация наблюдателей (соискателей) в издателе
        jobAgency.registerObserver(petrov);
        jobAgency.registerObserver(ivanov);
        jobAgency.registerObserver(sidorov);

        // Симуляция нескольких раундов размещения вакансий
        for (int i = 0; i < 3; i++) {
            google.needEmployee(); // Компания Google размещает вакансию
            yandex.needEmployee(); // Компания Yandex размещает вакансию
            geekBrains.needEmployee(); // Компания GeekBrains размещает вакансию
        }
    }
}
