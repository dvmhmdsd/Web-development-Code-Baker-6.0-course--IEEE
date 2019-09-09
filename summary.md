# Session 5 Summary

1.  DOM Methods to access elements
    1. `document.getElementById()`
    2. `document.getElementsByTagName()`
    3. `document.getElementsByClassName()`
    4. `document.querySelector()`
    5. `document.querySelecorAll()`
2.  Creating new HTML DOM Elements `document.createElement()`
3.  Maipulating class using `className` property of DOM Elements
4.  Manipulating inner HTML content of an element using `innerHTML` property of DOM Elements
5.  Placing DOM Elements within the HTML using `appendChild()` method of the container DOM element
6.  Accessing the list of classes using `classList` property of DOM Elements. Adding class using `add()` method. Testing the existence of a class using `classList.contains()`.
7.  Testing Existance of an attribute using `hasAttribute()` method of DOM Elements
8.  Accessing the parent DOM Element using `parentElement` property
9.  Removing DOM Elements using `remove()` method of DOM Elements
10. Forms in the DOM and how to access the submitted values of the fields as follows :-

        var formElement = document.querySelector("#my-form");

        //The first line of code means that this will happen when the form is submitted
        formElement.onsubmit(function(event) {
            console.log(this.username) // this prints the value of the field whose name attribute is set to "username"

            console.log(this.email) //same, this prints the submitted value of the field whose name attribute is set to "email"

            this.reset(); //this cleans the form on submit
        });

11. Events
    1.  Adding a listener to an Event on a DOM Element using `addEventListener()` method of the DOM Elements.
    2.  Handeling the event by adding an event handler as a second parameter to the `addEventHandler()` method and passing the `event` parameter to it to access the information of the Event.
    3.  Preventing the default actions taken by an Event using `event.preventDefault()` inside the handler function of the Event.
    4.  Accessing the Event caller element using `this`.

**General Links** : [W3Schools HTML DOM Series](https://www.w3schools.com/js/js_htmldom.asp) - this is just the first lesson | [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) | [PART2 in js.info named Browser: Document, Events, Interfaces
](http://javascript.info/)

## Thank You :heart:
