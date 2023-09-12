import java.io.FileWriter;
import java.io.IOException;
import java.util.PriorityQueue;
import java.util.Random;

public class ToyShop {
    private static final String[] toyData = {
        "12 конструктор",
        "24 робот",
        "36 кукла",
		"48 пазл",
		"60 мяч"
    };

    private static final Random random = new Random();

    public static void main(String[] args) {
        PriorityQueue<Toy> toyQueue = new PriorityQueue<>();
        for (String toyInfo : toyData) {
            String[] parts = toyInfo.split(" ");
            int id = Integer.parseInt(parts[0]);
            String name = parts[1];
            int frequency = Integer.parseInt(parts[2]);
            toyQueue.add(new Toy(id, name, frequency));
        }

        try {
            FileWriter fileWriter = new FileWriter("toy_results.txt");
            for (int i = 0; i < 10; i++) {
                Toy randomToy = getRandomToy(toyQueue);
                fileWriter.write(String.valueOf(randomToy.getId()) + "\n");
            }
            fileWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static Toy getRandomToy(PriorityQueue<Toy> toyQueue) {
        int totalFrequency = 0;
        for (Toy toy : toyQueue) {
            totalFrequency += toy.getFrequency();
        }

        int randomValue = random.nextInt(totalFrequency);
        int currentSum = 0;
        for (Toy toy : toyQueue) {
            currentSum += toy.getFrequency();
            if (randomValue < currentSum) {
                return toy;
            }
        }

        // Возврат значения по умолчанию, если что-то пошло не так
        return new Toy(0, "Неизвестная игрушка", 0);
    }
}

class Toy implements Comparable<Toy> {
    private int id;
    private String name;
    private int frequency;

    public Toy(int id, String name, int frequency) {
        this.id = id;
        this.name = name;
        this.frequency = frequency;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getFrequency() {
        return frequency;
    }

    @Override
    public int compareTo(Toy otherToy) {
        return Integer.compare(this.frequency, otherToy.frequency);
    }
}
