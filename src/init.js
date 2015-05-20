$(document).ready(function(){
  window.dancers = [];
  
  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    //make a dancer with a determined position


    // var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // var dancerMakerFunction = window[dancerMakerFunctionName];

    // var pythDancer = new dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );

    /////
  $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(){
    $(".dancer").css("left", 0);
    $(".break-dancer").css("left", 0);
    $(".worm-dancer").css("left", 0);
    $(".blinky-dancer").css("left", 0);
  });


  $(".jungleFloor").on("click", function(){
    $("body").css("background-image", "url(http://cdn2.stocksy.com/a/Wy3000/z0/15284.jpg)");
    $("body").append("<div class='jungleFloor'><h1>Break it dowwwwwnnnn</h1></div>");
  });

  $(".boogie").on("click", function () {
    $('.break-dancer').fadeOut(2500, function() {
    $(".break-dancer").css("border", "75px solid red");
    $(".break-dancer").css("border-radius", "150px 25px 50px 25px");
    $(".boogie").attr('value','fadeOut() is now Complete');
    });
  });

});


