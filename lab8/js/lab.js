// index.js - purpose and description here
// Author: Angela Ambriz
// Date: 11.5.23

// Constants

// Functions
array = [1, 4, 53, 36, 249253, 2, 22, 532, 9]

var x = 2

function add(x){
  var results = (x + 2)
  return results;
}

console.log("I want to add two ... BOOM: ", x )

console.log("here's the number list: ", array)

var result = array.map(add);

console.log("here are the new and improved numbers :3: ", result);

var result = array.map(function(x){
  var results = x * 2;
  return results;
})

console.log("I very much prefer even numbers, so i multiplied them by two lol: ", result);

// let's get this party started

