package observer;

import java.util.Random;

public class Company {

    private Random random = new Random();

    Publisher jobAgency;

    private String name;

    private int maxSalary;

    // Добавляем enum для типов вакансий
    public enum JobType {
		PROGRAMMER,
		PRO-TESTER,
		DATA-ANALYST,
		DESIGNER,
		MARKETING
        // Можете добавить другие типы вакансий по мере необходимости
    }

    public Company(Publisher jobAgency, String name, int maxSalary) {
        this.jobAgency = jobAgency;
        this.name = name;
        this.maxSalary = maxSalary;
    }

    public void needEmployee(JobType jobType){
        int salary = random.nextInt(maxSalary);
        String offerText = "Мы предлагаем вам работу " + jobType + " в компании " + name + " со зарплатой $" + salary;
        jobAgency.sendOffer(offerText, salary);
    }
}
