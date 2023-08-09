package views;

import models.Table;
import presenters.View;
import presenters.ViewObserver;

import java.util.Collection;
import java.util.Date;

public class BookingView implements View {

    private ViewObserver observer;

    public void showTables(Collection<Table> tables){
        for (Table table: tables) {
            System.out.println(table);
        }
    }

    public void showReservationTableResult(int reservationId){
        System.out.printf("Столик успешно забронирован. Номер вашей брони: #%d\n", reservationId);
    }

    @Override
    public void setObserver(ViewObserver observer) {
        this.observer = observer;
    }

    public void reservationTable(Date reservationDate, int tableNo, String name){
        observer.onReservationTable(reservationDate, tableNo, name);
    }

    /**
     * Метод для изменения бронирования столика.
     * Сначала вызывается метод наблюдателя для отмены старого бронирования,
     * затем вызывается метод наблюдателя для бронирования столика на новое время.
     *
     * @param oldReservationTable Номер столика с предыдущим бронированием
     * @param reservationDate Новая дата бронирования
     * @param tableNo Номер столика для нового бронирования
     * @param name Имя для нового бронирования
     */
    public void changeReservationTable(int oldReservationTable, Date reservationDate, int tableNo, String name){
        // Обратимся к наблюдателю для отмены старого бронирования
        observer.onCancelReservation(oldReservationTable);

        // Обратимся к наблюдателю для бронирования столика на новое время
        observer.onReservationTable(reservationDate, tableNo, name);
    }
}
