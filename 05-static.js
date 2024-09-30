class Book {
  static bookShelf = [];

  constructor(title, author, isVIP) {
    this.title = title;
    this.author = author;
    Book.bookShelf.push(this);
    this.price = 20;
    this.isVIP = isVIP;

    if (isVIP) {
      this.#applyDiscount();
    }
  }

  #applyDiscount() {
    this.price = this.price / 2;
  }
}

const myBook = new Book("Harry Potter", "J.K. Rowling", true);
console.log(myBook);

myBook.#privado = false;

console.log(Object.keys(Book));
