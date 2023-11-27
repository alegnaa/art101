// index.js - Lab 12
// Author: Angela Ambriz
// Date: 11.21.23

function sortingHat(str) {
  length = str.length;
  mod = length % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The sorting hat has decided to sort you into " + house + "!</p>";
  document.getElementById("output").innerHTML = newText;
})