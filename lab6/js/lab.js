// index.js - purpose and description here
// Author: Angela Ambriz
// Date: 10.26.23

// Constants
myTransport = ["car", "bus", "bike"];

var myMainRide = {
    make: "Chevrolet",
    model: "Spark",
    color: "White",
    year: 2016, 
    age: function() {
      return 2023 - this.year;
  }
}
// Functions
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// code from lab
document.writeln("Getting around in a " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");


// let's get this party started
main();
