// select the form
var form = document.querySelector("#book-form");

// select the input and textarea fields
var title = document.querySelector(".book-title input");
var author = document.querySelector(".book-author input");
var desc = document.querySelector(".book-desc textarea");

// handle submit event to form
form.addEventListener("submit", function(event) {
    // prevent the default action
    event.preventDefault();

    // validate the form
    var error = 0;
    var formfields = this.querySelectorAll("input, textarea");
    formfields.forEach(function(field) {
        var errorMsg = createElement(
            "p",
            "error-message",
            "Please fill this field"
        );

        if (
            field.hasAttribute("required") &&
            field.value == "" &&
            !field.classList.contains("invalid")
        ) {
            field.classList.add("invalid");
            field.parentElement.appendChild(errorMsg);

            return;
        } else {
            // reset the field if it's valid
            field.classList.remove("invalid");
            if (field.nextElementSibling) {
                field.nextElementSibling.remove();
            }
        }
    });

    // create object of book
    var book = {
        title: title.value,
        desc: desc.value,
        author: author.value
    };

    // create the card with the content of form data
    // 1. create the card
    var card = createElement("article", "card");
    // create the content of the card with coresponding classes and text content
    var cardTitle = createElement("h2", "card-title", book.title);

    var cardDesc = createElement("p", "card-desc", book.desc);

    var CardAuthor = createElement("p", "card-author", book.author);

    var removeButton = createElement(
        "button",
        "card-remove",
        '<i class="fa fa-trash-alt"></i>'
    );

    //   attach 'click' event to the removeButton
    removeButton.addEventListener("click", function() {
        this.parentElement.remove();
        displayMessage(false); //Display the proper message of removing a book
    });

    // 2. append children to card
    card.appendChild(cardTitle);
    //   append the other to card
    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    card.appendChild(CardAuthor);
    card.appendChild(removeButton);
    // 3. append the card to book-cards
    document.querySelector(".book-cards").appendChild(card);

    //   reset the form
    this.reset();
    //   or
    //   form.reset();
    displayMessage(true); //Displaying the proper message for Adding a new book
});

// create UI element
function createElement(el, className, content) {
    var element = document.createElement(el);

    element.className = className;

    if (content) {
        element.innerHTML = content;
    }

    return element;
}

//Task 5 Solution
function displayMessage(addOrDelete) {
    //addOrDelete is a boolean param, true for add false for delete
    let messageText = addOrDelete
        ? "New Book Added successfully"
        : "Book removed successfully";
    let messageClass = addOrDelete ? "success" : "fail";

    const messageElement = document.querySelector(".message");

    //First, fill the inner HTML of the message with the proper text
    messageElement.innerHTML = messageText;

    //Second, add the proper class to it
    messageElement.classList.add(messageClass);

    //Third, show the message
    messageElement.style.display = "block";

    //Fourth, hide the message after 2 sec and revert style changes
    setTimeout(function() {
        messageElement.style.display = "none";
        messageElement.classList.remove(messageClass);
    }, 2000);
}
