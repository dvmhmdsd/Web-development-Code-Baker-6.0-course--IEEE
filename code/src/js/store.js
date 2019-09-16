// Store Class
export default class Store {
  getbooks() {
    let books;
    if (!localStorage.getItem("books")) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  saveBook(book) {
    let books = this.getbooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  removeBook(title) {
    // debugger;
    let store = this.getbooks();

    store.forEach((element, i) => {
      if (element.title === title) {
        store.splice(i, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(store));
  }
}
