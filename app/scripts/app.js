(function() {

  function config($locationProvider, $stateProvider) {
          $locationProvider
              .html5Mode({
                  enabled: true,
                  requireBase: false
               });

          $urlRouterProvider.otherwise('/home');

          $stateProvider
              .state('home', {
                  url: '/',
                  controller: 'HomeCtrl as home',
                  templateUrl: '/templates/home.html'
              });
      }

     angular
         .module('blocChat', ['ui.router', 'firebase'])
 })();
