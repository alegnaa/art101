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

function desc(str) {
  length = str.length;
  mod = length % 4;
  if (mod == 0) {
    return "A Gryffindor values 'bravery, daring, nerve, and chivalry.' Those sorted in this house are not always what you may think of as 'brave' (they can be afraid), but they almost always will choose to do the right thing, despite consequences. They are the popular house and all the Potterheads want to be Gryffindor, even if they don't necessarily belong."
  }
  else if (mod == 1) {
    return "A Ravenclaw values 'intelligence, knowledge, and wit.' The nerds of Hogwarts, but in the best way. They don't need a wand to disarm you. Their words will cut you to the bone. They are highly intelligent, resourceful, creative, and clever. They're pretty cool and most Potterheads don't mind being sorted into Ravenclaw"
  }
  else if (mod == 2) {
    return "A Slytherin values 'ambition, cunning, and resourcefulness.' They are sly and clever in every way. They don't need to be brash to get what they want. They are considered the bullies of Hogwarts and the general all around evil-doers. But there are tons of great Slytherin alumni. We just hear a whole lot about the bad ones"
  }
  else if (mod == 3) {
    return "A Hufflepuff values 'hard work, dedication, patience, loyalty, and fair play.' They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house and many Potterheads treat being sorted into Hufflepuff like being worse than getting kissed by a dementor."
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The sorting hat has decided to sort you into " + house + "!</p>";
  document.getElementById("output").innerHTML = newText;

  var nameA = document.getElementById("input").value;
  var houseA = desc(nameA);
  newText2 = "<p>" + houseA + "</p>";
  document.getElementById("output2").innerHTML = newText2;
})