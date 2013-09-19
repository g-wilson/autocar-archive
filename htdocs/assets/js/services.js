'use strict';

// SERVICES (Funtions shared with controllers in this module)

autocar.factory('SearchIndex', function($http) {
  return {

    getCarList: function() {
      return $http({
        url: 'car-list.json',
        method: 'GET',
        cache: true
      });
    }

  }
});

// });