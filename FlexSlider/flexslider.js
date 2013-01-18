requirejs.config({
  shim: {
    'app/FlexSlider/vendor/jquery.flexslider': {
      deps: ['jquery'],
      exports: '$'
    }
  }
});

define(['./vendor/jquery.flexslider', 'jade!./template', 'css!./vendor/flexslider.css', 'less!./style'], function($, template) {
  return {
    render: template,
    pipe: true,    
    attach: function(el, o) {
      return $(el).flexslider(o);
    }
  };
});