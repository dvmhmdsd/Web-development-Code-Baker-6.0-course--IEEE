# Session 4 Summary

1.  Functions

    1.  Creating a function

            Named

            	function functionName(parameters) {
            		code here ..
            	}

            or Anonymous using function expression

                var functionName = function(parameters) {
                    code here ..
                }

    2.  Invocation (calling) of a function

                function addTwoNumbers(x, y) {
                    return x + y;
                }

                let sum = addTwoNumbers(10, 20); //this stores 30 in the variable sum

                console.log(addTwoNumbers(3, 5)); // this prints 8 to the console

    3.  passing a function as a parameter to another one

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

    4.  **Links for functions** : [W3Schools](https://www.w3schools.com/js/js_functions.asp) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) | [js.info 1](https://javascript.info/function-basics) | [js.info 2](https://javascript.info/function-expressions-arrows)

2.  Objects >>> [js.info](http://javascript.info/object-basics)

    Syntax Example

            var std123 = {
                name: "Ebrahim Gomaa"
            };

    1.  Concept of Objects
    2.  Literals and `new`
    3.  Properties and methods
    4.  `this` and the global obj.
    5.  Accessing properties using `(.)` or `[]`
    6.  Check property existence
    7.  deleting a prop.
    8.  New features
        1. Computed property name
        2. prop. name/value shorthand
    9.  Looping through props `(for .. in)`
    10. Referenced by default

3.  Arrays >> [W3Schools](https://www.w3schools.com/js/js_arrays.asp) | [js.info 1](http://javascript.info/array) |[js.info 2](http://javascript.info/array-methods)

    1.  Array in JS is an object with numerable properties
    2.  Declaring and defining an array

                var arr = []; //empty arr
                var carManfacturers = ["Borsch", "Ferrari", "Mercedes"]; //array of length 3

                //or

                var arr = new Array(7); //array of 7 "undefined" elements
                var laptopManfacturers = new Array("Dell", "Lenovo", "HP"); //array of length 3

    3.  Accessing elements using the `[]` operator

            var arr = [3, 4, 5];
            console.log(arr[0]); //prints 3

    4.  Changing elements

            var arr = [3, 4, 5];
            arr[0] = "Thank you"
            console.log(arr[0]) //prints "Thank you"

    5.  Adding new element by defining it explicitly

            var arr = [3, 4, 5];
            arr[3] = 6;
            console.log(arr) // prints [3, 4, 5, 6]

    6.  Array can have multiple types

            var multi = [1, "Hi", true, ["I", "am", "a", "new", "array"], {name: "Ahmed", age="122"}];

    7.  Multidimensional Array (array of arrays)

            var XO_grid = [["X", null, "O"], ["X", null, "O"], ["O", "X", null]];
            //This array represents the grid of an XO game, If an X is added in row 1, col 2 then ..
            XO_grid[0][1] = "X"

    8.  Array properties and methods

        1.  `Array.length`
        2.  `Array.pop()`
        3.  `Array.push()`
        4.  `Array.shift()`
        5.  `Array.unshift()`
        6.  `Array.splice`

    9.  Looping through the array using `for`

                var arr = [0, 2, 4, 6];
                var sum = 0;
                for (var i = 0; i < arr.length; ++i) {
                    sum += arr[i];
                }

                console.log (sum); //prints the sum of the elements in the array

4.  [How the browser renders the Website](https://james-priest.github.io/udacity-nanodegree-mws/course-notes/browser-rendering-optimization.html)
