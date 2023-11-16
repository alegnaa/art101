// index.js - purpose and description here
// Author: Angela Ambriz
// Date: 11.16.23

function generateRandomText() {
  const text = "hello, this is me speaking. I don't know how long this should go for but yep mhm. I don't like talking to other people so sorry for the stutter.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
