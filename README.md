# Session 3 - Summary
1. Intro to _Javascript_  : 
    - [js.info](http://javascript.info/intro)
2. Debugging _Javascript_ (finding Errors) using Browser console : 
    - [js.info](http://javascript.info/devtools)
    - [Useful Youtube Video on Chrome DevTools](https://youtu.be/x4q86IjJFag)
    - [Useful course for learning DevTools](https://frontendmasters.com/courses/chrome-dev-tools-v2)
3. Variables 
   - __Syntax__
       ```javascript
       var varName = "put the value here"
       ```

   - __Links__:  
        - [W3schools](https://www.w3schools.com/js/js_variables.asp)
        - [js.info](http://javascript.info/variables) - take care it uses the keyword `let` instead of `var` so don't get confused.
 4. Data Types
    - [js.info](http://javascript.info/types)
    - [W3schools](https://www.w3schools.com/js/js_datatypes.asp)
 5. Operators
    - [js.info - Mathematical](http://javascript.info/operators)
    - [js.info - Logical](http://javascript.info/comparison)
    - [W3schools](https://www.w3schools.com/js/js_operators.asp)
 6. Browser Interaction 
  
    - __Syntax Examples__
         ```javascript
         var name = prompt("Enter your name);
         ```

        and
                
        ```javascript
        var name = "Your name";
        alert(name); //This outputs the value of name in a message
        ```

        and
                
        ```javascript
        var name = "Mohamed";
        console.log(name); //This outputs the value of name to the browser console
        ```

    - __Links__ 
        - [js.info](http://javascript.info/alert-prompt-confirm)
     
 7. Conditions (if statments)
    - __Syntax__

        ```javascript
        if(condition) {
            some code excuted if the condition is true...
        }
        ```
        or
        ```javascript
        if (condition) {
            some code ..
        } else {
            some other code ..
        }
        ```
        or even
        ```javascript   
        if (condition) {
            some code ...
        } else if (another condition) {
            some code ..
        } else if (third condition) {

        }
        ....
        } else {
            some code ...
        }
        ```

    - __Links__
        - [js.info](http://javascript.info/ifelse)
        - [W3schools](https://www.w3schools.com/js/js_if_else.asp)

 8. Loops
    - __Syntax__
        there's 2 types:
        ```javascript
        for (var i = 0; i < 10; i++) {
            some code ...
        }
        ```
        This is repeated 10 times
        or
        ```javascript    
        var i = 0;
        while (i < 10) {
            some code ...
            i++;
        }
        ```
    - __Links__ 
        - [js.info](http://javascript.info/while-for)
        - [W3schools - for](https://www.w3schools.com/js/js_loop_for.asp)
        - [W3schools - while](https://www.w3schools.com/js/js_loop_while.asp) 
