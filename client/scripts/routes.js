angular
  .module('it2901')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('noauth', {
      url: '/',
      templateUrl: 'client/templates/noauth.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'client/templates/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'client/templates/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'client/templates/home.html',
          controller: 'HomeCtrl as home'
        }
      }
    })
    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'client/templates/profile.html',
          controller: 'ProfileCtrl as profile'
        }
      }
    })
    .state('tab.profile.edit', {
      url: '/edit',
      templateUrl: 'client/templates/editProfile.html',
      controller: 'ProfileCtrl as profile'
    })
    .state('tab.activities', {
      url: '/activities',
      views: {
        'tab-activities': {
          templateUrl: 'client/templates/activity.html',
          controller: 'ActivityCtrl as activity'
        }
      }
    })
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'client/templates/settings.html',
          controller: 'SettingsCtrl as settings'
        }
      }
    })

  $urlRouterProvider.otherwise('/');
}
