// Book Class
class Book {
  constructor(title, desc, author) {
    this.title = title;
    this.desc = desc;
    this.author = author;
  }
}

// UI Class
// function UI() {}
class UI {
  displayBooks(books) {
    books.forEach(book => this.createCardBook(book));
  }

  createCardBook(data) {
    let { title, desc, author } = data;
    let card = this.createElement("article", "card");

    let cardTitle = this.createElement("h2", "card-title", title);

    let cardDesc = this.createElement("p", "card-desc", desc);

    let cardAuthor = this.createElement("p", "card-author", author);

    let removeButton = this.createElement(
      "button",
      "card-remove",
      '<i class="fa fa-trash-alt"></i>'
    );

    //   append these elements into card
    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    card.appendChild(cardAuthor);
    card.appendChild(removeButton);

    // append card into book cards
    document.querySelector(".book-cards").appendChild(card);
  }

  createElement(el, className, content) {
    let element = document.createElement(el);

    element.className = className;

    if (content) element.innerHTML = content;

    return element;
  }

  removeElement(target) {
    target.parentElement.remove();
    this.showAlert("success-message", "Element removed successfully");
  }

  showAlert(className, content) {
    let errorMsg = this.createElement("p", `${className}`, `${content}`);

    document
      .querySelector(".container")
      .insertBefore(errorMsg, document.querySelector("#book-form"));

    setTimeout(() => document.querySelector(`.${className}`).remove(), 2000);
  }
}

// Store Class
class Store {
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

// instanitiate the ui & store classes to work with it
let ui = new UI();
let store = new Store();

// Display event
document.addEventListener("DOMContentLoaded", () => {
  ui.displayBooks(store.getbooks());
});

// Create Event
document.querySelector("#book-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const desc = document.querySelector("#desc").value;
  const author = document.querySelector("#author").value;

  // validate the form
  if (title === "" || desc === "" || author === "") {
    ui.showAlert("error-message", "Please fill these fields", this);
    return;
  }

  // instanitiate the book
  let book = new Book(title, desc, author);

  // add book to ui
  //   debugger;
  ui.createCardBook(book);

  ui.showAlert("success-message", "Element added successfully");

  // save book to the store
  store.saveBook(book);

  // reset the form
  this.reset();
});

// Remove Event
document.querySelector(".book-cards").addEventListener("click", e => {
  if (e.target.classList.contains("fa-trash-alt")) {
    store.removeBook(
      e.target.parentElement.parentElement.querySelector(".card-title")
        .innerText
    );

    ui.removeElement(e.target.parentElement);
  }
});
