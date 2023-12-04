// index.js - purpose and description here
// Author: Angela Ambriz
// Date: 12.3.23

  $("#activate").click(function(){
    $.ajax({
      // The URL for the request (from the api docs)
      url: "https://api.chucknorris.io/jokes/random",
      // The data to send (will be converted to a query string)
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
         // do stuff
          console.log(data);
          var printableData = "<pre>" + JSON.stringify(data) + "</pre>";
          console.log(printableData);
          $("#output").append("<p>" + data.value);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) { 
          // do stuff
            console.log("Error:", textStatus, errorThrown);
  }})
  
  });