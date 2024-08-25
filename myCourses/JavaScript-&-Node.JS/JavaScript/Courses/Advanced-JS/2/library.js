class Library {
  #books = [];

  constructor(initialBooks = []) {
    // Проверка на дубликаты
    const titles = initialBooks.map(book => book.title);
    const hasDuplicates = titles.some((title, index) => titles.indexOf(title) !== index);
    if (hasDuplicates) {
      throw new Error('Initial book list contains duplicates.');
    }

    // Инициализация приватного свойства #books
    this.#books = [...initialBooks];
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.some(book => book.title === title)) {
      throw new Error(`Book titled "${title}" already exists.`);
    }
    this.#books.push({ title });
  }

  removeBook(title) {
    const bookIndex = this.#books.findIndex(book => book.title === title);
    if (bookIndex === -1) {
      throw new Error(`Book titled "${title}" does not exist.`);
    }
    this.#books.splice(bookIndex, 1);
  }

  hasBook(title) {
    return this.#books.some(book => book.title === title);
  }
}

// Пример использования класса
const myLibrary = new Library([{ title: "1984" }, { title: "Brave New World" }]);
console.log(myLibrary.allBooks); // [{ title: "1984" }, { title: "Brave New World" }]
myLibrary.addBook("Fahrenheit 451");
console.log(myLibrary.allBooks); // [{ title: "1984" }, { title: "Brave New World" }, { title: "Fahrenheit 451" }]
console.log(myLibrary.hasBook("1984")); // true
myLibrary.removeBook("1984");
console.log(myLibrary.allBooks); // [{ title: "Brave New World" }, { title: "Fahrenheit 451" }]
