'use strict';

// DIRECTIVES (Logic that can transform markup in the view)

// FILTERS (Translates strings in the view)

autocar.filter('escape', function() {
  // Encodes a string fit for a URL
  return function(e) {
    return escape(e);
  }
});
