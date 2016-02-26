'use strict';

angular.module('myAngularProjectApp', [
  'myAngularProjectApp.auth',
  'myAngularProjectApp.admin',
  'myAngularProjectApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
