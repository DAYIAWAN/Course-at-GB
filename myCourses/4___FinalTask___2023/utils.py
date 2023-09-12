# utils.py

import json
import os
import datetime

def import_notes(data_file):
    try:
        with open(data_file, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def export_notes(data_file, notes):
    with open(data_file, "w") as file:
        json.dump(notes, file)

def add_note(data_file):
    title = input("Введите заголовок заметки: ")
    message = input("Введите текст заметки: ")
    timestamp = str(datetime.datetime.now())

    notes = import_notes(data_file)

    note = {"id": len(notes) + 1, "title": title, "message": message, "timestamp": timestamp}
    notes.append(note)

    export_notes(data_file, notes)

    print("Заметка успешно добавлена.")

def list_notes(data_file):
    notes = import_notes(data_file)

    for note in notes:
        print(f"ID: {note['id']}, Заголовок: {note['title']}, Дата: {note['timestamp']}")

def view_note(data_file):
    note_id = int(input("Введите ID заметки для просмотра: "))

    notes = import_notes(data_file)

    for note in notes:
        if note["id"] == note_id:
            print(f"Заголовок: {note['title']}")
            print(f"Дата: {note['timestamp']}")
            print(f"Текст: {note['message']}")
            return

    print("Заметка с указанным ID не найдена.")

def edit_note(data_file):
    note_id = int(input("Введите ID заметки для редактирования: "))

    notes = import_notes(data_file)

    for note in notes:
        if note["id"] == note_id:
            new_title = input("Введите новый заголовок: ")
            new_message = input("Введите новый текст: ")
            note["title"] = new_title
            note["message"] = new_message
            note["timestamp"] = str(datetime.datetime.now())

            export_notes(data_file, notes)

            print("Заметка успешно отредактирована.")
            return

    print("Заметка с указанным ID не найдена.")

def delete_note(data_file):
    note_id = int(input("Введите ID заметки для удаления: "))

    notes = import_notes(data_file)

    for note in notes:
        if note["id"] == note_id:
            notes.remove(note)

            export_notes(data_file, notes)

            print("Заметка успешно удалена.")
            return

    print("Заметка с указанным ID не найдена.")
