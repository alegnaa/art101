// index.js - purpose and description here
// Author: Angela Ambriz
// Date: 12.7.23

    // Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://xkcd.com/info.0.json",

  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log(data);
      var comicObj = data;
      var imageUrl = data.img;
      var printableData = "<pre>" + JSON.stringify(comicObj) + "</pre>";
      console.log(printableData);
      $("#output1").append("<h1>" + comicObj.title);
      var html = `<div id="imageblock">
      <img src="${imageUrl}">
    </div>`
  // console.log("My new html: \n", html);
  $("#output").html(html);
  $("#output").append("<p>" + comicObj.alt);
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
});
