// the javascript engine and routine
// execution contexts and the call stack
// what is inside execution contex?
//1. variable environments
//2. scope chain
//3. this keyword
// a call stack is a place where execution contexts get stacked on top of eachother, to keep track of where we are in the execution.
// the scope and the scope chain
// scoping is how all program variables are organized and accessed in the js engine.
// scope of a variable is a region of our code where a certain variable can be accessed
// functions are value that are stored in variables
// types of scope
// 1. global scope: it is declared outside of any functin or block. variables can be accessible everywhere
// const myName = "Robiat";
// const myAge = "33";
// const myYear = "2025";

// console.log(myName, myAge, myYear);
/// 2. function scope: variables are only accessed inside functions. it is also called local scope
// function myDetails(year) {
//   const now = "33";
//   const age = now - year;
//   return age;
// }
// console.log();
// // 3. block scope: variables are only accesible inside block
// if (year >= 1991 && year <= 1996) {
//   const now = true;
//   const food = "rice";
// }
// console.log(now);

// scope chain vs call stack
// const a = "jonas";
// first();

// function first() {
//   const b = "Hello";
//   second();

//   function second() {
//     const c = "Hi!";
//     third();
//   }
// }

// function third() {
//   const d = "Hey!";
//   console.log(d + c + b + a);
// }
