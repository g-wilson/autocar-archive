'use strict';

autocar.controller('ArticleCtrl', function($scope) {

  $('.chapter-nav a').click(function() {
    var dest = $(this).attr('href');
    try {
      $(window).scrollTop($(dest).offset().top - 50);
    } catch(e) {
      return false;
    }
    return false;
  });

  var stickyBlock = $('nav.chapter-nav'),
    elemTop = stickyBlock.offset().top,
    footerTop = $('#main').offset().bottom;

  $(window).scroll(function() {
    var docViewTop = $(window).scrollTop(),
      docViewBottom = docViewTop + $(window).height();

      if (docViewTop >= elemTop - 65) {
        // Element should be stuck to top
        stickyBlock.css({
          position: 'fixed',
          'bottom': 'auto',
          'top': '65px'
        });
      } else if (docViewTop <= elemTop) {
        // Element should be un-stuck
        stickyBlock.css({
          position: 'absolute',
          'bottom': 'auto',
          'top': elemTop
        });
      }

    // Find out what section we're looking at and make the nav item active
    $('section.chapter').each(function(){
      if ( isScrolledIntoView($(this)) ) {
        var i = $(this).index();
        $('.chapter-nav ul li').removeClass('active').eq(i-2).addClass('active');
      }
    });

  });

  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop(),
        docViewBottom = docViewTop + ($(window).height()/2);
  
      var elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).height();
  
    return (
      (elemBottom >= docViewTop) &&
      (elemTop <= docViewBottom)
    );
  }

});