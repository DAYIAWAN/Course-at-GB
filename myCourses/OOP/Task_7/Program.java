package Program;

import singleton.Settings;
import observer.Student;
import observer.Publisher;
import observer.Observer;
import observer.Master;
import observer.JobAgency;
import observer.Company;
import factory.Worker;
import factory.Freelancer;
import factory.EmployeeType;
import builder.OrderBuilder;
import builder.Order;
import adapter.ST500;
import adapter.MeteoSensor;
import adapter.AdapterST500;

public class Program {

    public static void main(String[] args) {
        // Create application settings using Singleton
        Settings appSettings = Settings.getInstance();
        appSettings.setLanguage("English");
        appSettings.setTheme("Dark");

        // Create and register students in the publisher
        Publisher publisher = new JobAgency(); // Assuming JobAgency implements Publisher
        Observer student1 = new Student("Ivanov");
        Observer student2 = new Student("Petrov");
        publisher.registerObserver(student1);
        publisher.registerObserver(student2);

        // Create a master and add them as an observer
        Observer master = new Master("Sidorov");
        publisher.registerObserver(master);

        // Change settings and notify all observers
        appSettings.setLanguage("Russian");
        publisher.notifyObservers();

        // Create vacancies and a company
        Company company = new Company("TechCorp");
        company.createVacancy("Programmer");
        company.createVacancy("Data Analyst");

        // Create a job agency
        JobAgency jobAgency = (JobAgency) publisher; // Cast to JobAgency
        Observer agencyObserver = new Student("Sidorov");
        jobAgency.registerObserver(agencyObserver);

        // Send vacancies to students through the agency
        jobAgency.sendVacanciesToStudents(company.getVacancies());

        // Create employees using the factory
        Worker fullTimeEmployee = EmployeeType.FULL_TIME.createEmployee("Ivanov");
        Worker partTimeEmployee = EmployeeType.PART_TIME.createEmployee("Petrov");
        Freelancer freelancer = EmployeeType.FREELANCER.createEmployee("Sidorov");

        // Create an order using the Builder pattern
        OrderBuilder orderBuilder = new OrderBuilder();
        Order order = orderBuilder.addItem("Item 1", 2)
                               .addItem("Item 2", 1)
                               .setShippingAddress("123 Main St")
                               .build();

        // Use an adapter to read temperature data from a sensor
        MeteoSensor sensor = new ST500();
        AdapterST500 adapter = new AdapterST500(sensor);
        double temperature = adapter.getTemperature();

        // Display data
        System.out.println("Temperature: " + temperature);
    }
}
