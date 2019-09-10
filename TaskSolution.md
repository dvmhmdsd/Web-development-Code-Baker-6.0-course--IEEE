# First : Without Bonus, animation-less solution

In `index.html` we add a `div` with class `"message"`

        ....
        <!-- The title of the app -->
        <h1>
            <i class="fa fa-book-open"></i>
            Book <span> List </span>
        </h1>

        <!-- Here will go our message -->
        <div class="message"></div>
        ....

> Note: `(....)` means it's not the start or the end of the file

In `style.css` we style it and make it not displayed by default by the rule `display: none;`

    ....
    .message {
        display: none;
        margin: 15px auto;
        width: 78%;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 10px;
    }
    ....

In `app.js` We build this function

    function displayMessage(addOrDelete) {
        //addOrDelete is a boolean param, true for add false for delete

        //This tests (addOrDelete) flag, if true it sets the messageText to the first sentence, if false it goes to the second
        var messageText = addOrDelete
            ? "New Book Added successfully"
            : "Book removed successfully";

        //The same, tests (addOrRemove) and sets messageClass according to the value of it.
        var messageClass = addOrDelete ? "success" : "fail";

        //Here we access the HTML element of the message with DOM Methods
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

Now we call the function in the handler function of the form `submit` event with `addOrDelete = true` in order to show the add message

    // handle submit event to form
    form.addEventListener("submit", function(event) {
        .
        .
        .
        displayMessage(true); //Display the proper message for Adding a new book
    });

Also we call it in the handler of the `click` event of the delete button

    removeButton.addEventListener("click", function() {
        .
        .
        displayMessage(false); //Display the proper message for removing a book
    });
