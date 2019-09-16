# Session 7 Summary - OOP

1. Prototypal pattern:-

   - Constructor function:

   ```javascript
   function Book(title, desc, author) {
     this.title = title;
     this.desc = desc;
     this.author = author;
   }
   ```

   - Instanitiate it:

   ```javascript
   let book = new Book("title 1", "awesome book", "Mohamed"); // Book {title: "title 1", desc: "awesome book", author: "Mohamed"}
   ```

   - add through prototype:

   ```javascript
   Book.prototype.addBook = function(book) {
     books.push(book);
   };
   ```

2. Class pattern:-

   ```javascript
   class Book {
     constructor(title, desc, author) {
       this.title = title;
       this.desc = desc;
       this.author = author;
     }

     addBook(book) {
       books.push(book);
     }
   }
   ```

3. Modules:-
   `ui.js`

   ```javascript
   export default class UI {
     createCard() {
       // create
     }
   }
   ```

   `app.js`

   ```javascript
   import UI from "./ui.js";

   let ui = new UI();

   ui.createCard();
   ```


**Resources**
1. [Awesome youtube tutorial about OOP - the net ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7)
2. [Awesome video explains OOP - Mosh](https://www.youtube.com/watch?v=pTB0EiLXUC8)
3. [FreeCodeCamp tuts](https://www.freecodecamp.org/news/an-introduction-to-object-oriented-programming-in-javascript-8900124e316a/)
4. [OOP In JavaScript: What You NEED to Know - jsissexy](https://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/)
5. [MDN reference](https://developer.mozilla.org/en-US/docs/Glossary/OOP)
