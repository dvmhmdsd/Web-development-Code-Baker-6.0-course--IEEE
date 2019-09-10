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

# Without bonus, with animation !

First, I'd like to thank [Animate.css](https://github.com/daneden/animate.css#usage-with-javascript) on github for this useful animation function. So let's see it

    //Useful animation function, source : https://github.com/daneden/animate.css#usage-with-javascript
    function animateCSS(el, anim, callback) {
        //First add the animation class to the element
        el.classList.add(anim);

        //Define a function to apply after the end of the animation
        function endOfAnimation() {
            el.classList.remove(anim);
            el.removeEventListener("animationend", endOfAnimation);
            if (typeof callback === "function") callback();
        }

        //Make the function a handler to the animationend event of the element
        el.addEventListener("animationend", endOfAnimation);
    }

What it does is that it adds the animation class to the `messageElement`, then waits untill the animation ends to remove it and call the `callback` function.

But how about the animation class itself ?!
in `style.css`, we first define how the animation works using **Keyframes**. [Read more about keyframes in CSS-Tricks](https://css-tricks.com/snippets/css/keyframe-animation-syntax/) ...

    ....
    /* Adding fadeIn, fadeOut Animation */
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    ....

Then we define an animation class for each event

    ....
    .fade-in {
        animation: fadeIn 0.5s ease;
    }

    .fade-out {
        animation: fadeOut 0.5s ease;
    }
    ....

> **Note**: It's always good practice to separate animation from the main styling

> **Another Note**: This animation well only work for Chrome, if you want it to work for the other browsers add the prefixed rules for them, for example `-moz-` for Mozilla FireFox, `-o-` for Opera

Finally we modify the `displayMessage` function in order to apply animation on show and hide as follows

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

        //Here we use animation to show the message with fade-in effect then hide it with fade-out effect using the useful function mentioned below
        animateCSS(messageElement, "fade-in", () => {
            setTimeout(function() {
                animateCSS(messageElement, "fade-out", () => {
                    messageElement.style.display = "none";
                    messageElement.classList.remove(messageClass);
                });
            }, 2000);
        });
    }
