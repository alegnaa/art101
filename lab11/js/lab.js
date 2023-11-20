// index.js - purpose and description here
// Author: Angela Ambriz
// Date: 11.16.23

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}
  
  // click listener for button
$("#submit").click(function(){
    const userName = $("#userName").val();
    userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
