define(['zest', 'jquery', 'http-amd/json', 'jade!./flexslider', './vendor/jquery.flexslider-min', 'css!./vendor/flexslider.css', 'less!./flexslider'], function($z, $, json, FlexSliderTemplate) {
  return $z.create([$z.Component], {
    type: 'FlexSlider',
    options: {},
    render: FlexSliderTemplate,
    pipe: true,    
    construct: function(el, o) {
      this.$el = $(el);
      this.init();
    },
    prototype: {
      __init: function() {
        this.o.start = this.start;
        this.o.before = this.before;
        this.o.after = this.after;
        this.o.end = this.end;
        this.o.added = this.added;
        this.o.removed = this.removed;
        // Initialize the slider
        this.$el.flexslider(this.o);
        // Access the data
        this.slider = this.$el.data('flexslider');
      },
      // Methods
      __play: function() {
        this.$el.flexslider('play');
      },
      __pause: function() {
        this.$el.flexslider('pause');
      },
      __next: function() {
        this.$el.flexslider('next');
      },
      __prev: function() {
        this.$el.flexslider('prev');
      },
      __goTo: function(index) {
        this.$el.flexslider(index);
      },
      __addSlide: function(obj, pos) {
        this.slider.addSlide(obj, pos);
        // has callback added()
      },
      __removeSlide: function(obj) {
        this.slider.removeSlide(obj);
        // has callback removed()
      },
      __container: function() {
        return this.slider.container;
      },
      __slides: function() {
        return this.slider.slides;
      },
      __count: function() {
        return this.slider.count;
      },
      __currentSlide: function() {
        return this.slider.currentSlide;
      },
      __animatingTo: function() {
        return this.slider.animatingTo;
      },
      __animating: function() {
        return this.slider.animating;
      },
      __atEnd: function() {
        return this.slider.atEnd;
      },
      __manualPause: function() {
        return this.slider.manualPause;
      },
      __controlNav: function() {
        return this.slider.controlNav;
      },
      __directionNav: function() {
        return this.slider.directionNav;
      },
      __controlsContainer: function() {
        return this.slider.controlsContainer;
      },
      __manualControls: function() {
        return this.slider.manualControls;
      },
      __flexAnimate: function(target) {
        this.slider.flexAnimate(target);
      },      
      __resume: function() {
        this.slider.resume();
      },
      __canAdvance: function(target) {
        return this.slider.canAdvance(target);
      },
      __getTarget: function(dir) {
        return this.slider.getTarget(dir);
      },
      // Callbacks
      __start: function() {},
      __before: function() {},
      __after: function() {},
      __end: function() {},
      __added: function() {},
      __removed: function() {}
    }
  });
});