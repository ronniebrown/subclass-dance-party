var makeBreakDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, timeBetweenSteps);
  this.$node = $('<span class="break-dancer"></span>');
  this.setPosition(top, left);
};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);

makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function(){
  
  makeDancer.prototype.step.call(this);
  
  this.$node.toggle();
  // $(".break-dancer").fadeOut("slow", function() {});
  $(".break-dancer").mouseover(function(){
    $(".break-dancer").css("border", "50px solid green");
  });
};

makeBreakDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  // if (window.dancers.length > 0){ 
  //   var recent = window.dancers[window.dancers.length -1];
  //   Math.sqrt(
  //           Math.pow(aPosition.x - bPosition.x, 2) + 
  //           Math.pow(aPosition.y - bPosition.y, 2) 
  //       );
  //   }

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};