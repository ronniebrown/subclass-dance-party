var makeWormDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this);
  this.$node = $('<span class="worm-dancer"></span>');
  // this.top = Math.random() * 30000;
  // this.left = Math.random() * 15000;
  // this.timeBetweenSteps = 1000;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  console.log(this.$node);
};

makeWormDancer.prototype = Object.create(makeWormDancer.prototype);

makeWormDancer.prototype.constructor = makeWormDancer;

makeWormDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};