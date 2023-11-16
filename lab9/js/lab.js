// index.js - purpose and description here
// Author: Angela Ambriz
// Date: 11.7.23

// Challenge Button

$(".challenge").append("<button id='button-challenge'>make the website pretty !!!</button>");
$(".problem").append("<button id='button-problem'>will definetly NOT make problems</button>");
$(".ref").append("<button id='button-ref'>very cool and mysterious button</button>");
$(".results").append("<button id='button-res'>click here to go back to normal</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  $(".challenge").toggleClass("special");
});

$("#button-problem").click(function(){
  $(".problem").toggleClass("special2");
});

$("#button-ref").click(function(){
  $(".ref").toggleClass("special3");
});

$("#button-res").click(function(){
  $(".results").toggleClass("special4");
  $("#button-res").html("I lied lol");
});