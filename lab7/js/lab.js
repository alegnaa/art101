// index.js - purpose and description here
// Author: Angela 
// Date: 11.2.23

// Functions

function sortUserName () {
  var userName = window.prompt("hi hi! what's your name? i'll try my best to write it out :)");
  console.log("userName =", userName);

  var nameArray = userName.split ('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;

}


document.writeln("here we go! i hope it's spelled right: ",
  sortUserName(), "</br>");

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started 
main();
