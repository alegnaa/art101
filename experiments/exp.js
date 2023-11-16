$(".minor-section3").append("<button id='button'>very cool button</button>");

$("#button").click(function(){
    var name = prompt("hand over your name pls:");
    $('#title').html('hi '+ name);
});