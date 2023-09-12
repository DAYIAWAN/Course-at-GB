import datetime
import os
import json
from utils import import_notes, export_notes, add_note, list_notes, view_note, edit_note, delete_note

data_file = "notes.json"

# Основной цикл программы
while True:
    print("\nДоступные команды:")
    print("1. Добавить заметку")
    print("2. Список заметок")
    print("3. Просмотреть заметку")
    print("4. Редактировать заметку")
    print("5. Удалить заметку")
    print("6. Экспорт заметок в файл")
    print("7. Импорт заметок из файла")
    print("8. Выход")

    choice = input("Выберите команду: ")

    if choice == "1":
        add_note(data_file)
    elif choice == "2":
        list_notes(data_file)
    elif choice == "3":
        view_note(data_file)
    elif choice == "4":
        edit_note(data_file)
    elif choice == "5":
        delete_note(data_file)
    elif choice == "6":
        export_notes(data_file, import_notes(data_file))
        print("Заметки успешно экспортированы в файл.")
    elif choice == "7":
        export_notes(data_file, import_notes(data_file))
        print("Заметки успешно импортированы из файла.")
    elif choice == "8":
        break
    else:
        print("Некорректная команда. Пожалуйста, выберите существующую команду из списка.")
