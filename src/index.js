import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

var square = numbers.map((x) => {
  return x * x;
});
console.log("square: " + square);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

var multi = numbers.map((x) => {
  return x * 2;
});

console.log("multiply by 2 is " + multi);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

var filter = numbers.filter((x) => {
  return x > 10;
});

console.log("looking for greated than 10: " + filter);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

var reduce = numbers.reduce((x, y) => {
  return x + y;
});
console.log("Accumulating the value is: " + reduce);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

var find = numbers.find((x) => {
  return x > 10;
});

console.log("finding greated than 10: " + find);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

var indexFind = numbers.findIndex((x) => {
  return x > 50;
});
console.log("finding the index: " + indexFind);
