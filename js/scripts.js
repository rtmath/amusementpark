$(document).ready(function() {
  $("form#animalPicker").submit( function(event) {
    event.preventDefault();

    var animal = $("#animal").val();
    var location ="as";
    if (animal === "Turtle"){
      location = "turtle.html";
    }else if (animal === "Snake"){
      location = "snake.html";
    }else if (animal === "Beetle"){
      location = "beetle.html";
    }

    window.location.href = location;


    console.log(location);
  });
});
