'use strict';

autocar.controller('MainCtrl', function($scope, SearchIndex) {

  SearchIndex.getCarList().success(function(data) {

  	$scope.results = data;

    var pagesShown = 1;
    var pageSize = 10;

    $scope.itemsLimit = function() {
        return pageSize * pagesShown;
    };

    $scope.showMore = function() {
      pagesShown = pagesShown + 1;  
    }

    $scope.clearSearch = function() {
      $scope.query = '';
      pagesShown = 1;
    }

    $scope.expandListing = function(ev) {
      angular.element(ev.srcElement).parent().parent().toggleClass('result-large');
      var imgUrl = angular.element(ev.srcElement).parent().parent().find('img').attr('data-src');
      angular.element(ev.srcElement).parent().parent().find('img').attr('src',imgUrl);
    }

  }).error(function() {
    console.log('error getting car list');
  })

});