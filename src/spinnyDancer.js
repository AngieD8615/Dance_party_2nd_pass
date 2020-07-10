var SpinnyDancer = function(top, left, timeBetweenSteps) {  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("spinny").prepend('<img id="loading" src="http://www.vitorazevedo.net/external_files/loading_small.png">');
};

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};