# Makefile для управления проектом сканирования сети на Python

# Название виртуального окружения
VENV := venv

# Файл с зависимостями
REQUIREMENTS := requirements.txt

.PHONY: install run clean help

# Установка зависимостей
install:
	@echo "Создание виртуального окружения и установка зависимостей..."
	python3 -m venv $(VENV)
	$(VENV)/bin/pip install --upgrade pip
	$(VENV)/bin/pip install -r $(REQUIREMENTS)
	@echo "Установка завершена."

# Запуск программы
run:
	@echo "Запуск программы..."
	$(VENV)/bin/python main.py

# Очистка проекта
clean:
	@echo "Удаление виртуального окружения и временных файлов..."
	rm -rf $(VENV)
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	@echo "Очистка завершена."

# Помощь по доступным командам
help:
	@echo "Доступные команды:"
	@echo "  make install - Установить виртуальное окружение и зависимости"
	@echo "  make run     - Запустить программу"
	@echo "  make clean   - Удалить виртуальное окружение и временные файлы"
	@echo "  make help    - Отобразить это сообщение"
