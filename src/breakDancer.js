var makeBreakDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, timeBetweenSteps);
  this.$node = $('<span class="break-dancer"></span>');
  // this.top = Math.random() * 30000;
  // this.left = Math.random() * 15000;

//*****-----------add jquery animation to step function-----------*******
  
  // this.timeBetweenSteps = 1000;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setPosition(top, left);
};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);

makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
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