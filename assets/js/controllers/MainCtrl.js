'use strict';

autocar.controller('MainCtrl', function($scope, $location, $routeParams, SearchIndex) {

  SearchIndex.getCarList().success(function(data) {

    if ($routeParams.query) {
      $scope.query = $routeParams.query;
    }

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
      $location.path('#/');
    }

  }).error(function() {
    console.log('error getting car list');
  })


  $scope.expandListing = function(ev) {
    $(ev.target).parent().parent().toggleClass('result-large');
    var imgUrl = $(ev.target).parent().parent().find('img').attr('data-src');
    $(ev.target).parent().parent().find('img').attr('src',imgUrl);
  }


});