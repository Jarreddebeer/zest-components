define(['zest', 'com!app/FlexSlider/flexslider'], function($z, FlexSlider) {
  $z.render(FlexSlider, {
    animation: 'slide',
    slideshowSpeed: 2500    
  }, document.body);

});
