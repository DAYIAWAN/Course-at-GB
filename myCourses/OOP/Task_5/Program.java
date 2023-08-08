/*
Задача:
	Доработать систему бронирования столиков (разработанную на семинаре, исходный код которой прилагается).
	Метод "changeReservationTable" должен ЗАРАБОТАТЬ!
*/

package mypackage;

import models.Table;
import models.TableModel;
import models.Reservation
import presenters.BookingPresenter;
import presenters.ViewObserver
import presenters.Model;
import presenters.View;
import views.BookingView;

import java.util.ArrayList;
import java.util.Date;

public class Program {

    public static void main(String[] args) {

        View view = new BookingView();
        Model model = new TableModel();

        BookingPresenter bookingPresenter = new BookingPresenter(view, model);
        bookingPresenter.showTables();

        view.reservationTable(new Date(), 3, "Станислав");

        // Вызов доработанного метода changeReservationTable
        view.changeReservationTable(1001, new Date(), 4, "Станислав");
    }

    // Интерфейс Model
    public interface Model {
        void changeReservationTable(int tableNumber, Date date, int numberOfPersons, String reservationName);
    }

    // Класс BookingPresenter (модифицированный)
    public static class BookingPresenter {
        private final View view;
        private final Model model;

        public BookingPresenter(View view, Model model) {
            this.view = view;
            this.model = model;
        }

        public void showTables() {
            // Код для отображения столиков на экране
        }
    }

    // Класс BookingView (модифицированный)
    public static class BookingView implements View {

        private Model model; // Добавим поле model

        // Конструктор для инициализации model
        public BookingView() {
            this.model = new TableModel();
        }

        @Override
        public void changeReservationTable(int tableNumber, Date date, int numberOfPersons, String reservationName) {
            model.changeReservationTable(tableNumber, date, numberOfPersons, reservationName);
        }
    }

    // Класс TableModel (модифицированный)
    public static class TableModel implements Model {
        private ArrayList<Table> tables = new ArrayList<>();

        @Override
        public void changeReservationTable(int tableNumber, Date date, int numberOfPersons, String reservationName) {
            for (Table table : tables) {
                if (table.getNumber() == tableNumber) {
                    table.setDate(date);
                    table.setNumberOfPersons(numberOfPersons);
                    table.setReservationName(reservationName);
                    break;
                }
            }
        }
    }
}
