$(document).ready(function() {
  $("#meow").click(function() {
    $("#cat-col ul").append("<li>Meow!</li>");
    $("#dog-col ul").append("<li>I love you!</li>")
    $("#cat-col ul").children("li").click(function() {
      $("<img src='../img/cat.jpg' />").insertAfter();
    });
  });

  $("#bark-bark").click(function() {
    $("#dog-col ul").append("<li>Bark Bark!</li>");
    $("#cat-col ul").append("<li>Fuck Off!</li>");

  });


});
