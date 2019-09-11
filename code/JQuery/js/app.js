// select the form
var form = $("#book-form");

// select the input and textarea fields
var title = $(".book-title input");
var author = $(".book-author input");
var desc = $(".book-desc textarea");

// handle submit event to form
form.on("submit", function(event) {
  // prevent the default action
  event.preventDefault();
  // debugger;
  // validate the form
  var formfields = $(this).find("input, textarea");
  formfields.each(function(i, field) {
    var errorMsg = createElement(
      "p",
      "error-message",
      "Please fill this field"
    );

    if (
      $(field).attr("required") &&
      $(field).val() == "" &&
      !$(field).hasClass("invalid")
    ) {
      $(field).addClass("invalid");
      $(field)
        .parent()
        .append(errorMsg);

      return;
    } else {
      // reset the field if it's valid
      $(field).removeClass("invalid");
      if ($(field).next(".error-message")) {
        $(field)
          .next(".error-message")
          .hide();
      }
    }
  });

  //   create object of book
  var book = {
    title: $(title).val(),
    author: $(author).val(),
    desc: $(desc).val()
  };

  //   make array of objects --> it's value will come from localStorage
  var cards;
  if (localStorage.getItem("cards") == null) {
    cards = [];
  } else {
    cards = JSON.parse(localStorage.getItem("cards"));
  }

  //   add the book object to the array
  cards.push(book);
  //   store in localStorage
  localStorage.setItem("cards", JSON.stringify(cards));

  // create the card with the content of form data
  createbookCard(book);

  //   reset the form
  this.reset();
});

// show items on loading
$(document).ready(function() {
  // check if the local storage is empty
  var cards;
  if (localStorage.getItem("cards") == null) {
    cards = [];
  } else {
    cards = JSON.parse(localStorage.getItem("cards"));
  }

  //   iterate over the array of cards
  cards.each(function(i, element) {
    createbookCard(element);
  });
});

$(".book-cards").on("click", function(e) {
  if (
    $(e.target).hasClass("fa-trash-alt")
  ) {
    var store = JSON.parse(localStorage.getItem("cards"));

    store.each(function(i, el) {
      // use .parents() in jquery
      if (
        el.title ===
          $(e.target)
            .parent()
            .sibling(".card-title")
            .text()
      ) {
        return store.splice(i, 1);
      }
    });

    localStorage.setItem("cards", JSON.stringify(store));
  }
});

// make the code DRY --> make a function to create a card with data provided
function createbookCard(data) {
  var card = createElement("article", "card");

  var cardTitle = createElement("h2", "card-title", data.title);

  var cardDesc = createElement("p", "card-desc", data.desc);

  var cardAuthor = createElement("p", "card-author", data.author);

  var removeButton = createElement(
    "button",
    "card-remove",
    '<i class="fa fa-trash-alt"></i>'
  );

  $(removeButton).on("click", function() {
    // remove from UI
    $(this)
      .parent()
      .fadeOut();
  });

  //   append these elements into card and append it to parent
  $(card)
    .append(cardTitle, cardDesc, cardAuthor, removeButton)
    .appendTo($(".book-cards"));
}

// create UI element
function createElement(el, className, content) {
  var element = document.createElement(el);

  $(element).addClass(className);

  if (content) {
    $(element).html(content);
  }

  return element;
}
