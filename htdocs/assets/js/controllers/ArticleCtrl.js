'use strict';

autocar.controller('ArticleCtrl', function($scope) {

  $scope.fadeClass = 'fade-show';
  $scope.fadeDelay2Class = 'fade-delay2-show';
  $scope.fadeDelayClass = 'fade-delay-show';

  $scope.isPaywalledClass = 'is-paywalled';

  $scope.unlock = function() {
    $scope.isPaywalledClass = 'unlocked';
  }

  $('.chapter-nav a').click(function() {
    var dest = $(this).attr('href');
    try {
      $(window).scrollTop($(dest).offset().top - 60);
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
        'top': '60px'
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
        if ( isScrolledIntoView($(this))) {
          var i = $(this).attr('id').substring(8,9);
          $('.chapter-nav li').removeClass('active').eq(i-1).addClass('active');
        }
    });

  });

  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop(),
        docViewBottom = docViewTop + $(window).height()/2,
        docViewLeft = $(window).scrollLeft(),
        docViewRight = docViewLeft + $(window).width()/2;
  
      var elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).height()/2,
        elemLeft = $(elem).offset().left,
        elemRight = elemLeft + $(elem).width()/2;
  
    return (
      (elemBottom >= docViewTop) &&
      (elemTop <= docViewBottom) &&
      (elemLeft <= docViewRight) &&
      (elemRight >= docViewLeft)
    );
  }

});