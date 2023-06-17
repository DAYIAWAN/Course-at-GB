/*
Задача:
	Необходимо реализовать метод разворота связного списка (двухсвязного или односвязного на выбор).

		->>> В качестве данных взяты телефонные контакты (10 номеров/абонентов).
*/

import java.util.Iterator;

public class Main {

  public static void main(String[] args) {
    SingleLinkList<Contact> contactList = new SingleLinkList<>();

    contactList.addToEnd(new Contact(121, "Абонент #1", "+7 (926) 000-00-01 >>> Абонент #1"));
    contactList.addToEnd(new Contact(122, "Абонент #2", "+7 (926) 000-00-02 >>> Абонент #2"));
    contactList.addToEnd(new Contact(123, "Абонент #3", "+7 (926) 000-00-03 >>> Абонент #3"));
    contactList.addToEnd(new Contact(124, "Абонент #4", "+7 (926) 000-00-04 >>> Абонент #4"));
    contactList.addToEnd(new Contact(125, "Абонент #5", "+7 (926) 000-00-05 >>> Абонент #5"));
    contactList.addToEnd(new Contact(126, "Абонент #6", "+7 (926) 000-00-06 >>> Абонент #6"));
    contactList.addToEnd(new Contact(127, "Абонент #7", "+7 (926) 000-00-07 >>> Абонент #7"));
    contactList.addToEnd(new Contact(128, "Абонент #8", "+7 (926) 000-00-08 >>> Абонент #8"));
    contactList.addToEnd(new Contact(129, "Абонент #9", "+7 (926) 000-00-09 >>> Абонент #9"));
    contactList.addToEnd(new Contact(130, "Абонент #10", "+7 (926) 000-00-10 >>> Абонент #10"));

    for (Object contact : contactList) {
      System.out.println(contact);
    }
    contactList.reverse();

    System.out.println("-------------------------------------");

    for (Object contact : contactList) {
      System.out.println(contact);
    }
  }

  static class Contact {

    int id;
    String name;
    String phone;

    public Contact(int id, String name, String phone) {
      this.id = id;
      this.name = name;
      this.phone = phone;
    }

    @Override
    public String toString() {
      return "Contact{" +
          "id=" + id +
          ", name='" + name + '\'' +
          ", phone='" + phone + '\'' +
          '}';
    }
  }


  /**
   * Класс списка.
   *
   * @param <T>
   */
  public static class SingleLinkList<T> implements Iterable {

    ListItem<T> head;
    ListItem<T> tail;

    @Override
    public Iterator iterator() {
      return new Iterator<T>() {
        ListItem<T> current = head;

        @Override
        public boolean hasNext() {
          return current != null;
        }

        @Override
        public T next() {
          T data = current.data;
          current = current.next;
          return data;
        }
      };
    }

    /**
     * Класс отдельного элемента.
     *
     * @param <T>
     */
    private static class ListItem<T> {

      T data;
      ListItem<T> next;
    }

    //Голова пустая.
    public boolean isEmpty() {
      return head == null;
    }

    //Заполнение списка.
    public void addToEnd(T item) {

      //Выделение памяти для списка.
      ListItem<T> newItem = new ListItem<>();
      newItem.data = item;

      //Если, голова и хвост пустые.
      if (isEmpty()) {
        head = newItem;
        tail = newItem;
      } else { //Если, не пустая, то передаём элементу адрес и ставим в хвост.
        tail.next = newItem;
        tail = newItem;
      }
    }

    //метод разворота списка
    public void reverse() {
      if (!isEmpty() && head.next != null) {//Если голова не равна нулю.
        tail = head;
        ListItem<T> current = head.next;
        head.next = null;
        while (current != null) {
          ListItem<T> next = current.next;
          current.next = head;
          head = current;
          current = next;
        }
      }
    }
  }
}
