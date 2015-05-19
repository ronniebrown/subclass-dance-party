$(document).ready(function(){
  window.dancers = [];
  
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */ 

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

});


