class Book {
  constructor(title, author, quantity) {
    this.title = title;
    this.author = author;
    this.quantity = quantity;
  }
  addStock(num) { if (num>0) {
    this.quantity = this.quantity + num}
  }

  removeStock (num) { if (num>0) {
    this.quantity = this.quantity - num;
    if (this.quantity <0) {
      this.quantity = 0
    }
  }

  }

}



const book = new Book("Oryx and Crake", "Margaret Atwood", 10);
//return book.quantity;

book.addStock();
book.removeStock();

module.exports = Book;
