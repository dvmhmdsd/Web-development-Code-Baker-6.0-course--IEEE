# Session 9 Summary - React

1. React is a `js` library built by facebook to help in building complex user interfaces with simple effort. 
2. It divides the UI into `reusable`, `interactive` & highly scalable components. 
3. Every component has `state` which describes the representation of the component. 
4. React makes a `virtual DOM` which makes the cost of updating the DOM very cheap:
   a. Change the state of component
   b. React creates a new virtual Dom and compares the old and new virtual DOMs 
   c. Update only this part in the real DOM. 
5. You can add `react` to an existing app by:
   a. inserting the `CDN` links of react itself and `react-dom` packages. 
   b. Make the part that react will control later
     ```javascript
      <div id="app" ></div>
     ```
   c. To create a component 
     ```javascript
      class App extends React.Component {
          render() {
             return ();
          } 
      } 
     ```
   b. Add it to the DOM:
      
      ```javascript
       ReactDOM.render(<App />, document.querySelector("#app"))
      ```

6. React uses `JSX` which is writing HTML inside Javascript which makes it simple to create, add classes & events to an element, so you need to add `babel` to your code to transpile jsx into understandable javascript code. 

**Resources**

[What's react - Mosh](https://youtu.be/N3AkSS5hXMA)
