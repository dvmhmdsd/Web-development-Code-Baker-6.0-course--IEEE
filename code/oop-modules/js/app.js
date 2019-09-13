import Book from './book.js';
import UI from './ui.js';
import Store from './store.js';

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
