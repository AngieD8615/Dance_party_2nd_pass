var SliderDancer = function(top, left, timeBetweenSteps) {  
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('slide').prepend('<img id="loading" src="http://clipart-library.com/img/1830454.png">');
    
  };
  
  SliderDancer.prototype = Object.create(Dancer.prototype);
  SliderDancer.prototype.constructor = SliderDancer;
  
  SliderDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
  };