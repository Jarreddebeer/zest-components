define(['zest', 'jade!./template', 'less!./style'], function($z, Template) {
  return $z.create([$z.Component], {
    options: {
      title: '',
      inverted: true,
      static: false,
      alignment: 'top', // top, bottom
      responsive: false /* TODO: implement collapse plugin etc */
    },
    type: 'Navbar',
    render: function(o) {

      var navBarClass = [];
      navBarClass.push( (o.alignment=='bottom') ? 'navbar-fixed-bottom' : (o.static) ? 'navbar-static-top' : 'navbar-fixed-top' );
      (o.inverted) ? navBarClass.push('navbar-inverse') : '';

      return Template({'navClass': navBarClass.join(' '), 'title': o.title});
    },
    contents: function(o) {
      return o.contents
    }

  });

});
