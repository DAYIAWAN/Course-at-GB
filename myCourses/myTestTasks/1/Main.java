import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.CheckBox;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.Region;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class CustomWidgetApp extends Application {
    @Override
    public void start(Stage primaryStage) {
        // Создаем корневой контейнер HBox
        HBox root = new HBox();

        // Создаем текстовое поле
        Text text = new Text("Какой-то текст");

        // Создаем разделительную линию (можно реализовать пунктирную линию по-разному)
        Region separator = new Region();
        separator.getStyleClass().add("separator"); // Задаем стиль для пунктирной линии

        // Создаем чекбокс
        CheckBox checkBox = new CheckBox();

        // Настроим максимальное расширение средней ячейки
        HBox.setHgrow(separator, Priority.ALWAYS);

        // Добавляем компоненты в корневой контейнер
        root.getChildren().addAll(text, separator, checkBox);

        // Создаем сцену и устанавливаем корневой контейнер
        Scene scene = new Scene(root, 400, 100);

        // Задаем стиль для пунктирной линии
        scene.getStylesheets().add(getClass().getResource("styles.css").toExternalForm());

        // Устанавливаем сцену на подмостки
        primaryStage.setScene(scene);

        // Устанавливаем заголовок окна
        primaryStage.setTitle("Custom Widget");

        // Отображаем окно
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
