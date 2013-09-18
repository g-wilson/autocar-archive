'use strict';

var autocar = angular.module('autocar', ['ngRoute','ngAnimate','ngSanitize']).
  config(function($routeProvider) {

    $routeProvider.
    when('/', {controller:'MainCtrl', templateUrl:'views/home.html'}).
    when('/article/:title', {controller:'ArticleCtrl', templateUrl:'views/article.html'}).
    when('/top100', {controller:'TopCtrl', templateUrl:'views/top100.html'}).
    otherwise({redirectTo:'/'});

  }).
  run(function() {
    // Init
  });

/* 
  Convenience methods

angular.module('myModule', []).

  value('valueName', object).               // Stores an object
  constant('constantName', variable).       // Stores a variable

  service('serviceName', function).         // Basic injectable function
  factory('factoryName', function).         // Configurable injectable function
  provider('providerName', function).       // Super configurable injectable function

  decorator('decoratorName', function);     // Modifiable wrappers for other providers

  filter('filterName', function).           // Function which operates on data inside the view

  directive('directiveName', function).     // DOM manipulation

  controller('controllerName' function)     // Logic called by view

*/