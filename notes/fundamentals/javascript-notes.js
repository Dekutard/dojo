// JAVASCRIPT IS AN INTERPRETED LANGUAGE

// An interpreted language is a language that is evaluated line-by-line at run-time. This means that there must be an interpreter that can evaluate the code that you write in order for it to work! That's right, every browser has a built in JS interpreter that allows you to run JS code on the client side. One thing to note, however, is that the JavaScript interpreter runs your code in two steps: 

// 1) it parses through your code and rearranges it to make it easier to run line by line and then 
// 2) it actually runs it line by line! 

// Understanding these two steps is the key to understanding some of the "weird quirks" of JavaScript. 





// JAVASCRIPT USES AN EVENT-DRIVEN PROGRAMMING STYLE

// I think this means instead of waiting for tasks to complete to continue, it'll listen for the event while getting other things done, and do the thing when it needs to.





// HOISTING

// In JS, variable AND function declarations are hoisted to the top of their scope. This means all vars and functions are defined at the top by default (and are set values/expressions later at the place(s) you specify), whether you write the code as such or not. You can even name variables the same in Global and a function, and they will be separate entities

// Note: vars will remain undefined until set, but FUNCTIONS can actually be run before their declaration perfectly fine. Unless you store it in a variable.

// classes are not hoisted.





// JS IS LOOSELY TYPED

// It's not picky about data types, and will willingly change types if needed. e.g. combining numbers and strings.





// PROTOTYPE

// Every object constructor creates a second memory space for all objects created by that constructor that is accessed by proto. It is one memory space, so any changes there affect every object spit out by that constructor. Basically (at least in ES6), you can access class (prototype) methods right from the class, and instance methods are instance only. I think.


// Major PROS of Prototype

// One memory space for all! If you are creating lots of the same object and use prototype, it can save you significant memory
// Great for general methods for objects
// We can access prototype methods with just using .method or .property.
// The interpreter will go through all prototypes in the prototype chain to check if any of them have the called method or property before giving up (it'll return/use the first match it finds).


// Major CONS of Prototype

// Methods generated in prototype cannot access the private variables inside the constructor function
// Lots of prototypes can be hard to read


// Adding methods to ES6 classes is the same as adding prototype methods to object constructors.
// In ES6, class methods are called 'static methods`, while instance methods are called 'prototype methods'.





// ES5 OOP

// To read and update private variables, we'll need to write getter and setter methods.

// Additionally, we can chain methods together by returning this. Essentially, whenever we tell a public or prototype method to return this, we're asking for the entire object back. This lets us chain function calls together.





// ES6 OOP

// Inheritance is done with the 'extends' keyword. Remember the super() function. It calls the constructor of the parent class. You can even call methods of the parent class with it (which I don't fully understand because you should be able to do that anyway if the class you extended inherited those methods).


// Getters and Setters
// Not sure about the utility of these guys; CD explicitly mentions there are many ways to recreate the technique, but I guess they serve to make things easier and quicker to read and write.


// Promises
// They, well, promise to execute code after something happens. when you call resolve(), '.then()' runs. when you call reject(), '.catch()' runs.





// IMMEDIATE FUNCTIONS

// and their disgusting syntax.

( function(param) {code} (args) );
// or
( function(param) {code} ) (args);

// (myfunction()) <-- create and run the function before doing anything else.
// (myfunction)() <-- create the function before doing anything else and then invoke the function!


// A common pattern when writing code that should be able to run on non-browser platforms, or when speed is important, is passing the global object as an argument. This creates a local copy of the global object inside the function, which results in faster lookup times.

// Example:

(function (global) {
   console.log( window );               // logs the window object
   console.log( global );               // logs the window object, but faster!
}) ( window ) ;

// Some Benefits:

// It reduces the number of global variables and mitigates variable name pollution.
// Features are self-contained units, resulting in easier testing.





// CLOSURES

// Basically functions returned by other functions.

function Outer() {
  var count = 0;
  function inner() {
    count++
    console.log(count);
  }
  return inner;         // if we returned "inner()", we wouldn't have to make the "counter" variable below to store it, 
                        // but we would have to run Outer() which would keep setting count back to 0.
}

var counter = Outer();  // THIS IS SPECIAL. Outer is invoked once, initializing count. It returns inner, storing it in counter, 
                        // so when counter is invoked, it only runs inner, therefore count is never reinitialized.
                        // If we didn't have this bad boy, running Outer would just print out the inner function in the browser. Crazy.

              // if we invoke the counter function
counter()     // this will console.log "1"
counter()     // this will console.log "2"
counter()     // this will console.log "3"
counter()     // this will console.log "4"
              // So that means that the count variable still exists! 
              // and it is being changed even though we aren't inside of the Outer function!
                   // What if we try to access count out here?
console.log(count) // doesn't work!





// ARROW FUNCTIONS

// The general syntax
// (param1, param2, …, paramN) => { statements }

// If there is only one expression you can leave off the {}
// (param1, param2, …, paramN) => expression

// If there is no parameters you use only the () and they become compulsory
// () => { statements }

// If there is only one parameter then the parenthesis are optional
// singleParam => { statements }



// By default, arrow functions return the result of the expression hence the 'return' keyword is optional — this applies only to single line arrow function.

var multiply = (a, b) => a * b        // returns the result
var multiply = (a, b) => {a * b}      // returns undefined
var multiply = (a, b) => {return a * b} // returns the result

// whenever we introduce the {} in the arrow function its considered as a multi line and we have to explicitly return.



// When returning objects, make sure to wrap them in parentheses (the braces are otherwise seen as the beginning/end of the function).
var myFunction = () => ({ age: 23 })



// Arrow functions also don't create their own "this", so when modifying properties of constructs, you can use it to properly refer to the same object as in the constructor.

function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}



// Don't use arrow functions for:
// 	1. Constructors - the 'new' keyword will make them error out
// 	2. Prototypes - they do not have prototype properties