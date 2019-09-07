# Session 4 - Summary

1.  Functions

    - Creating a function

      1. Named

         ```javascript
         function functionName(parameters) {
             code here ..
         }
         ```

      1. Anonymous using function expression

         ```javascript
         var functionName = function(parameters) {
             code here ..
         }
         ```

    - Calling a function

           ```javascript
           function addTwoNumbers(x, y) {
               return x + y;
           }

           let sum = addTwoNumbers(10, 20); //this stores 30 in the variable sum

           console.log(addTwoNumbers(3, 5)); // this prints 8 to the console
           ```

    - passing a function as a parameter to another one

          ```javascript
          function printResult(x, y, func) { //func is a function
              console.log(func(x, y));
          }

          //So lets call the function
          printResults(3, 5, function(x, y) {
              return x+y;
          }); // this prints 8 in the console

          //or another way
          function addTwoNumbers(x, y) {
              return x + y;
          }

          //Let's call it again
          printResults(3, 5, addTwoNumbers) // this also prints 8 in the console

          ```

      **Links**:

    - [W3Schools](https://www.w3schools.com/js/js_functions.asp)
    - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
    - [js.info](https://javascript.info/function-basics)

2.  Objects:

    - [js.info](http://javascript.info/object-basics)

    Syntax Example

        ```javascript
        var person = {
            name: "John",
            age: 20
        };
        ```

    1. Concept of Objects
    2. Properties and methods
    3. Accessing properties using `(.)` or `[]`
    4. Check property existence
    5. deleting a prop.
    6. Referenced by default

3.  Arrays:

    - [W3Schools](https://www.w3schools.com/js/js_arrays.asp)
    - [js.info - arrays](http://javascript.info/array)
    - [js.info - array-methods](http://javascript.info/array-methods)

    1.  Array in JS is an object with numerable properties
    2.  Declaring and defining an array

        ```javascript
        var arr = []; //empty arr
        var carManfacturers = ["Borsch", "Ferrari", "Mercedes"]; //array of length 3

        //or

        var arr = new Array(7); //array of 7 "undefined" elements
        var laptopManfacturers = new Array("Dell", "Lenovo", "HP"); //array of length 3
        ```

    3.  Accessing elements using the `[]` operator

        ```javascript
        var arr = [3, 4, 5];
        console.log(arr[0]); //prints 3
        ```

    4.  Editing elements

        ```javascript
        var arr = [3, 4, 5];
        arr[0] = "Thank you";
        console.log(arr[0]); //prints "Thank you"
        ```

    5.  Adding new element by index

        ```javascript
        var arr = [3, 4, 5];
        arr[3] = 6;
        console.log(arr); // prints [3, 4, 5, 6]
        ```

    6.  Array can have multiple types

        ```javascript
        var multiTypes = [1, "Hi", true, ["I", "am", "a", "new", "array"], {name: "Ahmed", age="122"}];
        ```

    7.  Multidimensional Array (array of arrays)

        ```javascript
        var arr = [[1, 2, 3], [4, 5, 6], [7, [8, 9]], [10, 11]];
        ```

    8.  Array properties and methods

        1.  `Array.length`
        2.  `Array.pop()`
        3.  `Array.push()`
        4.  `Array.shift()`
        5.  `Array.unshift()`
        6.  `Array.splice`

    9.  Looping through the array using `for`

        ```javascript
        var arr = [0, 2, 4, 6];
        var sum = 0;
        for (var i = 0; i < arr.length; ++i) {
          sum += arr[i];
        }

        console.log(sum); //prints the sum of the elements in the array
        ```

4.  Browser Rendering / DOM Creation:
    - [How a web browser builds and displays a web page - Youtube](https://www.youtube.com/watch?v=DuSURHrZG6I)
    - [How Web Browsers Function - Youtube](https://www.youtube.com/watch?v=z0HN-fG6oT4)
    - Browser Rendering Optimization - Udacity:
      - [Course](https://classroom.udacity.com/courses/ud860)
      - [Read](https://james-priest.github.io/udacity-nanodegree-mws/course-notes/browser-rendering-optimization.html)
    - [Website Performance optimization - Udacity](https://www.udacity.com/course/website-performance-optimization--ud884)
