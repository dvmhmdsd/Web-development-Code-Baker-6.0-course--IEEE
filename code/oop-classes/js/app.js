// Book Class
function Book(title, desc, author) {
  this.title = title;
  this.desc = desc;
  this.author = author;
}

// UI Class
function UI() {}

UI.displayBooks = function(books) {
  if (books) {
    books.forEach(book => this.createCardBook(book));
  }
};

UI.createCardBook = data => {
  let card = UI.createElement("article", "card");

  let cardTitle = UI.createElement("h2", "card-title", data.title);

  let cardDesc = UI.createElement("p", "card-desc", data.desc);

  let cardAuthor = UI.createElement("p", "card-author", data.author);

  let removeButton = UI.createElement(
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
};

UI.createElement = (el, className, content) => {
  let element = document.createElement(el);

  element.className = className;

  if (content) element.innerHTML = content;

  return element;
};

UI.removeElement = target => {
  target.parentElement.remove();
  UI.showAlert("success-message", "Element removed successfully");
};

UI.showAlert = function(className, content) {
  let errorMsg = this.createElement("p", `${className}`, `${content}`);

  document
    .querySelector(".container")
    .insertBefore(errorMsg, document.querySelector("#book-form"));

  setTimeout(() => document.querySelector(`.${className}`).remove(), 2000);
};

// Store Class
function Store() {}

Store.prototype.getbooks = () => {
  let books;
  if (!localStorage.getItem("books")) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }

  return books;
};

Store.prototype.saveBook = function(book) {
  let books = this.getbooks();

  books.push(book);

  localStorage.setItem("books", JSON.stringify(books));
};

Store.prototype.removeBook = function(title) {
  // debugger;
  let store = this.getbooks();

  store.forEach((element, i) => {
    if (element.title === title) {
      store.splice(i, 1);
    }
  });

  localStorage.setItem("books", JSON.stringify(store));
};

// Display event
document.addEventListener("DOMContentLoaded", () => {
  UI.displayBooks(Store.prototype.getbooks());
});

// Create Event
document.querySelector("#book-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const desc = document.querySelector("#desc").value;
  const author = document.querySelector("#author").value;

  // validate the form
  if (title === "" || desc === "" || author === "") {
    UI.showAlert("error-message", "Please fill these fields", this);
    return;
  }

  // instanitiate the book
  let book = new Book(title, desc, author);

  // add book to ui
  //   debugger;
  UI.createCardBook(book);

  UI.showAlert("success-message", "Element added successfully");

  // save book to the store
  Store.prototype.saveBook(book);

  // reset the form
  this.reset();
});

// Remove Event
document.querySelector(".book-cards").addEventListener("click", e => {
  if (e.target.classList.contains("fa-trash-alt")) {
    Store.prototype.removeBook(
      e.target.parentElement.parentElement.querySelector(".card-title")
        .innerText
    );

    UI.removeElement(e.target.parentElement);
  }
});
