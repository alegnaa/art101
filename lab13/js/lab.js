// index.js - lab 13: Loops
// Author: Angela Ambriz
// Date: 11.26.23


for(var index=1;index<=200;index++ ) {
  var number = '';

  if (index%15 === 0) {
    $("#output").append("<p>fizz-buzz</p>");
  }
  
  else if (index%21 === 0) {
    $("#output").append("<p>fizz-boom</p>");
  }
  else if (index%40 === 0) {
    $("#output").append("<p>buzz-boom</p>");
  }
  else if (index%3 === 0) {
    $("#output").append("<p>fizz</p>");
  }
  else if (index%5 === 0) {
    $("#output").append("<p>buzz</p>");
  } 
  else if (index%7 === 0) {
    $("#output").append("<p>boom</p>");
  } else {
    number = [...String(index)].join(''); // wesbot helped me with this code
    $("#output").append(`<p>${number}</P>`); //same "              "
  }
  console.log("numbers are written");
}