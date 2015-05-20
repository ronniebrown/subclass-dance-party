
var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  
  this.setPosition(top, left);
  };

makeDancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

