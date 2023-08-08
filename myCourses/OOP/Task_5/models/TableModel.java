package models;

import presenters.Model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

public class TableModel implements Model {

    private Collection<Table> tables;

    public Collection<Table> loadTables(){
        if (tables == null){
            tables = new ArrayList<>();

            tables.add(new Table());
            tables.add(new Table());
            tables.add(new Table());
            tables.add(new Table());
            tables.add(new Table());
        }

        return tables;
    }

    public int reservationTable(Date reservationDate, int tableNo, String name){
        for (Table table: loadTables()) {
            if (table.getNo() == tableNo){
                Reservation reservation = new Reservation(reservationDate, name);
                table.getReservations().add(reservation);
                return reservation.getId();
            }
        }
        throw new RuntimeException("Некорректный номер столика.");
    }

    public int changeReservationTable(int oldReservationNo, Date reservationDate, int tableNo, String Name){
        for (Table table : loadTables()) {
            for (Reservation reservation : table.getReservations()) {
                if (reservation.getId() == oldReservationNo) {
                    table.getReservations().remove(reservation); // Удаляем старую бронь
                    table.getReservations().add(new Reservation(reservationDate, Name)); // Бронируем на новую дату
                    return table.getReservations().get(table.getReservations().size() - 1).getId(); // Возвращаем ID новой брони
                }
            }
        }
        throw new RuntimeException("Некорректный номер брони.");
    }
}
