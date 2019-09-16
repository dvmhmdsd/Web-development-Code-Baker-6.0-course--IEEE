// UI Class
export default class UI {
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
