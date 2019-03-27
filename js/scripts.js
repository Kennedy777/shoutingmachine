$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var textInput = $("input#text").val().toUpperCase();

    $(".text").text(textInput);


    $("#transformation").show();
    event.preventDefault();

  });
});
