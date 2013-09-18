'use strict';

autocar.controller('MainCtrl', function($scope, SearchIndex) {

  SearchIndex.getCarList().success(function(data) {

  	$scope.results = data;

  }).error(function() {
    console.log('error getting car list');
  })

  $scope.expandListing = function(ev) {
    angular.element(ev.srcElement).parent().parent().toggleClass('result-large');
    var imgUrl = angular.element(ev.srcElement).parent().parent().find('img').attr('data-src');
    angular.element(ev.srcElement).parent().parent().find('img').attr('src',imgUrl);
  }

});