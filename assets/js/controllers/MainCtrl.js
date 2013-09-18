'use strict';

autocar.controller('MainCtrl', function($scope, SearchIndex) {

  SearchIndex.getCarList().success(function(data) {

  	$scope.results = data;

  }).error(function() {
    console.log('error getting car list');
  })

  $scope.expandListing = function(ev) {
    var elem = angular.element(ev.srcElement).parent().parent().toggleClass('result-large');
  }

});